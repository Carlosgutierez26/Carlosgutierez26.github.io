const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");





abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    nav.style.transition = '0.5s' 

})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})















var header = document.getElementById('header');
window.addEventListener('scroll', ()=>{
    
    var scroll = window.scrollY

    if (scroll>10){
        header.style.backgroundColor = 'rgb(21, 21, 21) '
        header.style.transition = '1s'
        
    } else{
        header.style.backgroundColor = 'transparent'
        header.style.transition = '0.4s'
    }
})










var logo = document.getElementById('logo');
window.addEventListener('scroll', ()=>{
    
    var scroll = window.scrollY

    if (scroll>10){
        logo.style.width = '6rem'
        
    } else{
        logo.style.width = '7rem'
      
    }
})  


const salirads= document.querySelector(".cerrar-ads2");
const ads2= document.querySelector(".ads2");





salirads.addEventListener("click", () => {
    ads2.classList.add("hiden");
    
})




