//#region Metodo Load
window.addEventListener('load',load);

function load(){
    perfil();
}
//#endregion

//Usuario
var usuario = "rzecznik@gmail.com";
var contraseña = "Parcial2021";

function perfil(){
    mostrarDatosUsuario(usuario, contraseña);
}

var botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener('click', eliminarUsuario(usuario, contraseña));

