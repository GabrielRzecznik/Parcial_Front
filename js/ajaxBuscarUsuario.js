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
                if (correo.value === data[0]["correo"]) {//TESTEAR
                    window.location.href = "https://parcial-edi-front.herokuapp.com/inicio.html";
                }else{
                    alert("No se encontro el usuario!");
                }
            }if (xmlhttp.status == 500) {
                if (correo.value !== data[0]["correo"]) {//TESTEAR
                    alert("No se encontro el usuario!");
                }else{
                    alert("Ocurrio un error inesperado");
                }
            }
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}

