const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    // At the very top — always show sticky
    if (currentScroll === 0) {
        header.classList.add("sticky");
        lastScroll = currentScroll;
        return;
    }

    // Scrolling down
    if (currentScroll > lastScroll) {
        header.classList.add("sticky");
    } 
    else {
        // Scrolling up
        header.classList.remove("sticky");
    }

    lastScroll = currentScroll;
});


