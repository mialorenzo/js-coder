let total = parseFloat(prompt("Escriba el monto total"));
let cuotas = parseInt(prompt("Escriba la cantidad de cuotas"));
alert(`Puede abonar en ${cuotas} cuotas de ${total / cuotas}$ cada una`);

function calcular ( a, b, c) {
    let res; 

    switch( c ) {
        case "1": res= a/b; 
        break;
        case "3":res=a/b;
        break;
        case "6":res=a/b;
        break;
        case "12":res=a/b;
        break;
        default : res= "La cantidad de cuotas ingresada no es correcta.";
        break;
    }
    resultado(res);
}

​
​
function resultado (a) {
​
    console.log(a)
    alert(a);
​
}
