//#region Metodo Load
window.addEventListener('load',load);

function load(){
    datosPerfil();
}
//#endregion

//Usuario
var usuario = "rzecznik@gmail.com";
var contraseña = "Parcial2021";

function datosPerfil(){
    mostrarDatosUsuario(usuario, contraseña);
}

//Eliminar Usuario
var botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener('click', eliminarUsuario);

//Pegar tablita
function eliminarUsuario(){
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

//Editar Usuario
var botonEditar = document.getElementById("editar");
botonEditar.addEventListener('click', editarUsuario);



//Pegar tablita
function editarUsuario(){
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

