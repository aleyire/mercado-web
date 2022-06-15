const agregarCarrito = document.querySelector("#agregar-carrito")
const modal = document.querySelector(".modal")
const btnCerrar = document.querySelector("#btn-cerrar")
const comprar = []

agregarCarrito.addEventListener("click", (e) => {
    e.preventDefault()
    const producto = {
        nombre: nombre.value,
    }
    comprar.push(producto)
    console.log(comprar)
})   

btnCerrar.addEventListener("click", () => {
    modal.classList.add("oculto")
})
