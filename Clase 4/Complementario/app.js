solicitarDatos();
​
​
function solicitarDatos (){
    let num1 = Number (prompt("Ingrese numero 1"));
    let num2 = Number (prompt("Ingrese numero 2 "));
    let operador = prompt("Por favor, ingrese la operacion que desea realizar.");
​
    calcular(num1, num2, operador);
}

​
function calcular (a, b, c){
​
    let res;
​
    switch (c) {
        case "+": res= a+b;
        break;
        case "-": res= a-b;
        break;
        case "*": res= a*b;
        break;
        case "/": res= a/b;
        break;
        default : res= "La operacion ingresada no es correcta.";
        break;
        
​
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