const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const salirads= document.querySelector(".cerrar-ads2");
const ads2= document.querySelector(".ads2");



abrir.addEventListener("click", () => {
    nav.classList.add("visible");
     
    nav.style.transition = '0.5s' 
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

salirads.addEventListener("click", () => {
    ads2.classList.add("hiden");
    
})





