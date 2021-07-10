//Pegar tablita
let con = document.getElementById('con');
let colum = document.getElementById('nombre_columnas');

function mostrarTablaAutomoviles(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var data = JSON.parse(xmlhttp.responseText);

                    con.innerHTML = con.innerHTML    
                    + '<td class="table-white">' + data[i].patente + '</td>' 
                    + '<td class="table-white">' + data[i].marca + '</td>'
                    + '<td class="table-white">' + data[i].modelo + '</td>'
                    + '<td class="table-white">' + data[i].version + '</td>'
                    + '<td class="table-white">' + data[i].color + '</td>'
                    + '<td class="table-white">' + data[i].estado + '</td>'
                    + '<td class="table-white">' + data[i].cambio + '</td>'
                    + '<td class="table-white">' + data[i].combustible + '</td>'
                    + '<td class="table-white">' + data[i].valor + '</td>'
                    + '<td class="table-white">' + data[i].kilometraje + '</td>'
                    + '<td class="table-white">' + data[i].anio + '</td>'
                    + '<td class="table-white">' + data[i].propietario + '</td>'                                    
                
            }else{
                alert("Exploto todo!!");
            }   
        }
    }
    xmlhttp.open("GET",'https://parcial-edi-backend.herokuapp.com/Automoviles/listaAutomovil',true);
    xmlhttp.send();//No le mando
}