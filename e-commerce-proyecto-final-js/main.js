

const productosArray = [
    {
        id:"libro-01",
        titulo:"Mujer Maravilla (Natalia Spetale)",
        imagen:"./img/mujermaravilla_tapa.jpg",
        precio: "1500"
    },
    {
        id:"libro-01",
        titulo:"¿Qué tienes en tu Mano? (Mariana Maillet)",
        imagen:"./img/tapa_quetienesentumano_marianamaillet.jpg",
        precio: "1500"   
    },
    {
        id:"libro-01",
        titulo:"Antídotos contra la religión (Juan Pablo Sosa)",
        imagen:"./img/antidotoscontralareligion_tapa.jpg",
        precio: "1500"
    },
    {
        id:"libro-01",
        titulo:"Hijos de la Promesa (Ezequiel Rossini)",
        imagen:"./img/HijosDeLaPromesa-EzequielRossini_160p-14x21-1-555x832-1.jpg",
        precio: "1500"
    }
]


const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-precio")

function cargarProductos() {

    productosArray.forEach(producto => { 
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">
                            ${producto.titulo}
                        </h3>
                        <p>$${producto.precio}</p>
                        <button class="producto-precio" id="${producto.id}">
                            Agregar al carrito
                        </button>
                    </div>
    `;

    contenedorProductos.append(div);
console.log(botonesAgregar);
    })

    actualizarBotonesAgregar()
}

cargarProductos();

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-precio")
}