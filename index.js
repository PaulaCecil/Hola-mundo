
/* const nombreUsuario (prompt ('ingrese su nombre por favor'));
alert (`Hola ${nombreUsuario}`); */

const botonIngreso = document.querySelector ("#ingresar");

botonIngreso.onclick = function(){

    const edadUsuario = Number (document.querySelector ("#edad-usuario").value);
    
    let textoResultado;

    if(edadUsuario <= 18){

        textoResultado = "Podés entrar al Bar";

    }else{

        textoResultado = "No podés entrar al Bar";
    }
    
    
    document.querySelector ("#resultado").innerText = textoResultado;

    console.log (textoResultado);

    return false;

}




