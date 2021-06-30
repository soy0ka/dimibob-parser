const parser = require('@dimigo/excel')
const day = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']
// 이 코드는 안보는게 좋아요... 하드코딩의 결정체거든요 하하하

async function excel(path) {
    const data = await parser.parseXlsx(path)
    const result = require('./result')
        for(let j=0;j<10;j++){
            let i = 0
            for(const meal of data[4+j]){
                if(!meal.includes('조 식') && !meal.includes('중 식') && !meal.includes('석 식') && meal!=='' && meal!=='*' && meal!=='<국없는날>'){
                    result[day[i]].breakfast.push(meal.replace(/\d+/g, '').replaceAll('\(','').replaceAll('\)','').replaceAll('.','').replaceAll('ㆍ',''))
                    if(result[day[i]].breakfast.indexOf('종과일') != -1) result[day[i]].breakfast[result[day[i]].breakfast.indexOf('종과일')] = "2종과일"
                    if(result[day[i]].breakfast.indexOf('종시리얼') != -1) result[day[i]].breakfast[result[day[i]].breakfast.indexOf('종시리얼')] = "2종시리얼"
                    i++
                }
            }
        }
        for(let j=0;j<6;j++){
            let i = 0
            for(const meal of data[23+j]){
                if(!meal.includes('조 식') && !meal.includes('중 식') && !meal.includes('석 식') && meal!=='' && meal!=='*' && meal!=='<국없는날>'){
                    result[day[i]].lunch.push(meal.replace(/\d+/g, '').replaceAll('\(','').replaceAll('\)','').replaceAll('.','').replaceAll('ㆍ',''))
                    i++
                }
            }
        }
        for(let j=0;j<7;j++){
            let i = 0
            for(const meal of data[34+j]){
                if(!meal.includes('조 식') && !meal.includes('중 식') && !meal.includes('석 식') && meal!=='' && meal!=='*' && meal!=='<국없는날>'){
                    result[day[i]].dinner.push(meal.replace(/\d+/g, '').replaceAll('\(','').replaceAll('\)','').replaceAll('.','').replaceAll('ㆍ',''))
                    i++
                }
            }
        }
        return result
}


module.exports={
    parse:excel
}