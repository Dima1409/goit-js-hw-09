const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
//
refs.start.addEventListener('click', onClickBtnStart);
//
refs.stop.addEventListener('click', onClickBtnStop);
//
let intervalId = null;

refs.start.disabled = false;
refs.stop.disabled = true;

refs.start.classList.add('color_btn');
refs.stop.classList.add('color_btn');
//
function onClickBtnStart() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.disabled = !refs.start.disabled;
  refs.stop.disabled = !refs.stop.disabled;
}
//
function onClickBtnStop() {
  clearInterval(intervalId);
  refs.stop.disabled = !refs.stop.disabled;
  refs.start.disabled = !refs.start.disabled;
}
//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
