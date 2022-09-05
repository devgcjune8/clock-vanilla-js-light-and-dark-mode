const HOUR_HAND = document.querySelector('.hour');
const MINUTE_HAND = document.querySelector('.minute');
const SECOND_HAND = document.querySelector('.second');
const TIME_DISPLAY = document.querySelector('.time-display');
const DATE_DISPLAY = document.querySelector('.date-display');
const THEME_BTN = document.querySelector('.theme-btn');

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

THEME_BTN.addEventListener('click', (event) => {
    const HTML = document.querySelector('html')
    if (HTML.classList.contains('dark')) {
        HTML.classList.remove('dark')
        event.target.innerHTML = "Dark Mode"
    } else {
        HTML.classList.add('dark')
        event.target.innerHTML = "Light Mode"
    }
})

function clockTime() {
    const CURRENT_TIME = new Date();
    

    const CURRENT_MONTH = CURRENT_TIME.getMonth();
    const CURRENT_DAY = CURRENT_TIME.getDay();
    const CURRENT_HOUR = CURRENT_TIME.getHours();
    const TWELVE_HOUR_FORMAT = CURRENT_HOUR % 12;
    const CURRENT_MINUTE = CURRENT_TIME.getMinutes();
    const CURRENT_SECONDS = CURRENT_TIME.getSeconds();
    const CURRENT_DATE = CURRENT_TIME.getDate()
    const AM_PM = CURRENT_HOUR <= 12 ? 'am' : 'pm';
    
    console.log(CURRENT_TIME)
    HOUR_HAND.style.transform = `translate(-50%, -100%) rotate(${scale(TWELVE_HOUR_FORMAT, 0, 11, 0, 360)}deg)`
    MINUTE_HAND.style.transform = `translate(-50%, -100%) rotate(${scale(CURRENT_MINUTE, 0, 59, 0, 360)}deg)`
    SECOND_HAND.style.transform = `translate(-50%, -100%) rotate(${scale(CURRENT_SECONDS, 0, 59, 0, 360)}deg)`

    TIME_DISPLAY.innerHTML = `${TWELVE_HOUR_FORMAT}:${CURRENT_MINUTE < 10 ? "0" + CURRENT_MINUTE : CURRENT_MINUTE }<div class="am-pm">${AM_PM}</div>`

    document.querySelector('.am-pm').style.color = `${CURRENT_HOUR <= 12 ? "#ffee05": "rgb(52, 225, 255)"}`

    document.querySelector('.clock').style.backgroundColor = `${CURRENT_HOUR <= 12 ? "#ffee05": "rgb(52, 225, 255)"}`

    document.querySelector('.second').style.backgroundColor = `${CURRENT_HOUR <= 12 ? "#948f01": "rgb(0, 68, 85)"}`

    document.querySelector('.point-centro').style.backgroundColor = `${CURRENT_HOUR <= 12 ? "#948f01": "rgb(0, 113, 141)"}`


    DATE_DISPLAY.innerHTML = `${DAY_NAMES[CURRENT_DAY]}, ${MONTH_NAMES[CURRENT_MONTH]} <span class='date'>${CURRENT_DATE}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

clockTime()

setInterval(clockTime, 500)