let nav = document.querySelectorAll('.nav');

let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let nav3 = document.querySelector('.nav3');
let nav4 = document.querySelector('.nav4');
let nav5 = document.querySelector('.nav5');
let nav6 = document.querySelector('.nav6');


function reset(){
	nav.forEach(function(a){
    a.style.color = "black";
  });
}


nav1.addEventListener('click', function(){
  reset();
  nav1.style.color = 'pink';
})

nav2.addEventListener('click', function(){
  reset();
  nav2.style.color = 'pink';
})

nav3.addEventListener('click', function(){
  reset();
  nav3.style.color = 'pink';
})

nav4.addEventListener('click', function(){
  reset();
  nav4.style.color = 'pink';
})

nav5.addEventListener('click', function(){
  reset();
  nav5.style.color = 'pink';
})

nav6.addEventListener('click', function(){
  reset();
  nav6.style.color = 'pink';
})

console.log(nav);






reset();



