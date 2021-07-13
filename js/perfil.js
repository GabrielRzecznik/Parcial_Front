//Metodo Loud

//Usuario
var usuario = "rzecznik@gmail.com";
var contraseña = "Parcial2021";

function perfil(){
    mostrarDatosUsuario(usuario, contraseña);
}

var botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener('click', eliminarUsuario(usuario, contraseña));

//Pegar tablita
function eliminarUsuario(usuario, contraseña){
    var formJSON=JSON.stringify({"correo":usuario, "contraseña":contraseña});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("Usuario eliminado!");
                window.location.href = "https://parcial-edi-front.herokuapp.com/index.html";
            }else{
                alert("No se pudo eliminar el usuario!");
            }   
        }
    }
    xmlhttp.open("DELETE",'https://parcial-edi-backend.herokuapp.com/Usuarios/eliminarUsuario',true);
    xmlhttp.send(formJSON);
}