let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let start = document.getElementById('start')
let stop = document.getElementById('stop')

console.log('hello page is working');

let intervalId;

function stopWatchStart() {
    console.log('function click');
    let hours = 0
    let minutes = 0
    let second = 0
    intervalId = setInterval(() => {
        second++
        if (second === 60) {
            second = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hours++
        }
        hr.innerHTML = hours
        min.innerHTML = minutes
        sec.innerHTML = second

    }, 1000);
}

function stopWatchStop() {
    console.log('stop function clicked');
    clearInterval(intervalId)
    hr.innerHTML = 0
    min.innerHTML = 0
    sec.innerHTML = 0
}

start.addEventListener('click', stopWatchStart)
stop.addEventListener('click', stopWatchStop)
