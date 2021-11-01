export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate = false,
        autoplay = false    } = {}) {
        this.container = document.querySelector(container);
        this.slides = [];
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;

        for (let i = 0; i < this.container.children.length; i++) {
            if (this.container.children[i].tagName == "BUTTON") {
                continue;
            } else {
                this.slides.push(this.container.children[i]);
            }
        }
        
    }

   
}