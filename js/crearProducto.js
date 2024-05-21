import { main } from "./main.js";

// const formulario = document.querySelector("[data-formulario]");
const enviar = document.querySelector("[enviar]");

async function crearProducto(evento){
    
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await  main.enviarProducto(nombre, precio, imagen);
    }catch(e){
        alert(e);
    }
}

enviar.addEventListener("click", evento => crearProducto(evento));

