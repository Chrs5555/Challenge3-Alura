import { main } from "./main.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen){
    const producto = document.createElement("li");
    producto.className = "produc__item";
    producto.innerHTML = `
        <div class="contenido">
            <img src="${imagen}" alt="">
            <h3>${nombre}</h3>
            <div class="descrip">
                <p>${precio}</p>
                <button class="btn-trash" >
                    <img src="images/trash-bin.png" alt="" class="task-id">
                </button>
            </div>
        </div>`;

    return producto;
}



async function listarProductos(){
    try{
        const listApi = await main.listarProductos();
        listApi.forEach(product=>lista.appendChild(crearCard(product.nombre, product.precio, product.imagen)));
    }catch(e){
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un error con la conexion :( </h2>`;
        console.log(e)
    }
}

listarProductos();