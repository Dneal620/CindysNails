//Gallery
let galpics = document.querySelectorAll('#galpic');
let modalContent = document.querySelector('.modal-content');
console.log(modalContent);
galpics.forEach(function(galpic){
	galpic.addEventListener('click', galleryClick);
});

function galleryClick(){
	modalContent.style.backgroundColor = "red";
}