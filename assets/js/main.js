const $ = document.querySelectorAll.bind(document)

const colors = [
  '#F2385A',
  '#04BFAD',
  '#03A65A',
  '#005F64',
  '#F2BE22',
  '#F28705',
  '#AF4E93',
  '#795093',
  '#1B5795',
  '#C03D31'
]

const newColor = e => {
  const random = Math.floor(Math.random() * colors.length)
  e.target.style.color = colors[random]
}

const defaultColor = e => {
  e.target.style.color = '#000'
}

const links = $('.links a[href^="#"]')
const sections = $('[data-anim]')
const btnToTop = $('.to-top__btn')[0]

links.forEach(el => {
  el.addEventListener('click', scrollToId)
  el.addEventListener('mouseover', newColor)
  el.addEventListener('mouseout', defaultColor)
});

function scrollToId(e) {
  e.preventDefault()
  
  const to = getScrollTopByHref(e.target) - 60
  scrollToPosition(to)
}

function animScroll(e) {
  btnToTop.classList.remove('active')
  const topOffset = window.pageYOffset + ((window.innerHeight * 3) / 4);
  if(window.pageYOffset !== 0) btnToTop.classList.add('active')
  sections.forEach(el => {
    if(topOffset > el.offsetTop) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

function getScrollTopByHref(elm) {
  const id = elm.getAttribute('href')
  return $(id)[0].offsetTop
}

function scrollToPosition(pos) {
  window.scroll({
    top: pos,
    behavior: 'smooth',
  })
}

animScroll()

window.addEventListener('scroll', debounce(animScroll, 100))
btnToTop.addEventListener('click', () => scrollToPosition(0))

function debounce(fun, wait = 200, time) {
  return function() {
    clearTimeout(time)
    time = setTimeout(() => {
      fun.apply(this, arguments)
    }, wait)
  }
}

window.onscroll = function() {
  if(window.pageYOffset > 100) {
    $('.links')[0].classList.add('active')
  } else {
    $('.links')[0].classList.remove('active')
  }
}

let screenW = window.screen.availWidth;

const modalButton = document.querySelectorAll('.thumb-image > button')
const closeModal = document.querySelector('#close')
const sidebar = document.querySelector('.sidebar-mobile')

modalButton.forEach(item => {
  item.addEventListener('click', (e) => {
    const srcImage = e.target.getAttribute('src').replace('thumb_', '')
    openModal(srcImage)
    
  })
})

  closeModal.addEventListener('click', () => {
    document.querySelector(`.modal-container`).classList.remove('active') 
  })


function openModal(src) {
  const container = document.querySelector(`.modal-container`)
  const modal = container.querySelector('.modal')
  modal.children[0].setAttribute('src', src)
  container.classList.add('active')
}

const menuHamburger = document.querySelector('.mobile-menu')
menuHamburger.addEventListener('click', openMobileMenu)
sidebar.querySelectorAll('ul > li > a').forEach(link => {
  link.addEventListener('click', () => sidebar.classList.remove('active'))
})

function openMobileMenu() {
  sidebar.classList.toggle('active')
}