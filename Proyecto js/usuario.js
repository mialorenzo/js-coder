class user {
    constructor(nombre, pass) {

        this.nombre = nombre;
        this.pass = pass;
    }
}



class product {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}




const mia = new user("lorenzo", "coderhouse")

let listaProductos;


if (localStorage.getItem("lista") == null) {
    const listaProductos = []
} else {
    listaProductos = localStorage.getItem("lista")
}

const crearProducto = (nombre, categoria, precio, stock) => {
    const product = new product(nombre, categoria, precio, stock)
    return product
}




const confirmacionDeAcceso = () => {
    
    let bucle = true

    while (bucle) {

        const nombre = prompt("put your name");
        const pass = prompt("put your password")
        
        
        if (nombre === mia.nombre && pass === mia.pass) {
            bucle = false
            

            let ciclo = true;
            while (ciclo) {

                
                const nombre = prompt("Put the name of the producto");
                const categoria = prompt("Put the categoria")
                const precio = prompt("Put the price of product")
                const stock = parseInt(prompt("put the stock of this product"));

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))


                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar mas?")
            }


            break;
        } else {
            alert("Wrong user")
        }

    }

}


confirmacionDeAcceso()