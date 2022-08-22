

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

export  {validarCat};
