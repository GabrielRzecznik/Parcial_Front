//Pegar tablita
//let con = document.getElementById('con');
//let colum = document.getElementById('nombre_columnas');

function mostrarDatosUsuario(usuario){
    var formJSON=JSON.stringify({"correo":usuario});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data=JSON.parse(xmlhttp.responseText);
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(formJSON);
}