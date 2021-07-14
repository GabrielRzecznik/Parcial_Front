function editarUsuario(){
    var formJSON=JSON.stringify({"correo":usuario, "contraseña":contraseña});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var respuestaResivida = xmlhttp.responseText;
                alert(respuestaResivida);
                window.location.href = "https://parcial-edi-front.herokuapp.com/perfil.html";
            }else{
                alert("No se pudo actualizar el usuario!");
            }   
        }
    }
    xmlhttp.open("PUT",'https://parcial-edi-backend.herokuapp.com/Usuarios/actualizarUsuario',true);
    xmlhttp.send(formJSON);
}
