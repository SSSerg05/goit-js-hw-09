// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { Ukraine } from "flatpickr/dist/l10n/uk.js"
import throttle from 'lodash.throttle'

// function init() {
let selectTime = 0;
let timerId = 0;
  
  

  const refs = {
    dtPicker: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),

    dtDays: document.querySelector('.value[data-days]'),
    dtHours: document.querySelector('.value[data-hours]'),
    dtMinutes: document.querySelector('.value[data-minutes]'),
    dtSeconds: document.querySelector('.value[data-seconds]'),
  }
  
  refs.btnStart.addEventListener('click', throttle(onStartClick, 1000))

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    locale: 'uk',
    // wrap: true,
    firstDayOfWeek: 1,
    dateFormat: "d.m.Y H:i",

    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const timeNow = new Date().getTime();
      selectTime = selectedDates[0].getTime();

      if (selectTime < timeNow) {
        window.alert("Please choose a date in the future")
        return
      }

      // активую кнопку Старт
      refs.btnStart.disabled = false;
      console.log('button active');
      timerId = setInterval(onStartClick, 1000)
    },
  };

  // деактивую кнопку Старт
  refs.btnStart.disabled = true;
  flatpickr(refs.dtPicker, options);

// клік по кнопці Старт
function onStartClick() { 
 // деактивую кнопку Старт
  refs.btnStart.disabled = true;
 
  // виводимо час
  setCurrentTime(selectTime);
}

// }

// init();


function setCurrentTime(time) { 
  const timeNow = new Date().getTime();
  const deltaTime = time <= timeNow ? 0: time - timeNow ;
  const timeObj = convertMs(deltaTime);

  if (deltaTime === 0) {
    clearInterval(timerId);
  }

  refs.dtDays.textContent = timeObj.days
  refs.dtHours.textContent = timeObj.hours
  refs.dtMinutes.textContent = timeObj.minutes
  refs.dtSeconds.textContent = timeObj.seconds
  
  return true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}