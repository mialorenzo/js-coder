let listaObjetos; 

if(localStorage.getItem("lista") == null){
	alert("No tenes productos para ver")
} else {
	listaObjetos= JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
	console.log( element.nombre + " " + element.color);
	
});


const comprar = (dato) => {
	let carrito ; 
	if(localStorage.getItem("carrito") == null){
		carrito = []
		alert("error")
		
	} else {
		carrito= JSON.parse(localStorage.getItem("lista"))
	}




	carrito.push(dato)
	localStorage.setItem("Carrito", JSON.stringify(carrito))
}












let listaObjetos= JSON.parse(localStorage.getItem("lista"))


let listaProductos; 

let imprimirDatos = document.getElementById(" productosPrint")

if ( localStorage.getItem("lista")-- null) {
    alert ("There isnt products to see")
} else {
    listaProductos = JSON.parse (localStorage.getItem("lista"))
}

listaProductos.forEach(element => {
   
    imprimirDatos.innerHTML +=
   `<div class="row">
		<div class="col-md-4">
			<div class="card">
				<h5 class="card-header">
					${element.title}
				</h5>
				<div class="card-body">
					<p class="card-text">
						${ element.description}
					</p>
				</div>
				<div class="card-footer">
					${element.price}
				</div>
                <button> BUY</button>
			</div>
            ` 
});




