import getNamesList from "./modules/getNamesList.js";
import postRegistration from "./modules/postRegistration.js";
import deleteRegistration from "./modules/deleteRegistration.js";

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const registerBtn = document.querySelector("#register");
const table = document.querySelector("#table");

getNamesList(table);

registerBtn.addEventListener('click', () => {
    postRegistration(nameInput, emailInput);
    getNamesList(table);
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-row]")) {
            deleteRegistration(e.target.id);
            getNamesList(table);
        };
    });
});