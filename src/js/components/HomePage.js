import { templates } from '../settings.js';
import { utils } from '../utils.js';

class HomePage {
  constructor(homePage) {
    const thisHomePage = this;

    thisHomePage.render(homePage);
  }

  render(homePage){

    console.log('init Main Page');
    const thisHomePage = this;
    const generatedHTML = templates.homePage();

    thisHomePage.dom = {};

    thisHomePage.dom.wrapper = homePage;

    thisHomePage.dom.wrapper.innerHTML = generatedHTML;

    thisHomePage.element = utils.createDOMFromHTML(generatedHTML);

    thisHomePage.dom.wrapper.appendChild(thisHomePage.element);
  }
}

export default HomePage;
