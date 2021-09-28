class Productos {

    constructor({nombre,
        categoria,
        precio,
        stock,
        disponible
        }){

        this.nombre= nombre,
        this.categoria= categoria,
        this.precio= precio,
        this.stock= stock,
        this.disponible=disponible
    }

        comprar(cantidad){
            if (this.stock <=0 ){
                console.log("No podes realizar la comprar");
                this.disponible=false
            } else {
                this.stock = this.stock - cantidad
                console.log( `Compraste un ${this.nombre} , te salio ${this.precio * this.cantidad}`);
            }

        }


}

const producto1= new Productos({
    nombre:"Mask oil", 
    categoria:"Masks", 
    precio: 12.10 ,  
    stock: 10 , 
    disponible: true ,
})

console.log(producto1);

const producto2= new Productos({
    nombre:"bb cream", 
    categoria:"cream", 
    precio: 10.30,  
    stock: 0 , 
    disponible: false ,
})

console.log(producto2);