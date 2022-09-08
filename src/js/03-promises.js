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
refs.form.classList.add('form-promise');
refs.delay.classList.add('form__input');
refs.step.classList.add('form__input');
refs.amount.classList.add('form__input');
refs.btnSubmit.classList.add('color_btn');

refs.btnSubmit.disabled = true;

// активуємо кнопку Submit
refs.form.addEventListener('input', submitActive);

function submitActive() {
  if (refs.delay.value && refs.step.value && refs.amount.value) {
    refs.btnSubmit.disabled = false;
  }
}

// сабміт форми
refs.form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const values = {
    amount: refs.amount.value,
    step: refs.step.value,
    delay: refs.delay.value,
  };
  console.log(values);

  let delay = Number(values.delay);
  let step = Number(values.step);
  let amount = Number(values.amount);

  for (let i = 1; i <= amount; i += 1) {
    delay = delay + step;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  refs.form.reset();
  refs.btnSubmit.disabled = true;
}

// fn createPromise
function createPromise(position, delay) {
  return new Promise((onSuccess, onError) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        onSuccess({ position, delay });
      } else {
        onError({ position, delay });
      }
    }, delay);
  });
}
