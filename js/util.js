// const getRandomInteger = (min, max) => {
//   if (typeof(min) !== 'number' || typeof(max) !== 'number' || min < 0 || max < 0){
//     return NaN;
//   }
//   if (min >= max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }
//   return Math.floor(Math.random () * (max - min + 1)) + min;
// };

const isEscapeKey = (evt) => evt.key === 'Escape';

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showAlert };
