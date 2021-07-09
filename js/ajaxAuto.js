function peticionRegistrarUsuario(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = JSON.parse(xmlhttp.responseText);
                console.log(data);
                var nombre_columnas = Object.keys(data[0]);

                for (var i = 0; i < nombre_columnas.length; i++) {
                    colum.innerHTML = colum.innerHTML + '<th scope="col">' + nombre_columnas[i] + '</th>';
                }

                colum.innerHTML = colum.innerHTML + '<th scope="col">Editar</th>' + '<th scope="col">Borrar</th>' + '<th scope="col">Actualizar</th>';

                for (var i = 0; i < data.length; i++) {

                    con.innerHTML = con.innerHTML + 
                    '<th class="table-white" scope="row">' + data[i].id_teoriaSistema + '</th>' +
                    '<td class="table-white">' + data[i].id_ejercicio + '</td>' +
                    '<td class="table-white">' +
                    '<input id= "inptitulo" style="border-radius: 5px;" type="text" value="' + data[i].titulo + '" class="field left " readonly="readonly">' +
                    '</td>' +
                    '<td class="table-white">' +
                    '<div class="contenedorimp">'+
                    '<input id= "inpcontenido" style="border-radius: 5px; type="text" value="' + data[i].contenido + '" class="field left" readonly="readonly">' +
                    '</div>'+
                    '</td>' +
                    '<td class="table-white">' +
                    '<input id= "inptipo" style="border-radius: 5px;" type="text" value="' + data[i].tipo + '" class="field left" readonly="readonly">' +
                    '</td>' +
                    '<td class="table-white">' +
                    '<button type="button" class="btn btn-success" onclick="Editar()" id= ' + "'" + "editar" + data[i].id_ejercicio + "'" + '>Editar</button>' +
                    '</td>' +
                    '<td class="table-white">' +
                    '<button type="button" class="btn btn-danger" onclick="Borrar()" id= ' + "'" + "Borrar" + data[i].id_ejercicio + "'" + '>Borrar</button>' +
                    '</td>' +
                    '<td class="table-white">' +
                    '<button type="button" class="btn btn-primary" onclick="Actualizar()" id= ' + "'" + "Actualizar" + data[i].id_ejercicio + "'" + '>Actualizar</button>' +
                    '</td>' +
                    '</tr>' ;
                }
            }else{
                alert("Exploto todo!!");
            }   
        }
    }
    xmlhttp.open("GET",'https://parcial-edi-backend.herokuapp.com/Automoviles/listaAutomovil',true);
    xmlhttp.send();//No le mando
}