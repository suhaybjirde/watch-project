const startPause = document.querySelector('.start-pause');
const reset = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;
let hours = 0


let timeStatas = 'stopped';
let setIntervalIde = null;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

function watch() {
    seconds++;
    if (seconds / 60 === 1) {
        minutes++;
        seconds = 0
    }
    if (minutes / 60 === 1) {
        hours++;
        minutes = 0
    }
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString()
    } else {
        leadingSeconds = seconds
    }
    if (minutes < 10) {
        leadingMinutes = "0"+ minutes.toString()
    } else {
        leadingMinutes = minutes
    }
    if (hours < 10) {
        leadingHours = "0" + hours.toString()
    } else {
        leadingHours = hours
    }

    document.querySelector('.timer').innerHTML = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`

}
startPause.addEventListener('click', ()=> {
    if (timeStatas === 'stopped') {
        setIntervalIde = window.setInterval(watch, 1000);
        startPause.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>';
        timeStatas = 'started'
    } else {
        window.clearInterval(setIntervalIde);
        startPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        timeStatas = 'stopped'
    }
})

reset.addEventListener('click', ()=> {
    window.clearInterval(setIntervalIde)
    startPause.innerHTML = '<i class="fa-solid fa-play"></i>'
    seconds = 0;
    minutes  = 0;
    hours = 0;

    document.querySelector('.timer').innerText = '00:00:00'
})