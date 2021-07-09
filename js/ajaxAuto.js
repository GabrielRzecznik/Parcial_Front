function peticionRegistrarUsuario(formulario){
    var formData= new FormData(formulario); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                var automovilesEncontrados = JSON.parse(xmlhttp.responseText);
                alert(automovilesEncontrados);
            }
            else{
                alert("Exploto todo!!");
            }   
        }
    }
    xmlhttp.open("GET",'https://parcial-edi-backend.herokuapp.com/Automoviles/listaAutomovil',true);
    xmlhttp.send();//No le mando
}