'use strict'

const headerMenu = document.querySelector('.header-menu');
const navbar = document.querySelector('.navbar');


document.addEventListener('DOMContentLoaded', function() {
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');

  mobileNavToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    if(mobileNav.classList.contains('active')){
      mobileNav.innerHTML +=`<a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-icon nav-item">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg></a>`
    } else {
      mobileNav.innerHTML = mobileNav;
    }

  })


 mobileNav.addEventListener('click', function(e) {

  if(e.target.classList.contains('nav-item')) {
    mobileNav.classList.remove('active');
  }

 })
});
