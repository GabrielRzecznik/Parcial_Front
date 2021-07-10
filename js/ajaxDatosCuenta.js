//Pegar tablita
let mostrarCorreo = document.getElementById('correo');

function mostrarDatosUsuario(usuario){
    var formJSON=JSON.stringify({"correo":usuario});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
                colum.innerHTML = colum.innerHTML + data["correo"];
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}