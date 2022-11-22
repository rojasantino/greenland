let service = document.getElementById('service');
let nav = document.getElementById('nav');

let nav_height = nav.getBoundingClientRect().height;


window.addEventListener('scroll',()=>{
let service_top = service.getBoundingClientRect().top;
if(service_top < nav_height){
    nav.style.background = 'rgba(225,225,225,0.1)';
    nav.style.backdropFilter = 'blur(20px)';
    nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
    nav.style.borderRadius = '0px 0px 70px 70px'
}else{
    nav.style.background="transparent";
    nav.style.backdropFilter = 'blur(0px)';
    nav.style.boxShadow = '';
    nav.style.borderRadius = ''
}
})

let element = document.querySelector('.service');

element.addEventListener('click',(e)=>{
let div = document.createElement('div');
div.classList.add('gallery-div');
div.style.width = '1000px';
div.style.height = '500px';
div.style.margin = '0 auto';
div.style.background = 'rgba(0,0,0,1) url("images/After.jpg")no-repeat';
div.style.backgroundSize = "cover";
div.style.position = 'fixed';
div.style.top = "0";
div.style.bottom = '0';
div.style.left = '0';
div.style.right = '0';
div.style.margin = "auto";
div.style.zIndex = '9999999';
document.body.appendChild(div);
let dive = document.querySelector('.gallery-div');
dive.addEventListener('click',()=>{
document.body.removeChild(dive)
})

})


   