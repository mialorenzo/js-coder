
  
  // ===== HAMBURGER BUTTON ===== //
  $(document).ready(function() {
    
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    })
      
  });
  

  // ==== END NAVBAR ==== //

//=== formulario ===//
class Persona {
  constructor(nombre, email, message){
      this.nombre =nombre;
      this.email=email; 
      this.message=message; 
  }
}


let datoUsuario = []; 


datoUsuario.push(new Persona ("Maria Perez", "mariaperez@gmail.com", "hola"))
datoUsuario.push(new Persona ("Juana Lopez","juana@gmail.com" , "hola como "))
datoUsuario.push(new Persona ("Felipe Gimenez", "felipe@gmail.com", "hola como estas?"))


const agregarPersonasALaLista = () => {
  let nombre = prompt ("Put your name");
  let email = prompt("Put your email");
  let message = prompt( "Leave your message")


  let persona = new Persona( nombre, email, message)
  datoUsuario.push(persona)

}

datoUsuario.sort(( a,b) => {
  if (a.nombre > b.nombre) {
      return 1 
  }
  if (a.nombre < b.nombre){
      return -1 
  }  
  return 0 

})

console.log(datoUsuario);