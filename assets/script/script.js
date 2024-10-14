'use strict'

const headerMenu = document.querySelector('.header-menu');
const navbar = document.querySelector('.navbar');


// console.log(headerMenu)
// headerMenu.addEventListener('click', function() {
//     if(!navbar.id) {
//         navbar.id = 'mobile-nav';
//         headerMenu.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//         </svg>`
//     } else {
//         navbar.removeAttribute("id");
//         headerMenu.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>`
//     }
// })


// console.log(mobileNav)

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

    // console.log(mobileNav)
  })

  // Optionally close the nav when a link is clicked
//  mobileNav.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//     mobileNav.classList.remove('active');
//   });
//  });

 mobileNav.addEventListener('click', function(e) {
  // const children = e.target.closest('#mobile-nav').querySelectorAll('a');
  // console.log(children)


  if(e.target.classList.contains('nav-item')) {
    // console.log('*')
    mobileNav.classList.remove('active');
  }


 })

// mobileNav.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//       mobileNav.classList.remove('active');
//   });
// });
});
