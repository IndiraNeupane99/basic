const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

function scrollToServices(event) {
    event.preventDefault();
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}
