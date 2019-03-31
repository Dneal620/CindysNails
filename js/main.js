//slider programing
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;


// Clear All Images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
	}
}


// Init Slider
function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
}


// Show Previous
function slideLeft(){
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
}

//show Next
function slideRight(){
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++;
}

// Left Arrow Click
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = sliderImages.length
	}
	slideLeft();
});

//Right Arrow Click
arrowRight.addEventListener('click', function(){
	if(current === sliderImages.length -1){
		current = -1
	}
	slideRight();
});


startSlide();

//Scroll Event Listener
function Scroll(){
	let ypos = window.pageYOffset;
	let pic1 = document.querySelector('.s2d1');
	let pic2 = document.querySelector('.s2d2');
	let pic3 = document.querySelector('.s2d3');


	if(ypos >= 890){
		pic1.style.opacity = "1";
		pic1.style.transform = "translateX(0px)";

		pic2.style.opacity = "1";
		pic2.style.transform = "translateX(0px)";

		pic3.style.opacity = "1";
		pic3.style.transform = "translateX(0px)";
	}
}

window.addEventListener('scroll', Scroll);

//Slider Arrow Animation
function showArrows(){
	let leftArrow = document.querySelector('#arrow-left');
	let rightArrow = document.querySelector('#arrow-right');

	leftArrow.style.opacity = "1";
	leftArrow.style.transform = "translateX(0px)"
	rightArrow.style.opacity = "1";
	rightArrow.style.transform = "translateX(0px)"
}

window.addEventListener('load', showArrows());

//nav programing
let nav = document.querySelectorAll('.nav');

let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let nav3 = document.querySelector('.nav3');
let nav4 = document.querySelector('.nav4');
let nav5 = document.querySelector('.nav5');
let nav6 = document.querySelector('.nav6');


function resetNav(){
	nav.forEach(function(a){
    a.style.color = "black";
  });
}


nav1.addEventListener('click', function(){
  resetNav();
  nav1.style.color = 'pink';
})

nav2.addEventListener('click', function(){
  resetNav();
  nav2.style.color = 'pink';
})

nav3.addEventListener('click', function(){
  resetNav();
  nav3.style.color = 'pink';
})

nav4.addEventListener('click', function(){
  resetNav();
  nav4.style.color = 'pink';
})

nav5.addEventListener('click', function(){
  resetNav();
  nav5.style.color = 'pink';
})

nav6.addEventListener('click', function(){
  resetNav();
  nav6.style.color = 'pink';
})


