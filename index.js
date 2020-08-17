let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

function scrollNext (direction) {
    const images = document.querySelector('#my-gallery')
    images.scrollLeft = images.scrollLeft += window.innerWidth / 2 
    > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
}

function scrollPrev (direction) {
    const images = document.querySelector('#my-gallery')
    images.scrollLeft = images.scrollLeft -= window.innerWidth / 2 
    > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
}

next.addEventListener('click', scrollNext);
prev.addEventListener('click', scrollPrev);

