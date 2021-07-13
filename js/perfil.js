//#region Metodo Load
window.addEventListener('load',load);

function load(){
    datosPerfil();
    validarFormularioEdicionUsuario();
}
//#endregion

//Usuario
var usuario = "rzecznik@gmail.com";
var contraseña = "Parcial2021";

function datosPerfil(){
    mostrarDatosUsuario(usuario, contraseña);
}

//Eliminar Usuario
var botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener('click', eliminarUsuario);

//Pegar tablita
function eliminarUsuario(){
    var formJSON=JSON.stringify({"correo":usuario, "contraseña":contraseña});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("Usuario eliminado!");
                window.location.href = "https://parcial-edi-front.herokuapp.com/index.html";
            }else{
                alert("No se pudo eliminar el usuario!");
            }   
        }
    }
    xmlhttp.open("DELETE",'https://parcial-edi-backend.herokuapp.com/Usuarios/eliminarUsuario',true);
    xmlhttp.send(formJSON);
}

//Editar Usuario
var botonEditar = document.getElementById("editar");
botonEditar.addEventListener('click', editarUsuario);

//Pegar tablita
function editarUsuario(){
    var formJSON=JSON.stringify({"correo":usuario, "contraseña":contraseña});
    console.log(formJSON);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {//Cuando hay cambio de estado disparo la function
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {//Volvio respuesta
            if (xmlhttp.status == 200) {//Volvio Bien
                alert("Usuario eliminado!");
                window.location.href = "https://parcial-edi-front.herokuapp.com/index.html";
            }else{
                alert("No se pudo eliminar el usuario!");
            }   
        }
    }
    xmlhttp.open("DELETE",'https://parcial-edi-backend.herokuapp.com/Usuarios/eliminarUsuario',true);
    xmlhttp.send(formJSON);
}

//#region Validación de Campos - Editar Usuario
function validarFormularioEdicionUsuario() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var contraseña = document.getElementById("contraseña");
    var confirmeContraseña = document.getElementById("confirmeContraseña");
    var provincia = document.getElementById("provincia");

    nombre.focus();

    //Focus por tecla enter
    const enter = (e) => {
        switch (e.target.name) {
            case 'nombre':
                if (e.keyCode === 13) {
                    e.preventDefault();
                    apellido.focus();
                }
                break;
            case 'apellido':
                if (e.keyCode === 13) {
                    e.preventDefault();
                    contraseña.focus();
                }
                break;    
            case 'contraseña':
                if (e.keyCode === 13) {
                    e.preventDefault();
                    confirmeContraseña.focus();
                }
                break;
            case 'confirmeContraseña':
                if (e.keyCode === 13) {
                    provincia.focus();
                }
                break;
            default:
                break;
        }
    };

    nombre.addEventListener('keypress', enter);
    apellido.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
    confirmeContraseña.addEventListener('keypress', enter);

    const inputs = document.querySelectorAll('#editarPerfil input');

    const expresiones = {
        nombre: /^[a-zA-Z]{4,24}$/, //entre 4 y 24 caracteres
        apellido: /^[a-zA-Z\ \ü\ö]{4,24}$/, //entre 4 y 24 caracteres
        contraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/, //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
        confirmeContraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/, //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
    };

    const campos = {
        nombre: false,
        apellido: false,
        correo: false,
        contraseña: false,
        confirmeContraseña: false,
        provincia: false,
        edad: false,
        tyc: false
    };

    const validarFormularioEdicionUsuario = (e) => {
    switch (e.target.name) {
            case 'nombre':
                if (expresiones.nombre.test(e.target.value)) {
                    document.getElementById('iconoNombre').classList.add('validado');
                    document.querySelector('#iconoNombre').classList.remove('bi-x-circle-fill');
                    document.querySelector('#iconoNombre').classList.add('bi-check-circle-fill');
                    //Mensaje de error nombre
                    document.getElementById('alertNombre').classList.remove('alertaError');
                    //Validar nombre
                    campos['nombre'] = true;
                }else{
                    document.getElementById('iconoNombre').classList.add('error');
                    document.getElementById('iconoNombre').classList.remove('validado');
                    document.querySelector('#iconoNombre').classList.add('bi-x-circle-fill');
                    document.querySelector('#iconoNombre').classList.remove('bi-check-circle-fill');
                    //Mensaje de error nombre
                    document.getElementById('alertNombre').classList.add('alertaError');
                    campos['nombre'] = false;
                }
                break;
            case 'apellido':
                if (expresiones.apellido.test(e.target.value)) {
                    document.getElementById('iconoApellido').classList.add('validado');
                    document.querySelector('#iconoApellido').classList.remove('bi-x-circle-fill');
                    document.querySelector('#iconoApellido').classList.add('bi-check-circle-fill');
                    //Mensaje de error apellido
                    document.getElementById('alertApellido').classList.remove('alertaError');
                    //Validar apellido
                    campos['apellido'] = true;
                }else{
                    document.getElementById('iconoApellido').classList.add('error');
                    document.getElementById('iconoApellido').classList.remove('validado');
                    document.querySelector('#iconoApellido').classList.add('bi-x-circle-fill');
                    document.querySelector('#iconoApellido').classList.remove('bi-check-circle-fill');
                    //Mensaje de error apellido
                    document.getElementById('alertApellido').classList.add('alertaError');
                    campos['apellido'] = false;
                }
                break;
            case 'contraseña':
                if (expresiones.contraseña.test(e.target.value)) {
                    document.getElementById('iconoContraseña').classList.add('validado');
                    document.querySelector('#iconoContraseña').classList.remove('bi-x-circle-fill');
                    document.querySelector('#iconoContraseña').classList.add('bi-check-circle-fill');
                    //Mensaje de error contraseña
                    document.getElementById('alertContraseña').classList.remove('alertaError');
                    //Validar contraseña
                    campos['contraseña'] = true;
                }else{
                    document.getElementById('iconoContraseña').classList.add('error');
                    document.getElementById('iconoContraseña').classList.remove('validado');
                    document.querySelector('#iconoContraseña').classList.add('bi-x-circle-fill');
                    document.querySelector('#iconoContraseña').classList.remove('bi-check-circle-fill');
                    //Mensaje de error contraseña
                    document.getElementById('alertContraseña').classList.add('alertaError');
                    campos['contraseña'] = false;
                }
                break;
            case 'confirmeContraseña':
                if ((expresiones.confirmeContraseña.test(e.target.value)) && (confirmeContraseña.value == contraseña.value)) {
                    document.getElementById('iconoConfirmeContraseña').classList.add('validado');
                    document.querySelector('#iconoConfirmeContraseña').classList.remove('bi-x-circle-fill');
                    document.querySelector('#iconoConfirmeContraseña').classList.add('bi-check-circle-fill');
                    //Mensaje de error contraseña
                    document.getElementById('alertConfirmeContraseña').classList.remove('alertaError');
                    //Validar contraseña
                    campos['confirmeContraseña'] = true;
                }else{
                    document.getElementById('iconoConfirmeContraseña').classList.add('error');
                    document.getElementById('iconoConfirmeContraseña').classList.remove('validado');
                    document.querySelector('#iconoConfirmeContraseña').classList.add('bi-x-circle-fill');
                    document.querySelector('#iconoConfirmeContraseña').classList.remove('bi-check-circle-fill');
                    //Mensaje de error contraseña
                    document.getElementById('alertConfirmeContraseña').classList.add('alertaError');
                    campos['confirmeContraseña'] = false;
                }
                break;
            default:
            break;
    } 
    };

    //Validar Provincia
    document.getElementById("provincia").addEventListener('change', (event) => {
        if (event.target.value != 0) {
            document.querySelector('#iconoProvincia').classList.remove('signo');
            document.querySelector('#iconoProvincia').classList.remove('bi-exclamation-circle-fill');
            document.getElementById('iconoProvincia').classList.add('error');
            document.getElementById('iconoProvincia').classList.add('validado');
            document.querySelector('#iconoProvincia').classList.remove('bi-x-circle-fill');
            document.querySelector('#iconoProvincia').classList.add('bi-check-circle-fill');
            //Mensaje de error provincia
            document.getElementById('alertProvincia').classList.remove('alertaError');
            //Validar provincia
            campos['provincia'] = true;
        }else{
            document.querySelector('#iconoProvincia').classList.remove('signo');
            document.getElementById('iconoProvincia').classList.add('iconos', 'validado');
            document.querySelector('#iconoProvincia').classList.remove('bi-exclamation-circle-fill');
            document.getElementById('iconoProvincia').classList.add('error');
            document.getElementById('iconoProvincia').classList.remove('validado');
            document.querySelector('#iconoProvincia').classList.add('bi-x-circle-fill');
            document.querySelector('#iconoProvincia').classList.remove('bi-check-circle-fill');
            //Mensaje de error provincia
            document.getElementById('alertProvincia').classList.add('alertaError');
            campos['provincia'] = false;
        }
    });

    if (provincia.value == 0) {
        document.querySelector('#iconoProvincia').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoProvincia').classList.add('signo');
        document.querySelector('#iconoProvincia').classList.add('bi-exclamation-circle-fill');
        document.getElementById('iconoProvincia').classList.remove('iconos', 'validado');
        campos['provincia'] = false;
    }

    //Validar Edad
    document.getElementById("edad").addEventListener('change', (event) => {
        if (event.target.value > 1) {
            document.querySelector('#iconoEdad').classList.remove('signo');
            document.querySelector('#iconoEdad').classList.remove('bi-exclamation-circle-fill');
            document.getElementById('iconoEdad').classList.add('error');
            document.getElementById('iconoEdad').classList.add('validado');
            document.querySelector('#iconoEdad').classList.remove('bi-x-circle-fill');
            document.querySelector('#iconoEdad').classList.add('bi-check-circle-fill');
            //Mensaje de error edad
            document.getElementById('alertEdad2').classList.remove('alertaError');
            document.getElementById('alertEdad').classList.remove('alertaError');
            //Validar edad
            campos['edad'] = true;
        }else{
            document.querySelector('#iconoEdad').classList.remove('signo');
            document.getElementById('iconoEdad').classList.add('iconos', 'validado');
            document.querySelector('#iconoEdad').classList.remove('bi-exclamation-circle-fill');
            document.getElementById('iconoEdad').classList.add('error');
            document.getElementById('iconoEdad').classList.remove('validado');
            document.querySelector('#iconoEdad').classList.add('bi-x-circle-fill');
            document.querySelector('#iconoEdad').classList.remove('bi-check-circle-fill');
            //Mensaje de error edad
            if (event.target.value == 1) {
                document.getElementById('alertEdad').classList.remove('alertaError');
                document.getElementById('alertEdad2').classList.add('alertaError');
            }else{
                document.getElementById('alertEdad2').classList.remove('alertaError');
                document.getElementById('alertEdad').classList.add('alertaError');
            }
            campos['edad'] = false;
        }
    });

    if (edad.value == 0) {
        document.querySelector('#iconoEdad').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoEdad').classList.add('signo');
        document.querySelector('#iconoEdad').classList.add('bi-exclamation-circle-fill');
        document.getElementById('iconoEdad').classList.remove('iconos', 'validado');
        campos['edad'] = 2;
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup' , validarFormularioEdicionUsuario);//cuando levanto la tecla se ejecuta un codigo
        input.addEventListener('blur' , validarFormularioEdicionUsuario);//cuando me salgo y preciono fuera del input
    });
}

//#endregion