const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
var Totalseconds, minutes, hours, days, seconds, diff
const newYears = '1 January 2023'

function calcDate() {
    const newYearsDate = new Date(newYears)
    console.log(newYearsDate)
    const currentDate = new Date()
    console.log(currentDate)
    Totalseconds = Math.floor((newYearsDate - currentDate) / 1000)
    diff = Math.floor(newYearsDate - currentDate)
    console.log(diff)

    seconds = Totalseconds
    minutes = Math.floor(Totalseconds / 60)
    hours = Math.floor(minutes / 60)
    days = Math.floor(hours / 24)
    //days = Math.floor(Totalseconds / (3600 * 24))
    //hours = Math.floor(Totalseconds / 3600)
    //minutes = Math.floor(Totalseconds / 60)
    //seconds = Math.floor(Totalseconds)
    console.log()
}

var day1 = new Date("08/25/2020");
var day2 = new Date("08/25/2021");

var difference = Math.abs(day2 - day1);
days = difference / (1000 * 3600 * 24)

console.log(days)


calcDate()
setInterval(calcDate, 1000)
console.log(Totalseconds)

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;

