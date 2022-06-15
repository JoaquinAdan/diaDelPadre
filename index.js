document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

});
//NAV FIJO
window.addEventListener("scroll", function(){
    const header = document.querySelector("nav")
    header.classList.toggle("abajo",window.scrollY>0)
})

//ROTAR ELEMENTOS

function rotar(objeto,objetos,link){
    objeto.addEventListener("mouseenter",(e)=>{
        const icono = document.querySelector(objetos)
        icono.classList.add("rotar")
        icono.classList.remove("volver")
        const links = document.querySelector(link)
        links.classList.add("color-letra")
    },true);
    objeto.addEventListener("mouseout",(e)=>{
        const icono = document.querySelector(objetos)
        icono.classList.remove("rotar")
        icono.classList.add("volver")
        const links = document.querySelector(link)
        links.classList.remove("color-letra")
    },true);
}
rotar(impresora,"#impresoras",".link-impresora")
rotar(buscar,"#busquedas",".link-busqueda")
rotar(cuenta,"#cuentas",".link-cuenta")
rotar(lupa,"#lupas",".link-lupa")

//Scroll Nav
//Me di cuenta que se puede hacer con solo CSS asique lo deje por aca          
/* 
const smoothHeader = document.querySelector('.link-header')
const imprimir = document.querySelectorAll('.link-impresora');
const busqueda = document.querySelectorAll('.link-busqueda');


function scrollNav(link) {
    link.forEach( function( enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
        
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}
scrollNav(imprimir)
scrollNav(busqueda)
scrollNav(smoothHeader)
*/
//ABRIR PAGINAS
const netflix = document.querySelector(".netflix")
netflix.addEventListener("click",abrirNetflix);
function abrirNetflix(){
 console.log(window.open("https://www.netflix.com"))
}
const disney = document.querySelector(".disney")
disney.addEventListener("click",abrirDisney);
function abrirDisney(){
 console.log(window.open("https://www.disneyplus.com/"))
}
const prime = document.querySelector(".prime")
prime.addEventListener("click",abrirPrime);
function abrirPrime(){
 console.log(window.open("https://www.primevideo.com/"))
}
const banco = document.querySelector(".banco")
banco.addEventListener("click",abrirBanco);
function abrirBanco(){
 console.log(window.open("https://www.bancoprovincia.com.ar/home"))
}
const youtube = document.querySelector(".youtube")
youtube.addEventListener("click",abrirYoutube);
function abrirYoutube(){
 console.log(window.open("https://www.youtube.com/"))
}
const google = document.querySelector(".imagen-google")
google.addEventListener("click",abrirGoogle);
function abrirGoogle(){
    console.log(window.open("https://www.google.com/"))
}

//border gradiant

function paginas(clase,border){
    const pagina = document.querySelector(clase)
    pagina.addEventListener("mouseover",()=>{
    const borders = document.querySelector(border)
    borders.classList.add("gradient-border")
    })
    pagina.addEventListener("mouseout",(e)=>{
    const borders = document.querySelector(border)
    borders.classList.remove("gradient-border")
    })
}
paginas(".netflix",".border-netflix")
paginas(".disney",".border-disney")
paginas(".prime",".border-prime")
paginas(".banco",".border-banco")
paginas(".youtube",".border-youtube")



