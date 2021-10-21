class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}




const mia = new User("lorenzo", "coderhouse")

const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass")

        if (nombre === mia.nombre && pass === mia.pass) {
            bucle = false

            let ciclo = true;
            break;
        } else {
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()