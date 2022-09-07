import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};
//---//
refs.btnSubmit.disabled = true;
// активуємо кнопку Submit
refs.form.addEventListener('input', submitActive);

function submitActive() {
  if (refs.delay.value && refs.step.value && refs.amount.value) {
    refs.btnSubmit.disabled = false;
  }
}
//---//
refs.form.addEventListener('input', create);
function create(e) {
  console.log(refs.delay.value);
  console.log(refs.step.value);
}
// виклик createPromise
// refs.btnSubmit.addEventListener('submit', createPromise);

// function createPromise(position, delay) {
//   return new Promise((onSuccess, onError) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         onSuccess();
//       } else {
//         onError();
//       }
//     }, delay);
//   });
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
