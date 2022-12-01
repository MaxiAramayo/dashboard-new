

function  validarCat(productos, data){
    let Validacion = false;
    console.log(productos);
    console.log(data);
    data.map(item => {
        if(item.productos.length > 0){
            item.productos.forEach(producto => {
                if(producto.nombre === productos.nombre){
                    Validacion = true;
                }
            } )
        }
    })

  return Validacion;
}

function valdarEditProduct(productos, data, productoAEditar){
    let Validacion = false;
    data.map(item => {
        if(item.productos.length > 0){
            item.productos.forEach(producto => {
                if(producto.nombre === productos.nombre){
                    if( producto.nombre !== productoAEditar){
                    Validacion = true;
                    }
                }
            } )
        }
    })

    return Validacion;
}

export  {validarCat, valdarEditProduct};
