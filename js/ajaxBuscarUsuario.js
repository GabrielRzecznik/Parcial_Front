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
                        document.querySelector('#registrarse').classList.remove('invisible');
                        document.querySelector('#cargando').classList.add('invisible');
                        //Marcar Contraseña
                        document.getElementById('iconoContraseña').classList.remove('validado');
                        document.querySelector('#iconoContraseña').classList.add('bi-x-circle-fill');
                        document.querySelector('#iconoContraseña').classList.remove('bi-check-circle-fill');
                    }
                }else{
                    alert("No se encontro el usuario!");
                }
            }else{
                alert("No se encontro el usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}

