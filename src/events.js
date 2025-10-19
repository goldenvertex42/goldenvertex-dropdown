import { DropdownMenu } from "./dropdown";

let dropdowns = [];

export function setupEventListeners(initialDropdowns) {
    dropdowns = initialDropdowns;

    document.addEventListener('click', handleGlobalClick);
}

function handleGlobalClick(e) {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.close();
        }
    });
}