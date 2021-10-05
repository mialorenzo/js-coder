class Persona {
    constructor(nombre, edad){
        this.nombre =nombre;
        this.edad=edad; 
    }
}


let datoUsuario = []; 


datoUsuario.push(new Persona ("Maria Jose", 36))
datoUsuario.push(new Persona ("Maria Ana", 90))
datoUsuario.push(new Persona ("Maria Juana", 50))
datoUsuario.push(new Persona ("Maria Antonia", 19))
datoUsuario.push(new Persona ("Maria Teresa", 28))
datoUsuario.push(new Persona ("Sofia", 20))

const agregarPersonasALaLista = () => {
    let nombre = prompt ("Nombre de usuario");
    let edad = Number(prompt("Ingrese su edad"));


    let persona = new Persona( nombre, edad)
    datoUsuario.push(persona)

}

datoUsuario.sort(( a,b) => {
    if (a.edad > b.edad) {
        return 1 
    }
    if (a.edad < b.edad ){
        return -1 
    }  
    return 0 

})

console.log(datoUsuario);
