const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectBox = document.querySelector('.img-upload__effects');
const imgPreview = document.querySelector('.img-upload__preview img');
const sliderBox = document.querySelector('.img-upload__effect-level');

const DEFAULT_EFFECT = 'none';

const effectMap = {
  none: {
    filter: 'none'
  },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: ''
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: ''
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    unit: '%'
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    unit: 'px'
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3,
    unit: ''
  },
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

const resetSlider = () => {
  sliderElement.setAttribute('disabled', true);
  imgPreview.style.filter = '';
  sliderBox.style.display = 'none';
};

effectBox.addEventListener('change', (evt) => {
  const targetValue = evt.target.value;

  if (evt.target.matches('input[type="radio"]')) {
    const {filter, unit, min, max, start, step} = effectMap[targetValue];

    if (targetValue === DEFAULT_EFFECT) {
      resetSlider();
    }
    else {
      sliderElement.removeAttribute('disabled');
      sliderBox.style.display = 'block';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: min,
          max: max
        },
        start: start,
        step: step
      });

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `${filter}(${valueElement.value}${unit})`;
      });
    }
  }
});

export {resetSlider};
