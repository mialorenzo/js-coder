
const peli1= "bad girls" 
const peli2= "oceans 8"
const peli3= "27 dresses"    

let peliDinamica = prompt("Welcome to the gran village cinema. Which movie you want to see?"
    );

    peliDinamica= peliDinamica.toLowerCase(); 
    
    if (peliDinamica===peli1 || peliDinamica===peli2 || peliDinamica===peli3){ 
        console.log(`This movie ${peliDinamica} is available`); 
    } else { 
        console.log ( `The movie is not available`);
    }