const anchors = document.querySelectorAll('a'); 
const popupButtons = document.querySelectorAll('.popup_btn');
const closeButtons = document.querySelectorAll('.close');

//
function isVisible(elem) {
  let windowHeight = document.documentElement.clientHeight; //видимая часть окна
  let coords = elem.getBoundingClientRect();
  let isVisible = coords.top < windowHeight && coords.bottom >= 0;

  if(coords.bottom < windowHeight && coords.bottom > 0){
      return false;
  }

  return isVisible;
}

function showVisible() {
  for (let section of document.querySelectorAll('section')) {
    if (isVisible(section)) {
      addClass(section, '1px solid #0762C8');
    } else {
      addClass(section, 'none');
    }
  }
}

function addClass (section, style){
  for (let elem of document.querySelectorAll('nav a')) {
    if(elem.getAttribute('href') == ("#" + section.id)) {
      elem.style.borderBottom = style;
    }
  };
}
//

function slowScroll(){
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

function popUp(){
  for (let popupButton of popupButtons) {
    popupButton.addEventListener('click', function(event) {
      let popupId = this.getAttribute('data-popup'),
          popupElem = document.querySelector('.popup[data-popup="' + popupId + '"]');
          popupElem.classList.add('active');
    });
  }

  for (let closeButton of closeButtons) {
    closeButton.addEventListener('click', function(e) {
      var parentPopup = this.closest('.popup');
          parentPopup.classList.remove('active');
    });
  };
}
  
    
showVisible();
window.onscroll = showVisible;

slowScroll();
popUp();
