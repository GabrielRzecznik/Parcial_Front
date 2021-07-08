//Metodo Loud
function formularioRegistroRz(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    var confirmeContraseña = document.getElementById("confirmeContraseña");
    var provincia = document.getElementById("provincia");
    var edad = document.getElementById("edad");
    var foto = document.getElementById("foto");
    var tyc = document.getElementById("tyc");
    var boton = document.getElementById("boton");
    
    nombre.focus();

    //Focus por tecla enter
    const enter = (e) => {
        switch (e.target.name) {
            case 'nombre':
                if (e.keyCode === 13) {
                    apellido.focus();
                }
                break;
            case 'apellido':
                if (e.keyCode === 13) {
                    correo.focus();
                }
                break;  
            case 'correo':
                if (e.keyCode === 13) {
                    contraseña.focus();
                }
                break;    
            case 'contraseña':
                if (e.keyCode === 13) {
                    boton.focus();
                    confirmeContraseña.focus();
                }
                break;
            case 'confirmeContraseña':
                if (e.keyCode === 13) {
                    boton.focus();
                    provincia.focus();
                }
                break;
            case 'boton':
                break;
            default:
                enviarFormulario();
                break;
        }
    };

    nombre.addEventListener('keypress', enter);
    apellido.addEventListener('keypress', enter);
    correo.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
    confirmeContraseña.addEventListener('keypress', enter);
    boton.addEventListener('click', enter);
}

//Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-Z]{4,24}$/, //entre 4 y 24 caracteres
    apellido: /^[a-zA-Z]{4,24}$/, //entre 4 y 24 caracteres
    correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //TESTEAR
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/, //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
    confirmeContraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/ //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    contraseña: false,
    confirmeContraseña: false,
    provincia: false,
    edad: false,
    foto: false,
    tyc: false,
};

const validarFormulario = (e) => {
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
        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('iconoCorreo').classList.add('validado');
                document.querySelector('#iconoCorreo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.add('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.remove('alertaError');
                //Validar correo
                campos['correo'] = true;
            }else{
                document.getElementById('iconoCorreo').classList.add('error');
                document.getElementById('iconoCorreo').classList.remove('validado');
                document.querySelector('#iconoCorreo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoCorreo').classList.remove('bi-check-circle-fill');
                //Mensaje de error correo
                document.getElementById('alertCorreo').classList.add('alertaError');
                campos['correo'] = false;
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

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});


//Envia el formulario - Siempre en cuando no esten vacios los campos
function enviarFormulario() {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', (e) => {
        const usuarioValue = usuario.value.trim();
        const contraseñaValue = contraseña.value.trim();
    
        if (usuarioValue === "") {
            alert("Usuario vacio");
        }if (contraseñaValue === "") {
            alert("Contraseña vacia")
        }
        
        e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
       if (campos.usuario && campos.contraseña) {
           //Iniciar sessión

           //Cargando
           document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
           document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
           
            //Enviar
            var Datos = new FormData();
            Datos.append("usu",("usuario").value);
            Datos.append("con",("contraseña").value);

           //Desmarcar todos los inputs
           document.querySelectorAll('#iconoU').forEach((icono) => {
            icono.classList.remove('error');
           });
           document.querySelectorAll('#iconoC').forEach((icono) => {
            icono.classList.remove('error');
           });
       }else{
           alert("No se pudo iniciar sesión");
       }
    
    }); 
}

