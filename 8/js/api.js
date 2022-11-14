const URL_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const URL_SEND = 'https://27.javascript.pages.academy/kekstagram-simple';

const ERROR_MESSAGE_GET_DATA = 'Ошибка загрузки данных';

const getData = (onSuccess, onError) => {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    }).catch(() => {
      onError(ERROR_MESSAGE_GET_DATA);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
