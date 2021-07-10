//Pegar tablita
//let con = document.getElementById('con');
//let colum = document.getElementById('nombre_columnas');

function mostrarDatosUsuario(hola){
    xmlhttp = new XMLHttpRequest(hola);
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = JSON.parse(xmlhttp.responseText);
                console.log(data);
                var filas = Object.keys(data[0]);

                for (var i = 0; i < filas.length; i++) {
                    alert("Hola Mundo");
                }

                for (var i = 0; i < filas.length; i++) {
                    alert("Hola Mundo");
                }

                
            }else{
                alert("No se pudieron traer los datos del usuario!");
            }   
        }
    }
    xmlhttp.open("POST",'https://parcial-edi-backend.herokuapp.com/Usuarios/buscarUsuario',true);
    xmlhttp.send(hola);//No le mando
}