//Metodo Loud
function formularioRz(){
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    var boton = document.getElementById("boton");
    
    correo.focus();

    const enter = (e) => {
        switch (e.target.name) {
            case 'correo':
                if (e.keyCode === 13) {
                    contraseña.focus();
                }
                break;
            case 'contraseña':
                if (e.keyCode === 13) {
                    boton.focus();
                    enviarFormulario();
                }
                break;
            case 'boton':
                
                break;
            default:
                enviarFormulario();
                break;
        }
    };

    correo.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
    boton.addEventListener('click', enter);
}


//Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //entre 4 y 24 caracteres, permitido caracteres y _ - solamente
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/ //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    correo: false,
    contraseña: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {//identifica el nombre del input manipulado
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
                document.getElementById('iconoC').classList.add('validado');
                document.querySelector('#iconoC').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.add('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertCont').classList.remove('alertaError');
                //Validar contraseña
                campos['contraseña'] = true;
            }else{
                document.getElementById('iconoC').classList.add('error');
                document.getElementById('iconoC').classList.remove('validado');
                document.querySelector('#iconoC').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoC').classList.remove('bi-check-circle-fill');
                //Mensaje de error contraseña
                document.getElementById('alertCont').classList.add('alertaError');
                campos['contraseña'] = false;
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
        const correoValue = correo.value.trim();
        const contraseñaValue = contraseña.value.trim();
    
        if (correoValue === "") {
            alert("correo vacio");
        }if (contraseñaValue === "") {
            alert("Contraseña vacia")
        }
        
        e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
       if (campos.correo && campos.contraseña) {
           //Iniciar sessión

           //Cargando
           document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
           document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
           
            //Enviar
            var Datos = new FormData();
            Datos.append("cor",("correo").value);
            Datos.append("con",("contraseña").value);

           //Desmarcar todos los inputs
           document.querySelectorAll('#iconoCorreo').forEach((icono) => {
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

