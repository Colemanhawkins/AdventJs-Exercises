function countHours(year: number, holidays: string[]): number {
  let hours = 0
    for(let stringDay of holidays) {
        const [month, day] = stringDay.split('/');
        const date = new Date(`${year}-${month}-${day}`);
        const dayOfWeek = date.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 5) hours += 2
    }
  return hours
} 

const year = 2000
const holidays = ['01/01'] // formato MM/DD
countHours(year, holidays) // 2 días -> 4 horas extra en el año