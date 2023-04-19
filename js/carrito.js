const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-compra");


if (productosEnCarrito){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(productosArray => {
        
        
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `<img class="img-carrito" src="${productosArray.imagen}" alt="${productosArray.titulo}">
        <div class="carrito-producto-titulo">
            <small>título</small>
            <h3>${productosArray.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${productosArray.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>${productosArray.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>${productosArray.precio * productosArray.cantidad}</p>
        </div>
        <button id="${productosArray.id}" class="carrito-producto-eliminar">
            <i class="bi bi-trash-fill"></i>
        </button>
        `;

        contenedorCarritoProductos.append(div);
    })


}else{

}