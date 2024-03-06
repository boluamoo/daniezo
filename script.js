const navOpen = document.getElementById('open')
const navClose = document.getElementById('close')
const navLinks = document.getElementById('nav-links')
const navServices = document.querySelector('.nav-services')

navOpen.addEventListener('click', () => {
  navLinks.style.bottom = 0
})
navClose.addEventListener('click', () => {
  navLinks.style.bottom = '100%'
})
navServices.addEventListener('click', () => {
  navLinks.style.bottom = '100%'
})
