const tButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

tButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})