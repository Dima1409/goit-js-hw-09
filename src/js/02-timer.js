import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDate: document.getElementById('datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  fieldValue: document.querySelectorAll('.field .value'),
  fieldLabel: document.querySelectorAll('.field .label'),
  currentDate: new Date(),
};
console.log(refs.currentDate);
// styles
refs.inputDate.classList.add('data_input');
refs.btnStart.classList.add('data_start');

refs.timer.classList.add('timer');
////////////////////////////////////////////////////
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
    return (refs.btnStart.disabled = true);
  },
};
flatpickr(refs.inputDate, options);

// refs.inputDate.addEventListener('input', checkDate);
// function checkDate() {
//   if (refs.currentDate.getTime() > selectedDates[0].getTime()) {
//     refs.btnStart.disabled = !refs.btnStart.disabled;
//   }
// }
