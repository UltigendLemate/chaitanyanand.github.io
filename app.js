const hamburger=document.querySelector('.header .navbar .list .hamburger');
const mobile_menu=document.querySelector('.header .navbar .list ul');
const menu_item=document.querySelectorAll('.header .navbar .list ul li a');
const header=document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
	var scpos= window.scrollY;
	if(scpos>250){
		header.style.backgroundColor="#29323c";
	}
	else{
		header.style.backgroundColor="transparent";
	}
});

menu_item.forEach((item)=>{
	item.addEventListener('click',()=>{
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


