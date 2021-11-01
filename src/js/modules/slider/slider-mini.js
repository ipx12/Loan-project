import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
        this.index = 0;
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[this.index].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[this.index].querySelector('.card__title').style.opacity = '1';
            this.slides[this.index].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        this.container.appendChild(this.slides[this.index]);
        if (this.index >= this.slides.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.decorizeSlides();
    }

    console() {
        console.log(this.slides);
        console.log(this.index);
        console.log(this.autoplay);

    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            if (this.index == 0) {
                this.container.prepend(this.slides[this.slides.length - 1]);
                this.index = this.slides.length - 1;
            } else {
                this.container.prepend(this.slides[this.index - 1]);
                this.index--;
                
            }
            this.decorizeSlides();
        });
    }


    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay) {
            setInterval(() => this.nextSlide(), 5000);
        }
    }
}  