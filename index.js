//Side Bar
let side_bar = document.getElementById('side-bar');

let show = () => {
    side_bar.style.top = '0';
}

let hide = () => {
    side_bar.style.top = '-110%';
}

//Slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var index = 0;

let slide = (value) => {
    if (value > 0) {index++;}
    else if (value < 0) {index--;}

    if (index < 0) { index = slides.length-1 }
    else if (index > slides.length-1) { index = 0 }

    navigate(index);
}

let navigate = (i) => {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	})

	btns.forEach((btn) => {
		btn.classList.remove('active');
	})

    index = i;

	slides[index].classList.add('active');
	btns[index].classList.add('active');
}

let autoSlide = () => {
    index++;

    if (index < 0) { index = slides.length-1 }
    else if (index > slides.length-1) { index = 0 }

    navigate(index);
}

setInterval(autoSlide, 9000)