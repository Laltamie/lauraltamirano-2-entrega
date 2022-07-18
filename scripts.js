let productos = [];
let total = 0;

function agregar(producto, precio){
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("button-pagar").innerHTML = `Pagar $${total}`
}

function pagar(){
    alert(productos.join(", \n"))
}