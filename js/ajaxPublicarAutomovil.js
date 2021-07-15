function peticionPublicarAutovil(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    formData.append("correo", usu);
    var formJSON = JSON.stringify(formulario, {"propietario":usu});
    
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {
                var respuestaResivida = xmlhttp.responseText;
                alert(respuestaResivida);
            }else if (xmlhttp.status == 500) {
                alert("La patente del automovil ingresado ya corresponde con la de un automovil publicado");
                //Marcar Patente
                document.getElementById('iconoPatente').classList.remove('validado');
                document.querySelector('#iconoPatente').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPatente').classList.remove('bi-check-circle-fill');
            }else{
                alert("Fallo la conexión con el servidor!!");
            }
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Automoviles/publicarAutomovil',true);
    xmlhttp.send(formJSON);
}

