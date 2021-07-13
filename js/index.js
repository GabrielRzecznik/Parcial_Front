//#region Metodo Load
window.addEventListener('load',load);

function load(){
    pasajeFoco();
}
//#endregion

//#region Pasar El Foco
function pasajeFoco(){
    var correo = document.getElementById("correo");
    var contraseña = document.getElementById("contraseña");
    
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
                    alert("Hola");
                    boton.focus();//Revisar
                }
                break;
            default:
                break;
        }
    };

    correo.addEventListener('keypress', enter);
    contraseña.addEventListener('keypress', enter);
}
//#endregion

//#region Validación de Campos
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
   } 
};
inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
function enviar() {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', (e) => {
        const correoValue = correo.value.trim();
        const contraseñaValue = contraseña.value.trim();
        
        e.preventDefault();//evita que se envien los datos y se refresque la pagina
        
        if (correoValue === "") {
            alert("Correo vacio");
        }if (contraseñaValue === "") {
            alert("Contraseña vacia")
        }
    
       if (campos.correo && campos.contraseña) {
           //Enviar AJAX
           buscarUsuario(formulario);
        
            //Iniciar sessión

           //Cargando
           document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
           document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
           
            //Enviar
            var Datos = new FormData();
            Datos.append("cor",("correo").value);
            Datos.append("con",("contraseña").value);
       }else{
           alert("No se pudo iniciar sesión");
       }
    
    }); 
}
//#endregion
