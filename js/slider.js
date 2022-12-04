const sliderButton = document.querySelectorAll('.sl-btn');
const sliderId = document.createElement('slider-active');

function activeSliderButton(){
    sliderButton.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

sliderButton.forEach((item) =>
item.addEventListener('click', activeSliderButton));