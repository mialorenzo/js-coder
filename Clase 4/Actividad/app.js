

     pagar =(cantidad, cuotas) =>{
        if (cuotas == "1" ||cuotas== "3" || cuotas== "6" || cuotas== "9" || cuotas== "12") {
            alert(`Su total es ${total}. Lo pagaria en ${cantidad/cuotas} cada una`);
        } else {
            alert(`Ese número de cuotas no esta disponible`);
        }

    }


let total = parseFloat (prompt("Escriba su monto total")); 
let cuotas = parseInt ( prompt(" Escriba la cantidad de cuotas en las que desea pagar"));

pagar(total, cuotas)

