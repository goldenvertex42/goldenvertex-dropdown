import menuIcon from "./assets/menu.svg";

export class DropdownMenu {
    constructor(containerElement) {
        this.container = containerElement;
        this.button = this.container.querySelector('.dropdown-btn')

        if(this.button) {
            this.button.style.backgroundImage = `url('${menuIcon}')`;
        }

        this.content = this.container.querySelector('.dropdown-content');

        if (!this.button || !this.content) {
            console.error('Invalid dropdown structure. Missing button or content.');
            return;
        }

        this.isOpen = false;
    }


    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.content.classList.add('visible');
        this.isOpen = true;
    }

    close() {
        this.content.classList.remove('visible');
        this.isOpen = false;
    }

    contains(target) {
        return this.container.contains(target);
    }
};