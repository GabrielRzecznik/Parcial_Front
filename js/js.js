//Metodo Loud
function formularioRz(){
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var boton = document.getElementById("boton");
    
    usuario.focus();

    const enter = (e) => {
        switch (e.target.name) {
            case 'usuario':
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

    usuario.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
    boton.addEventListener('click', enter);
}


//Validación de Campos
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z\_\-\ ]{4,24}$/, //entre 4 y 24 caracteres, permitido caracteres y _ - solamente
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])\S{8,16}$/ //entre 8 y 16 caracteres, al menos un dígito, almenos una mayúscula
};

const campos = {
    usuario: false,
    contraseña: false
};

const validarFormulario = (e) => {
   switch (e.target.name) {//identifica el nombre del input manipulado
        case 'usuario':
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById('iconoU').classList.add('validado');
                document.querySelector('#iconoU').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoU').classList.add('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUs').classList.remove('alertaError');
                //Validar usuario
                campos['usuario'] = true;
            }else{
                document.getElementById('iconoU').classList.add('error');
                document.getElementById('iconoU').classList.remove('validado');
                document.querySelector('#iconoU').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoU').classList.remove('bi-check-circle-fill');
                //Mensaje de error usuario
                document.getElementById('alertUs').classList.add('alertaError');
                campos['usuario'] = false;
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

