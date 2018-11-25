var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


function getText(event) {
    event.preventDefault();
    var input_text = document.getElementById("input_text").value;
    document.getElementById("result_text").innerHTML = input_text;
	var e = document.getElementById("color_text");
	result_text.style.color = e.options[e.selectedIndex].value;
}

var el = document.getElementById("submit");
el.addEventListener("click", getText, false);