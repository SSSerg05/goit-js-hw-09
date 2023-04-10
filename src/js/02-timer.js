// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { Ukraine } from "flatpickr/dist/l10n/uk.js"

// function init() {
let selectTime = 0;
let timerId = 0;
  
const refs = {
  dtPicker: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  dtData: document.querySelectorAll('.value'),
}
  

refs.btnStart.addEventListener('click', onStartClick);
  
function init() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    locale: 'uk',
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
    },
  };

  // деактивую кнопку Старт
  refs.btnStart.disabled = true;
  flatpickr(refs.dtPicker, options);
}
init();


// клік по кнопці Старт
//!====================
function onStartClick() { 
 // деактивую кнопку Старт
  refs.btnStart.disabled = true;
  // виводимо час
  timerId = setInterval(setCurrentTimer, 1000, selectTime)
}


//!====================
function setCurrentTimer(time) { 
  // перевіряємо на 0 та виводимо час

  const timeNow = new Date().getTime();
  const deltaTime = time - timeNow ;

  if (deltaTime < 0) {
    clearInterval(timerId);
    return false
  }

  const timeObj = convertMs(deltaTime);
  const data = Object.values(timeObj);

  Array.from(refs.dtData)
    .map((item, key) => { item.textContent = zeroPad(data[key]) })

  return true;
}

function zeroPad(number) {
  // 2 zero in out-numberStr
  return number.toString().padStart(2, "0");
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