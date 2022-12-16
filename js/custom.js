const toggleButton = document.querySelector(".toggle-button");
const navbar = document.getElementsByTagName("nav");

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    navbar.classList.toggle('active')
});



