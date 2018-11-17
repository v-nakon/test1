var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

$("body").on("mouseover", "slide", function(){
  this.play();
  $( this ).css( "background-color", "black" );
});


function getText() {
    var input_text = document.getElementById("input_text").value;
    document.getElementById("result_text").innerHTML = input_text; // не мог поменять цвет для х сразу, хуле?
	var e = document.getElementById("color_text");
	result_text.style.color = e.options[e.selectedIndex].value;
}