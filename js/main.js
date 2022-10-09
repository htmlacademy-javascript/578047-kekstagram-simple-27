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

const checkCommentaryLength = (str, maxLength) => str.length <= maxLength;

getRandomInteger(1,5);
checkCommentaryLength('sadcscacascas', 40);

const MAX_PHOTOS = 25;
const DESCRIPTION = ['Laudantium ipsa', 'expedita quis harum autem', 'perferendis laboriosam', 'qui culpa', 'unde totam', 'neque qui est', 'quia quo amet', 'sapiente aut quia voluptates', 'quia harum', 'sunt consequatur', 'ullam nihil', 'corrupti', 'inventore'];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENT = 0;
const MAX_COMMENT = 200;

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getRandomInteger(MIN_COMMENT, MAX_COMMENT),
});

const createPhotos = () => {
  const arrPhotos = [];
  for (let i = 0; i < MAX_PHOTOS; i++){
    arrPhotos.push(createPhoto(i + 1));
  }
  return arrPhotos;
};

console.log(createPhotos());

