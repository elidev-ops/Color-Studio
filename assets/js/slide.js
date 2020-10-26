class Slide {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        this.init()
    }

    activeSlide(index) {
        this.active = index
        this.itens.forEach(item => item.classList.remove('active'))
        this.itens[this.active].classList.add('active')
        this.thumbItens.forEach(item => item.classList.remove('active'))
        this.thumbItens[this.active].classList.add('active')
    }

    next() {
        if(this.active < this.itens.length - 1) {
            this.activeSlide(this.active + 1)
        } else {
            this.activeSlide(0)
        }
        
    }

    prev() {
        if(this.active > 0) {
            this.activeSlide(this.active - 1)
        } else {
            this.activeSlide(this.itens.length - 1)
        }
    }

    addNavigation() {
        this.nextBtn = this.slide.querySelector('.slide-next')
        this.prevBtn = this.slide.querySelector('.slide-prev')
        this.nextBtn.addEventListener('click', this.next)
        this.prevBtn.addEventListener('click', this.prev)
    }

    addThumbItens() {
        this.itens.forEach(() => (this.thumb.innerHTML += '<span></span>'))
        this.thumbItens = Array.from(this.thumb.children)
    }

    autoSlide() {
        clearInterval(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    init() {
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.itens = this.slide.querySelectorAll('.slide-itens > *')
        this.thumb = this.slide.querySelector('.slide-thumb')
        this.addThumbItens()
        this.activeSlide(0)
        this.addNavigation()
    }
}