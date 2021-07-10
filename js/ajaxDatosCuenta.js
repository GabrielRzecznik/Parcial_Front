//Pegar tablita
//let con = document.getElementById('con');
//let colum = document.getElementById('nombre_columnas');

function mostrarDatosUsuario(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                //var data = xmlhttp.responseText;
                var data = JSON.parse(xmlhttp.responseText);
                var usuario = data[1];//test

                for (var i = 0; i < data.length; i++) {
                    if (data[i].correo == usuario.correo) {
                        alert("Se encontro el usuario");
                    }
                }    
                
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send();//No le mando
}