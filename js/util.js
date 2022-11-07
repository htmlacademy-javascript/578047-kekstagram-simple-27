const getRandomInteger = (min, max) => {
  if (typeof(min) !== 'number' || typeof(max) !== 'number' || min < 0 || max < 0){
    return NaN;
  }
  if (min >= max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random () * (max - min + 1)) + min;
};

// const checkCommentaryLength = (str, maxLength) => str.length <= maxLength;
// checkCommentaryLength();

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, isEscapeKey };
