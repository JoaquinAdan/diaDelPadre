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
