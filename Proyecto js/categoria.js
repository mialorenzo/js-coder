let listaObjetos; 

if(localStorage.getItem("lista") == null){
	alert("No tenes productos para ver")
} else {
	listaObjetos= JSON.parse(localStorage.getItem("lista"))
}



let dato=prompt("ingresa categoria seleccionada")
listaFiltrada - listaObjetos.filter (e=> e.categoria=== dato)







if(listaFiltrada.length != 0){

listaFiltrada.forEach(element => {
    console.log(element.nombre + " " + element.categoria);
    
});
} else {
    console.log("No hay productos para esa categoria")
}