const getRandomInteger = (min, max) => Math.floor(Math.random () * (max - min + 1)) + min;
const checkCommentaryLength = (str, maxLength) => str.length <= maxLength;
getRandomInteger(1,5);
checkCommentaryLength('sadcscacascas', 40);

