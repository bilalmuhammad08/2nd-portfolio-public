/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const cvFilePath = 'assets/cv/cv.pdf';
    
    const tempLink = document.createElement('a');
    tempLink.href = cvFilePath;

    tempLink.download = 'Anjali_Raj_T_CV.pdf';

    document.body.appendChild(tempLink);

    tempLink.click();

    document.body.removeChild(tempLink);
});


// me
const slides = document.querySelectorAll('.project-slide');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

prevBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });
});

nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
