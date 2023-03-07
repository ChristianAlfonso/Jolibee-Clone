function toggleNavigation() {
    let menuBar = document.querySelector('.hamburger');
    menuBar.addEventListener('click', () => {
        let navigationBar = document.querySelector('#navigation');
        navigationBar.classList.toggle('active')
    });
} toggleNavigation();

function scrollNavigation() {
    let scrollBar = document.querySelector('header')
    let scrollValue = window.scrollY

    if (scrollValue < 500) {
        scrollBar.classList.remove('scrollHeader')
    } else (
        scrollBar.classList.add('scrollHeader')
    )

    window.addEventListener('scroll', scrollNavigation)
} scrollNavigation();


function upScrollBtn() {
    let theScrollBtn = document.querySelector('.up-btn')
    let theScrollValue = window.scrollY

    if (theScrollValue < 500) {
        theScrollBtn.classList.remove('upper-btn')
    } else {
        theScrollBtn.classList.add('upper-btn')
    }

    window.addEventListener('scroll', upScrollBtn)
} upScrollBtn();