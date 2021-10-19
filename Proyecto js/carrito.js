let listaObjetos;

if{ localStorage.getItem("carrito")== null){
    alert( "carrito vacio")

}else {
    listaObjetos =JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
console.log(element.nombre + " " + element.precio) ;   
});