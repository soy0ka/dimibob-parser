const parser = require('@dimigo/excel')
const template = require('./result')
const exceptions = ['2종과일', '2종시리얼']
const day = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']
const type = (index) =>
  index < 22
    ? 'breakfast'
    : index < 33 ? 'lunch' : 'dinner'
function BufferCheck (pathOrBuffer) {
    return parser[pathOrBuffer instanceof Buffer ? 'parseXlsx' : 'parseXlsxFile'](pathOrBuffer)
}
async function parse (pathOrBuffer) {
    const excel = await BufferCheck(pathOrBuffer)
    const sheet = excel.get('sheet1')
    const result = Object.assign({}, template)
    const datas = sheet.toArray()
    const date = datas[2][0].replace('년','-')+datas[3][1].replace('월','-').replace('일','')
    result.date.string = date
    result.date.timestamp = Date.parse(date)
    for (const index in datas) {
      if (index < +4 || index > 40) continue
      if (index < 22 && index > 14) continue
      if (index < 33 && index > 29) continue
  
      const dayDatas = datas[index]
  
      for (const date in dayDatas) {
        const dayData = dayDatas[date]
  
        if (!dayData) continue
        if (/\*$|조 식|중 식|석 식|<국없는날>/g.test(dayData)) continue
        const dayParsed =
          !exceptions.find((v) => dayData.includes(v))
            ? dayData.replace(/\d+|\(|\)|\.|ㆍ/g, '')
            : dayData
  
        result[day[date - 1]][type(index)].push(dayParsed)
      }
    }
  
    return result
  }
  
module.exports = { parse }
  
