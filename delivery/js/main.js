const cart_button = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close_button = document.querySelector(".close");

cart_button.addEventListener('click', ToggleModal);

close_button.addEventListener('click', ToggleModal);

function ToggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();