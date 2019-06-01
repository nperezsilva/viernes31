/*Eventos Default: Son comportamientos con los q ya vienen algunos nodos en 
determinados eventos */
let a = document.querySelector("a")

a.addEventListener("click",clickdelA)

// function clickdelA(e){
    /*Event.preventDefault (): Detiene el comportamiento por default que pueda
    tener cualquier nodo */
    /*e.preventDefault()
    console.log("click del a!")
} */

/* 1) En el callback del <a> hacer la siguiente estructura:
<div>
    <p> Esta seguro que quiere salir de esta pagina? <p>
    <button> Aceptar <button>
    <button> Cancelar <button>
</div>

2) Si se hace click en "Aceptar" se tiene que redirigir al usuario al href del <a>

3) Si se hace click en "Cancelar", se tiene q borrar todo el div que contenia el boton*/

function clickdelA(e){

    e.preventDefault()
    console.log("click del a")
    
    let div = document.createElement("div")
    let p = document.createElement("p")
    let btnA = document.createElement ("button")
    let btnC = document.createElement("button")

    //div.className= "popup"
    div.classList.add("popup")
    //Nodo.classList.add
    //Nodo.classList.remove()
    //Nodo.classList.toggle()

    p.innerText = "Está seguro que quiere salir de la página?"
    btnA.innerText = "Aceptar"
    btnA.addEventListener("click",redirigir)
    //aceptar.id =
    btnC.innerText = "Cancelar"
    btnC.addEventListener("click",borrarElemento)

    
    div.appendChild(p)
    div.appendChild(btnA)
    div.appendChild(btnC)

    document.body.appendChild(div)
}

//creo cada uno de los callbacks
 function redirigir(){
    //window.location.href = "http://google.com"
    location.href = a.href
 }

 function borrarElemento(e){
    document.body.removeChild(e.target.parentNode)
 }
