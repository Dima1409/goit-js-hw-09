function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// const options = {
//   enableTime: true,
//   dateFormat: 'Y-m-d H:i',
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     timer.calculateTime(selectedDates);
//     console.log(selectedDates[0]);
//   },
// };

// const fp = flatpickr('#datetime-picker', options);
// console.dir(fp);

// class Timer {
//   constructor({ onTick }) {
//     this.deltaTime = 0;
//     this.intervalId = null;
//     this.onTick = onTick;
//   }

//   calculateTime(selectedDates) {
//     const currentDate = Date.now();
//     const startTime = selectedDates[0].getTime();

//     if (startTime < currentDate) {
//       refs.startBtn.disabled = true;

//       return Notify.failure('Please choose a date in the future');
//     }

//     this.deltaTime = startTime - currentDate;

//     refs.startBtn.disabled = false;
//     refs.startBtn.addEventListener('click', () => {
//       timer.start();
//     });
//   }

//   start() {
//     this.intervalId = setInterval(() => {
//       if (this.deltaTime <= 0) {
//         return finishedTimer(this.intervalId);
//       }

//       const time = this.convertMs(this.deltaTime);
//       this.onTick(time);
//       this.deltaTime -= 1000;
//     }, 1000);
//   }

//   finishedTimer(intervalId) {
//     clearInterval(intervalId);
//     const time = convertMs(0);
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = this.addLeadingZero(Math.floor(ms / day));
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }

//   addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }
// }
// const timer = new Timer({
//   onTick: updateTimerface,
// });

// function updateTimerface({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// refs.startBtn.disabled = true;