async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertiva = conexion.json();

    return conexionConvertiva;
}

async function enviarProducto(nombre, precio, imagen){
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const conexionConvertiva = conexion.json();

    if(!conexion.ok){
        throw new error ("Ha ocurrido un error");
    }

    return conexionConvertiva;

}

// listarProductos();

export const main = {
    listarProductos, enviarProducto
}