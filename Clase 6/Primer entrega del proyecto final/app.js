
///compra en cuotas

const validarTotal = (total) => isNaN(total) || total <= 0;

const validarCuotas = (cuotas) => cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 9 && cuotas !== 12;

const pedirTotal = () => {
    let total = parseFloat(prompt("Escriba su monto total"));
    while (validarTotal(total)) {
        alert("Por favor, escriba un número mayor a cero.");
        total = parseFloat(prompt("Escriba su monto total"));
    }
    return total;
}

const pedirCuotas = () => {
    let cuotas = parseInt(prompt(" Escriba la cantidad de cuotas en las que desea pagar"));
    while (validarCuotas(cuotas)) {
        alert("Por favor, ingrese 1, 3, 6, 9 o 12 cuotas");
        cuotas = parseInt(prompt(" Escriba la cantidad de cuotas en las que desea pagar"));
    }
    return cuotas;
}

const valorCuotas = (total, cuotas) => {
    const cuenta = total / cuotas
    return cuenta.toFixed(2);
}

const total = pedirTotal();
const cuotas = pedirCuotas();
alert(`Usted debe pagar ${cuotas} cuotas de ${valorCuotas(total, cuotas)}`);