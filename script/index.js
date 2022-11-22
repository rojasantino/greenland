let about = document.getElementById('about');
let nav = document.getElementById('nav');
let search = document.getElementById('search');
let searchBox = document.getElementById('search-box');
let n1 = document.getElementById('n1');

let nav_height = nav.getBoundingClientRect().height;


window.addEventListener('scroll',()=>{
let about_top = about.getBoundingClientRect().top;
if(about_top < nav_height){
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

search.addEventListener('click',()=>{
searchBox.classList.toggle('active');
})
