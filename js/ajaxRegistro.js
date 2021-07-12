function peticionRegistrarUsuario(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                var respuestaResivida = xmlhttp.responseText;
                alert(respuestaResivida);
                window.location.href = "https://parcial-edi-front.herokuapp.com/index.html";
            }if (xmlhttp.status == 500) {
                alert("El correo ingresado ya corresponde a una cuenta existente, ingrese otro correo");
                window.location.href = "https://parcial-edi-front.herokuapp.com/registro.html";
            }
            else{
                alert("Fallo la conexión con el servidor!!");
            }
        }
    }
    //xmlhttp.open("GET",'https://tp-final-pp-liv-ferz-backend.herokuapp.com/Usuarios/registro'+'/'+nombre+'/'+apellido,true);
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/registrarUsuario',true);
    xmlhttp.send(formJSON);
}

