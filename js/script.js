// Sectors
const testimonialsArea = document.querySelector('.testimonial__cards');
const testimonialCard = document.querySelector('.testimonial__card');
const testimonialCards = document.querySelectorAll('.testimonial__card');
console.log("🚀 ~ file: script.js ~ line 5 ~ testimonialCards", testimonialCards)
const testimonialDotsArea = document.querySelector('.testimonial__card-handler .dot ul');
let testimonialDots;
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
let cardActivePosition = 0;


// Units
const totalScrollableWidth = testimonialsArea.scrollWidth;
const cardWidth = testimonialCard.clientWidth;
const totalCard = Math.floor( testimonialsArea.scrollWidth / testimonialCard.clientWidth );
const totalPages = totalCard / 3;
let scrollRightSize = 1;
let scrollLeftSize = 1;

// Create Dots
for (let i = 0; i < totalPages + 1; i++) {
    if(i > totalPages ){
        addClass(testimonialDots[0], "active")
    }
    if(i < totalPages){
        createElAppend('li', testimonialDotsArea)
        testimonialDots = document.querySelectorAll('.testimonial__card-handler .dot ul li');
    }
}

// Next Buttton
nextBtn.addEventListener('click', (e) => {
    if(scrollLeftSize <= 0) return;
    if(scrollLeftSize >= totalScrollableWidth) return;
    scrollLeftSize += cardWidth - 10
    testimonialsArea.scrollLeft = scrollLeftSize;
    removeClass(testimonialCards[cardActivePosition], "active")
    cardActivePosition += 1;
    addClass(testimonialCards[cardActivePosition], "active")
})
// Prev Buttton
prevBtn.addEventListener('click', (e) => {
    if(scrollLeftSize <= 0) return;
    if(scrollLeftSize >= totalScrollableWidth) return;
    scrollLeftSize -= cardWidth;
    testimonialsArea.scrollLeft = scrollLeftSize;
    removeClass(testimonialCards[cardActivePosition], "active")
    cardActivePosition -= 1;
    addClass(testimonialCards[cardActivePosition], "active")
})



// Create unorder List Items and append UL
function createElAppend(elName, parentEl, text="") {
    let listEl = document.createElement(`${elName}`);
    listEl.innerText = text;
    parentEl.appendChild(listEl)
}
// Add Class
function addClass(el, className) {
    el.classList.add(className);
}
// Remove Class
function removeClass(el, className) {
    el.classList.remove(className);
}