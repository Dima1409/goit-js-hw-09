import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputDate: document.getElementById('datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  fieldValue: document.querySelectorAll('.field .value'),
  fieldLabel: document.querySelectorAll('.field .label'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
  currentDate: new Date(),
  second: 0,
};

// styles ...........................................................
refs.inputDate.classList.add('data_input');
refs.btnStart.classList.add('data_start');
refs.timer.classList.add('timer');
// ....................................................................
refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (refs.currentDate.getTime() < selectedDates[0].getTime()) {
      refs.btnStart.disabled = false;
      return;
    }
    refs.btnStart.disabled = true;
    Notify.failure('Please choose a date in the future')
    return;
  },
};

//

flatpickr(refs.inputDate, options);
//

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
refs.btnStart.addEventListener('click', startTime);
// .......................................................................................
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

// .........................................................................................
let intervalId = null;
function startTime() {
  refs.btnStart.disabled = true;
  let result = Date.parse(refs.inputDate.value) - Date.parse(new Date());
  if (result <= 0) {
    document.body.style.backgroundColor = 'teal';
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
    return
  }
  convertMs(result).seconds -= 1;
  intervalId = setInterval(startTime, 1000);

  refs.days.textContent = addLeadingZero(convertMs(result).days);
  refs.hours.textContent = addLeadingZero(convertMs(result).hours);
  refs.minutes.textContent = addLeadingZero(convertMs(result).minutes);
  refs.seconds.textContent = addLeadingZero(convertMs(result).seconds);
  return
}