//Pegar tablita
function buscarUsuario(formulario){
    var formData = new FormData(formulario);
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = JSON.parse(xmlhttp.responseText);
                if (correo.value === data[0]["correo"]) {
                    if (contraseña.value === data[0]["contraseña"]) {
                        window.location.href = "https://parcial-edi-front.herokuapp.com/inicio.html";
                    }else{
                        alert("La contraseña es incorrecta");
                        //Logo de carga
                        document.querySelector('#loguearse').classList.remove('invisible');
                        document.querySelector('#cargando').classList.add('invisible');
                        //Marcar Contraseña
                        document.getElementById('iconoC').classList.remove('validado');
                        document.querySelector('#iconoC').classList.add('bi-x-circle-fill');
                        document.querySelector('#iconoC').classList.remove('bi-check-circle-fill');
                    }
                }else{
                    alert("No se encontro el usuario!");
                    //Logo de carga
                    document.querySelector('#cargando').classList.add('invisible');//Logo de carga
                    document.querySelector('#loguearse').classList.remove('invisible');//Esconde el texto del boton
                    //Marcar Correo
                    document.getElementById('iconoCorreo').classList.remove('validado');
                    document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                    document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
                }
            }else{
                alert("No se encontro el usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}

