///formulario

class datos {
    constructor({name, email, phone, message }) {
        this.name = name;
        this.email = email;
        this.phone =phone;
        this.message=message;
    }
}


const guardarInfo = () => {

    const dato = new datos (
        {
            name :document.getElementById("name").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value,
            message:document.getElementById("message").value,
        })

    return dato
    
}