const handleHamburger = (e) => {
    const nav = document.querySelector('header nav');
    e.preventDefault();
    e.target.classList.toggle('hamburger-close');
    if (e.target.classList.contains('hamburger-close')) {
        nav.style.transform = 'translateX(0)';
    } else {
        nav.style.transform = 'translateX(100%)';
    }

};
document.querySelector('.hamburger').addEventListener('click', handleHamburger);
