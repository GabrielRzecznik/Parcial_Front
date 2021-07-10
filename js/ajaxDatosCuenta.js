//Pegar tablita
//let con = document.getElementById('con');
//let colum = document.getElementById('nombre_columnas');

function mostrarDatosUsuario(correo){
    xmlhttp = new XMLHttpRequest(correo);
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = xmlhttp.responseText;
                var usuario = correo;

                for (var i = 0; i < data.length; i++) {
                    if(usuario == data[i].correo){
                        alert("Hola mundo");
                    }
                }
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(correo);//No le mando
}