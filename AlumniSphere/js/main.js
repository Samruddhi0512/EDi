// COUNTER

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute('data-target');
const current = +counter.innerText;

const increment = target / 200;

if (current < target) {
counter.innerText = Math.ceil(current + increment);
setTimeout(update, 10);
} else {
counter.innerText = target;
}

};

update();

});


// SCROLL REVEAL

window.addEventListener('scroll', () => {

const reveals = document.querySelectorAll('.reveal');

reveals.forEach(r => {

const top = r.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (top < windowHeight - 100) {
r.classList.add('active');
}

});

});