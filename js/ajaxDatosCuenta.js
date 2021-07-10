//Pegar tablita
//let con = document.getElementById('con');
//let colum = document.getElementById('nombre_columnas');

function mostrarDatosUsuario(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = xmlhttp.responseText;
                var usuario = data[1];//test

                alert(data.length);
                

                for (var i = 0; i < data.length; i++) {
                    if (data[i].correo == usuario.correo) {
                        alert(data[i].correo.value);
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