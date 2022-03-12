const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function getBirthDate(birthText) {
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    
    var birthDate = new Date(birthText + currYear);
    
    if (Math.abs(birthDate) - Math.abs(currDate) < 0)
    birthDate = new Date(birthText + (currYear + 1));
    
    return birthDate;
}

const birthDate = getBirthDate('12 May ');
function countdown() {
    const currDate = new Date();

    var diffTotalSeconds = Math.floor(Math.abs(birthDate - currDate) / 1000);

    var days = Math.floor(diffTotalSeconds / (60 * 60 * 24));
    var hours = formatTime(Math.floor((diffTotalSeconds / (60 * 60) % 24)));
    var minutes = formatTime(Math.floor((diffTotalSeconds / (60) % 60)));
    var seconds = formatTime(Math.floor(diffTotalSeconds % 60));

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

function formatTime(time) {
    return time >= 10 ? time : `0${time}`;
}


countdown();
setInterval(countdown, 1000);


