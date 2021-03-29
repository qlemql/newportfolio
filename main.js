
// TOGGLE MENU
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// SCROLL

const animeDefaultMargin = 200;
let animeTriggerMargin = 0;
let animeTriggerHeight = 0;
const animeElementList = document.querySelectorAll(".anime");

const animeFunc = function() {
    for (const element of animeElementList) {
      if (!element.classList.contains('show')) {
        if (element.dataset.animeMargin) {
            animeTriggerMargin = parseInt(element.dataset.animeMargin);
        } else {
            animeTriggerMargin = animeDefaultMargin;
        }
  
        if (element.dataset.animeTrigger) {
            animeTriggerHeight = document.querySelector(element.dataset.animeTrigger).getBoundingClientRect().top + animeTriggerMargin;
        } else {
            animeTriggerHeight = element.getBoundingClientRect().top + animeTriggerMargin;
        }
  
        if (window.innerHeight > animeTriggerHeight) {
          let delay = (element.dataset.animeDelay) ? element.dataset.animeDelay : 0;
          setTimeout(function() {
            element.classList.add('show');
          }, delay);
        }
      }
    }
  }

window.addEventListener("load", animeFunc);
window.addEventListener('scroll', animeFunc);


