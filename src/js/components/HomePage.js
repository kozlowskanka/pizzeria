import { templates, classNames } from '../settings.js';
import { utils } from '../utils.js';

class HomePage {
  constructor(homePage) {
    const thisHomePage = this;

    thisHomePage.render(homePage);
    thisHomePage.initSlider();
  }

  render(homePage){

    console.log('init Main Page');
    const thisHomePage = this;
    const generatedHTML = templates.homePage();

    thisHomePage.dom = {};
    thisHomePage.dom.wrapper = homePage;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.element = utils.createDOMFromHTML(generatedHTML);

    console.log('element',thisHomePage.element);

  }

  initSlider(){

    let slideIndex = 0;
    showSlides();

    function showSlides() {

      let i;
      const slides = document.getElementsByClassName('opinion'); // select.slider.opinion
      const dots = document.getElementsByClassName('dot'); // select.slider.dot

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = classNames.slider.slideHidden;
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex-1].style.display = classNames.slider.slideVisible;
      setTimeout(showSlides, 2000);

      for (let dot of dots) {
        dot.classList.remove('dot-active'); //classNames.slider.dotActive
      }

      dots[slideIndex-1].classList.add('dot-active'); //classNames.slider.dotActive
    }
  }
}

export default HomePage;
