// Tenes un elemento con que trabajar
let btn = document.querySelector ("button")
/*El body es uno de los nodos que no hace falta seleccionar para usarlo, 
ya que esta en document.body */
// let body  = document.querySelector("body")
// A ese elemmento le asigno un evento
btn.addEventListener ("click",hacerClick)
// Tener el callback disponible
function hacerClick (){
    let div = document.createElement("div")
    let p = document.createElement ("p")
    let btn_nuevo = document.createElement ("button")

    p.innerText("Lorem Ipsum")
    btn_nuevo.innerText = "Borrar"
    btn_nuevo.addEventListener("click", borrarElemento)

    function borrarElemento (){
        document.body.removeChild(div)
    }

    div.appendChild(p)
    div.appendChild(btn_nuevo)
    document.body.appendChild(div)
}