import "./styles.css";
import { DropdownMenu } from "./dropdown"
import { setupEventListeners } from "./events";

export const initialize = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const dropdownElements = document.querySelectorAll('.dropdown');
        const dropdownInstances = [];

        dropdownElements.forEach(element => {
            const dropdownInstance = new DropdownMenu(element);
            dropdownInstances.push(dropdownInstance);

            dropdownInstance.button.addEventListener('click', () =>{
                dropdownInstance.toggle();
            });
        });

        setupEventListeners(dropdownInstances);
    });
}

initialize();