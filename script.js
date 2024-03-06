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
  const menuIcon = document.querySelector('.menu-open')
  const mobileNav = document.querySelector('.mobile-nav')
  const navServices = document.querySelector('.nav-services')

  menuIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    menuIcon.classList.toggle('close')
  })
  navServices.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    menuIcon.classList.toggle('close')
  })
})

const images = [
  'assets/section-one-image1.png',
  'assets/section-one-image2.png',
  'assets/section-one-image3.png',
  'assets/section-one-image4.png',
  'assets/section-one-image5.png',
]
let currentIndex = 0

function changeImage() {
  const image = document.querySelector('.section-one-image')
  image.style.opacity = 1

  setTimeout(function () {
    currentIndex = (currentIndex + 1) % images.length
    image.src = images[currentIndex]
    image.style.opacity = 1
    images.style.transition = 'easeIn'
  }, 500) // Change image after 500ms transition
}

// Call changeImage function every 3 seconds (3000ms)
setInterval(changeImage, 3000)
