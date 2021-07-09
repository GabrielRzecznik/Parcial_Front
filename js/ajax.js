function peticionRegistrarUsuario(){
    var formData= new FormData(formularioRegistro); //Las keys corresponden al atributo name de cada elemento  
    var formJSON=JSON.stringify(Object.fromEntries(formData));
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            
        }else{
            
        }
    }
    xmlhttp.open("POST",'https://tp-final-pp-liv-ferz-backend.herokuapp.com/Usuarios/registro',true);
    xmlhttp.send(formJSON);
}