function buscarUsuario(formulario){
    var formData = new FormData(formulario);
    var formJSON = JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //var data = JSON.parse(xmlhttp.responseText);
                localStorage.setItem("usuario", document.getElementById("correo").value);//Me guarda el correo
                localStorage.setItem("password", document.getElementById("contraseña").value);
                window.location.href = "https://parcial-edi-front.herokuapp.com/inicio.html";
            }if (xmlhttp.status == 401) {
                alert("No se encontro el usuario!");
                document.querySelector('#loguearse').classList.remove('invisible');
                document.querySelector('#cargando').classList.add('invisible');
            }
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}

