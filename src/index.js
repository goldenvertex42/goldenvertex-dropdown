import "./styles.css";
import { DropdownMenu } from "./dropdown"
import { setupEventListeners } from "./events";

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