let mostrarNombre = document.getElementById('correo');
let mostrarApellido = document.getElementById('correo');
let mostrarCorreo = document.getElementById('correo');
let mostrarProvincia = document.getElementById('correo');
//Pegar tablita
function mostrarDatosUsuario(usuario){
    var formJSON=JSON.stringify({"correo":usuario});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                mostrarNombre.innerHTML = data[0]["nombre"];
                mostrarApellido.innerHTML = data[0]["apellido"];
                mostrarCorreo.innerHTML = data[0]["correo"];
                mostrarProvincia.innerHTML = data[0]["provincia"];
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}