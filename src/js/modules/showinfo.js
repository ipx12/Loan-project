export default class Showinfo {
    constructor(trigger) {
        this.btn = document.querySelectorAll(trigger);
    }

    init() {
        this.btn.forEach((item) => {
            item.addEventListener('click', () => {
                const sibling = item.closest('.module__info-show').nextElementSibling;

                sibling.classList.add('animated', 'fadeInRight');
                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
            });
        });
    }
}