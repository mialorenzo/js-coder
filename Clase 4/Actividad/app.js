let total = parsefloat (prompt("Escriba su monto total")); 
let cuotas = parseint ( prompt(" Escriba la cantidad de cuotas en las que desea pagar"));


        pagar(cantidad){
            if (cuotas =="1"=="3"=="6"=="9"=="12" ){
                alert(`Su total es ${total}. Lo pagaria en ${cuotas} de ${cantidad}  / cantidad cada una`);
                this.disponible=true
            } else {
                alert( `Ese número de cuotas no esta disponible`);
            }

        }