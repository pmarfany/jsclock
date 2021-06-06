// Maximum values in analog clock
const TOTAL_HOURS = 12;
const TOTAL_MINUTES = 60;
const TOTAL_SECONDS = 60;

// Circle division
const CIRCLE_DEGREES = 360;
const HOUR_DIVISION_NUM = CIRCLE_DEGREES / TOTAL_HOURS;
const MINUTE_DIVISION_NUM = CIRCLE_DEGREES / TOTAL_MINUTES;
const SECOND_DIVISION_NUM = CIRCLE_DEGREES / TOTAL_SECONDS;

function getHours() {
    const hourOffset = (new Date().getHours() % TOTAL_HOURS) * HOUR_DIVISION_NUM;
    const minuteOffset = (new Date().getMinutes() % TOTAL_MINUTES) * (HOUR_DIVISION_NUM / TOTAL_MINUTES);

    return hourOffset + minuteOffset;
}

function getMinutes() {
    return (new Date().getMinutes() % TOTAL_MINUTES) * (MINUTE_DIVISION_NUM);
}

function getSeconds() {
    return (new Date().getSeconds() % TOTAL_SECONDS) * SECOND_DIVISION_NUM;
}

// Main function
function initClock() {
    const hourHand = document.getElementsByClassName('hours')[0];
    const minuteHand = document.getElementsByClassName('minutes')[0];
    const secondHand = document.getElementsByClassName('seconds')[0];

    // Update clock
    setInterval(function() {
        requestAnimationFrame(() => {
            hourHand.style.transform = `rotate(${getHours()}deg)`;
            minuteHand.style.transform = `rotate(${getMinutes()}deg)`;
            secondHand.style.transform = `rotate(${getSeconds()}deg)`;
        });
    }, 1000);
}

initClock();