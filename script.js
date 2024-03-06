// const navOpen = document.getElementById('open')
// const navClose = document.getElementById('close')
// const navLinks = document.getElementById('nav-links')
// const navServices = document.querySelector('.nav-services')

// navOpen.addEventListener('click', () => {
//   navLinks.style.bottom = 0
// })
// navClose.addEventListener('click', () => {
//   navLinks.style.bottom = '100%'
// })
// navServices.addEventListener('click', () => {
//   navLinks.style.bottom = '100%'
// })

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-open');
  const mobileNav = document.querySelector('.mobile-nav');
  const navServices = document.querySelector('.nav-services');

  menuIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('close');
  });
  navServices.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('close');
  });
});
