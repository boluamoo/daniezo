// MOBILE NAV
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

// CHANGING IMAGES
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

setInterval(changeImage, 3000)

// TESTIMONIAL
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const testimonial = document.querySelector('.testimonial')

next.addEventListener('click', function () {
  testimonial.innerHTML = `
    <div class="testimonial-text1">It has been great to know that there is someone out there who knows about falling down and getting back up. We always stay humble and never give up, and for The Daneizo Trade Africa to see that in us, we are truly grateful for the loan facility help and push we have received"</div>
    <div class="testimonial-text2">
      We appreciate Daneizo Trade Africa Management and our able Mega Aggregator
    </div>
    <div class="person">
      <div class="person-image"><img src="assets/person-two.png" alt=""></div>
      <div class="person-name">ABIMBOLA SEKINAT</div>
    </div>
  `
})

prev.addEventListener('click', function () {
  testimonial.innerHTML = `
  <div class="testimonial-text1">I was able to obtain a quick loan facility from Daneizo Trade
  Africa under very flexible conditions and at a lower interest rate. Their relationship has
  been smooth and always fulfilled their promises.</div>
<div class="testimonial-text2">
  I like that I do not need prior savings before accessing quick loans. It really aids my
  business expansion. Thanks to Daneizo Trade Africa. Management.</div>
<div class="person">
  <div class="person-image"><img src="assets/person-one.png" alt=""></div>
  <div class="person-name">OLOWO-SAAD TAOFEEQ</div>
</div>
  `
})

// MODAL
const modal = document.getElementById('my-modal')
// const openModal = document.getElementById('open-modal')
// const closeModal = document.querySelector('.close-modal')

const openModal = () => {
  modal.style.display='block';
}
const closeModal = () => {
  modal.style.display='none';
}

window.addEventListener('click', function(e){
  if (e.target == modal) {
    modal.style.display='none';
  }
})