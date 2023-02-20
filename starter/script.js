'use strict';

///////////////////////////////////////
// Modal window
alert('This website is for only learning propose.');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const h1 = document.querySelector('h1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved functionality and analytics, <button class="btn btn--close--cookie">Got it! </button>`;

// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

// header.after(message);
// header.before(message);

// Delete Elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message);
    message.remove();
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
// message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.color = 'White';
message.style.textAlign = 'Center';

console.log(message.style.color);
console.log(message.style.fontSize);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).fontSize);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

//////////// Atribute
console.log(logo.src);
console.log(logo.alt);

logo.alt = 'Beautiful Logo';

// Non-standard
console.log(logo.developer);
console.log(logo.getAttribute('developer'));

logo.setAttribute('Company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

/////////// Data Attributes
console.log(logo.dataset.versionNumber);

/////////// Classes
logo.classList.add('className', 'moreClassName');
logo.classList.remove('className', 'moreClassName');
logo.classList.toggle('className', 'moreClassName');
logo.classList.contains('className', 'moreClassName');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const btnSrcollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnSrcollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll X', window.pageXOffset);
  console.log('Current scroll Y', window.pageYOffset);

  console.log('height viewport:', document.documentElement.clientHeight);
  console.log('height viewport:', document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(s1Coords.left + window.pageXOffset, s1Coords.top + window.pageYOffset);

  window.scrollTo({
    left: s1Coords.left + window.pageXOffset,
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({ behavior: 'smooth' });
});

// //////////// Events
/*
const h1 = document.querySelector('h1');

const alertFunc = function (e) {
  alert('Hello');

  h1.removeEventListener('mouseenter', alertFunc);
};

h1.addEventListener('mouseenter', alertFunc);

// h1.onmouseenter = function(e) {
//   alert('Hello on Mouse Enter')
// }

/// Event Propagation
const colorInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function () {
  return `rgb(${colorInt(0, 255)},${colorInt(0, 255)},${colorInt(0, 255)})`;
};
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link:', e.target, e.currentTarget);
  console.log(e.currentTarget === this)

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container: ', e.target, e.currentTarget);

});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget)
}, true);
*/

///////////////////// Event Delegation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//   document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////// DOM Traversing

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'White';
h1.lastElementChild.style.color = 'pink';

// Going Downwards: Parents
console.log(h1.parentElement);
console.log(h1.parentNode);

// h1.closest('header').style.background = 'var(--gradient-primary)';

// Going SideWays: siblings
console.log(h1.nextSibling);
console.log(h1.previousSibling);
console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // console.log(clicked);

  // Remove Active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Active Active class
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Menu fade animation

// fade function
const fadeFunction = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', fadeFunction.bind(0.5));

nav.addEventListener('mouseout', fadeFunction.bind(1));

/////////////////// Sticky Nav
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

/////////////////// Reveal

const revealObsFunct = function (entries, observer) {
  /*
  entries.forEach(entry => {
    entry.target.classList.add('section--hidden');
    
    if (!entry.isIntersecting) return;
    
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry);
  });
  
  // Same as Below
  */
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const revealObs = new IntersectionObserver(revealObsFunct, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(el => {
  revealObs.observe(el);
  el.classList.add('section--hidden');
});

/////////// Lazy Loading Image

const imgTargets = document.querySelectorAll('img[data-src]');

const lazyObsFunc = function (entries, observer) {
  const [lazyImg] = entries;

  if (!lazyImg.isIntersecting) return;

  lazyImg.target.src = lazyImg.target.dataset.src;

  lazyImg.target.addEventListener('load', el => {
    el.target.classList.remove('lazy-img');
  });
};

const lazyObserver = new IntersectionObserver(lazyObsFunc, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => lazyObserver.observe(img));

///////////////// Slide
const dots = document.querySelector('.dots');
const slide = document.querySelectorAll('.slide');
const buttonRight = document.querySelector('.slider__btn--right');
const buttonLeft = document.querySelector('.slider__btn--left');

// Function
let current = 0;

const gotoSlide = function (current) {
  slide.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - current)}%)`;
  });
};
gotoSlide(current);

slide.forEach((el, i) => {
  dots.insertAdjacentHTML(
    'beforeend',
    `<button class="dot dots__dot" data-set="${i}"> </button>`
  );
});

const activeDot = function (current) {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dot[data-set="${current}"`)
    .classList.add('dots__dot--active');
};

activeDot(0);

//NextSlide
const nextSlide = function () {
  current += 1;
  if (current > slide.length - 1) current = 0;
  gotoSlide(current);
  activeDot(current);
};

// Previous Slide
const prevSlide = function () {
  current -= 1;
  if (current < 0) current = slide.length - 1;
  gotoSlide(current);
  activeDot(current);
};

// Event Handler
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevSlide();
});

buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', prevSlide);

dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    current = e.target.dataset.set;
    gotoSlide(+current);
    activeDot(+current);
  }
});
