import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class HomePage {
  constructor(homePage) {
    const thisHomePage = this;

    thisHomePage.render(homePage);
    thisHomePage.getElements();
    thisHomePage.initActions();
  }

  render(homePage){

    console.log('init Main Page');
    const thisHomePage = this;
    const generatedHTML = templates.homePage();

    thisHomePage.dom = {};
    thisHomePage.dom.wrapper = homePage;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.element = utils.createDOMFromHTML(generatedHTML);

  }

  getElements(){
    const thisHomePage = this;

    thisHomePage.links = thisHomePage.element.querySelectorAll(select.homePage.imageLinks);
    console.log('order image',thisHomePage.links);
  }

  initActions(){
    const thisHomePage = this;

    for (let link of thisHomePage.links){
      link.addEventListener('click', function(){

      });
    }
  }
}

export default HomePage;
