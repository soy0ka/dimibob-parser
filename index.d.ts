interface DayResult {
  breakfast: string[]
  lunch: string[]
  dinner: string[]
}

interface Result {
  mon: DayResult
  tue: DayResult
  wed: DayResult
  thurs: DayResult
  fri: DayResult
  sat: DayResult
  sun: DayResult
}

export async function parse (path: string): Promise<Result>
