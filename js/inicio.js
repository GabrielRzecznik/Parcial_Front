//Metodo Loud
window.addEventListener('load',load);

function load(){
    mostrarTablaAutomoviles();
}

//Simula ser el usuario
var usu = "rzecznik@gmail.com";
var cont = "Parcial2021";

//#region Pasar El Foco
var patente = document.getElementById("patente");
var marca = document.getElementById("marca");
var modelo = document.getElementById("modelo");
var version = document.getElementById("version");
var color = document.getElementById("color");
var estado = document.getElementById("estado");
var cambio = document.getElementById("cambio");
var valor = document.getElementById("valor");
var kilometraje = document.getElementById("kilometraje");
var año = document.getElementById("año");
var publicar = document.getElementById("publicar");

//Focus por tecla enter
const enter = (e) => {
    switch (e.target.name) {
        case 'patente':
            alert(patente.value);
            if (e.keyCode === 13) {
                e.preventDefault();
                marca.focus();
            }
            break;
        case 'marca':
            if (e.keyCode === 13) {
                e.preventDefault();
                modelo.focus();
            }
            break;  
        case 'modelo':
            if (e.keyCode === 13) {
                e.preventDefault();
                version.focus();
            }
            break;    
        case 'version':
            if (e.keyCode === 13) {
                e.preventDefault();
                color.focus();
            }
            break;
        case 'color':
            if (e.keyCode === 13) {
                e.preventDefault();
                estado.focus();
            }
            break;
        case 'estado':
            if (e.keyCode === 13) {
                e.preventDefault();
                cambio.focus();
            }
            break;
        case 'valor':
            if (e.keyCode === 13) {
                e.preventDefault();
                kilometraje.focus();
            }
            break;
        case 'kilometraje':
            if (e.keyCode === 13) {
                e.preventDefault();
                año.focus();
            }
            break;
        case 'año':
            if (e.keyCode === 13) {
                e.preventDefault();
                publicar.focus();
            }
            break;
        default:
            enviarPublicacion();
            break;
    }
};

patente.addEventListener('keypress', enter);
marca.addEventListener('keypress', enter);
modelo.addEventListener('keypress', enter);
version.addEventListener('keypress', enter);
color.addEventListener('keypress', enter);
estado.addEventListener('keypress', enter);
cambio.addEventListener('keypress', enter);
valor.addEventListener('keypress', enter);
kilometraje.addEventListener('keypress', enter);
año.addEventListener('keypress', enter);
publicar.addEventListener('click', enter);

const inputs = document.querySelectorAll('#formAutomovil input');

const expresiones = {
    patente: /^(?=\w*\d+)[a-zA-Z0-9\ ]{7,9}$/,
    marca: /^[a-zA-Z]{4,24}$/,
    modelo: /^[a-zA-Z]{4,24}$/,
    version: /^[a-zA-Z]{4,24}$/,
    color: /^[a-zA-Z]{4,24}$/,
    estado: /^[a-zA-Z]{4,24}$/,
    valor: /^[a-zA-Z]{4,24}$/,
    kilometraje: /^[a-zA-Z]{4,24}$/,
    año: /^[a-zA-Z]{4,24}$/,
};

const campos = {
    patente: false,
    marca: false,
    modelo: false,
    version: false,
    color: false,
    estado: false,
    cambio: false,
    combustible: false,
    valor: false,
    kilometraje: false,
    año: false
};

const validarFormulario = (e) => {
    switch (e.target.name) {//identifica el nombre del input manipulado
        case 'patente':
            alert(e.target.name.value);
            if (expresiones.patente.test(e.target.value)) {
                document.getElementById('iconoPatente').classList.add('validado');
                document.querySelector('#iconoPatente').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoPatente').classList.add('bi-check-circle-fill');
                //Mensaje de error patente
                document.getElementById('alertPatente').classList.remove('alertaError');
                //Validar patente
                campos['patente'] = true;
            }else{
                document.getElementById('iconoPatente').classList.add('error');
                document.getElementById('iconoPatente').classList.remove('validado');
                document.querySelector('#iconoPatente').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoPatente').classList.remove('bi-check-circle-fill');
                //Mensaje de error patente
                document.getElementById('alertPatente').classList.add('alertaError');
                campos['patente'] = false;
            }
            break;
        case 'marca':
            if (expresiones.marca.test(e.target.value)) {
                document.getElementById('iconoMarca').classList.add('validado');
                document.querySelector('#iconoMarca').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoMarca').classList.add('bi-check-circle-fill');
                //Mensaje de error marca
                document.getElementById('alertMarca').classList.remove('alertaError');
                //Validar marca
                campos['marca'] = true;
            }else{
                document.getElementById('iconoMarca').classList.add('error');
                document.getElementById('iconoMarca').classList.remove('validado');
                document.querySelector('#iconoMarca').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoMarca').classList.remove('bi-check-circle-fill');
                //Mensaje de error marca
                document.getElementById('alertMarca').classList.add('alertaError');
                campos['marca'] = false;
            }
            break;
        case 'modelo':
            if (expresiones.modelo.test(e.target.value)) {
                document.getElementById('iconoModelo').classList.add('validado');
                document.querySelector('#iconoModelo').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoModelo').classList.add('bi-check-circle-fill');
                //Mensaje de error modelo
                document.getElementById('alertModelo').classList.remove('alertaError');
                //Validar modelo
                campos['modelo'] = true;
            }else{
                document.getElementById('iconoModelo').classList.add('error');
                document.getElementById('iconoModelo').classList.remove('validado');
                document.querySelector('#iconoModelo').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoModelo').classList.remove('bi-check-circle-fill');
                //Mensaje de error modelo
                document.getElementById('alertModelo').classList.add('alertaError');
                campos['modelo'] = false;
            }
            break;
        case 'version':
            if (expresiones.version.test(e.target.value)) {
                document.getElementById('iconoVersion').classList.add('validado');
                document.querySelector('#iconoVersion').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoVersion').classList.add('bi-check-circle-fill');
                //Mensaje de error version
                document.getElementById('alertVersion').classList.remove('alertaError');
                //Validar version
                campos['version'] = true;
            }else{
                document.getElementById('iconoVersion').classList.add('error');
                document.getElementById('iconoVersion').classList.remove('validado');
                document.querySelector('#iconoVersion').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoVersion').classList.remove('bi-check-circle-fill');
                //Mensaje de error version
                document.getElementById('alertVersion').classList.add('alertaError');
                campos['version'] = false;
            }
            break;
        case 'color':
            if (expresiones.color.test(e.target.value)) {
                document.getElementById('iconoColor').classList.add('validado');
                document.querySelector('#iconoColor').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoColor').classList.add('bi-check-circle-fill');
                //Mensaje de error color
                document.getElementById('alertColor').classList.remove('alertaError');
                //Validar color
                campos['color'] = true;
            }else{
                document.getElementById('iconoColor').classList.add('error');
                document.getElementById('iconoColor').classList.remove('validado');
                document.querySelector('#iconoColor').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoColor').classList.remove('bi-check-circle-fill');
                //Mensaje de error color
                document.getElementById('alertColor').classList.add('alertaError');
                campos['color'] = false;
            }
            break;
        case 'estado':
            if (expresiones.estado.test(e.target.value)) {
                document.getElementById('iconoEstado').classList.add('validado');
                document.querySelector('#iconoEstado').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoEstado').classList.add('bi-check-circle-fill');
                //Mensaje de error estado
                document.getElementById('alertEstado').classList.remove('alertaError');
                //Validar estado
                campos['estado'] = true;
            }else{
                document.getElementById('iconoEstado').classList.add('error');
                document.getElementById('iconoEstado').classList.remove('validado');
                document.querySelector('#iconoEstado').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoEstado').classList.remove('bi-check-circle-fill');
                //Mensaje de error estado
                document.getElementById('alertEstado').classList.add('alertaError');
                campos['estado'] = false;
            }
            break;
        case 'valor':
            if (expresiones.valor.test(e.target.value)) {
                document.getElementById('iconoValor').classList.add('validado');
                document.querySelector('#iconoValor').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoValor').classList.add('bi-check-circle-fill');
                //Mensaje de error valor
                document.getElementById('alertValor').classList.remove('alertaError');
                //Validar valor
                campos['valor'] = true;
            }else{
                document.getElementById('iconoValor').classList.add('error');
                document.getElementById('iconoValor').classList.remove('validado');
                document.querySelector('#iconoValor').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoValor').classList.remove('bi-check-circle-fill');
                //Mensaje de error valor
                document.getElementById('alertValor').classList.add('alertaError');
                campos['valor'] = false;
            }
            break;
        case 'kilometraje':
            if (expresiones.kilometraje.test(e.target.value)) {
                document.getElementById('iconoKilometraje').classList.add('validado');
                document.querySelector('#iconoKilometraje').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoKilometraje').classList.add('bi-check-circle-fill');
                //Mensaje de error kilometraje
                document.getElementById('alertKilometraje').classList.remove('alertaError');
                //Validar kilometraje
                campos['kilometraje'] = true;
            }else{
                document.getElementById('iconoKilometraje').classList.add('error');
                document.getElementById('iconoKilometraje').classList.remove('validado');
                document.querySelector('#iconoKilometraje').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoKilometraje').classList.remove('bi-check-circle-fill');
                //Mensaje de error kilometraje
                document.getElementById('alertKilometraje').classList.add('alertaError');
                campos['kilometraje'] = false;
            }
            break;   
        case 'año':
            if (expresiones.año.test(e.target.value)) {
                document.getElementById('iconoAño').classList.add('validado');
                document.querySelector('#iconoAño').classList.remove('bi-x-circle-fill');
                document.querySelector('#iconoAño').classList.add('bi-check-circle-fill');
                //Mensaje de error año
                document.getElementById('alertAño').classList.remove('alertaError');
                //Validar año
                campos['año'] = true;
            }else{
                document.getElementById('iconoAño').classList.add('error');
                document.getElementById('iconoAño').classList.remove('validado');
                document.querySelector('#iconoAño').classList.add('bi-x-circle-fill');
                document.querySelector('#iconoAño').classList.remove('bi-check-circle-fill');
                //Mensaje de error año
                document.getElementById('alertAño').classList.add('alertaError');
                campos['año'] = false;
            }
            break;
        default:
        break;
    } 
}

//Validar Cambio
document.getElementById("cambio").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.querySelector('#iconoCambio').classList.remove('signo');
        document.querySelector('#iconoCambio').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoCambio').classList.add('error');
        document.getElementById('iconoCambio').classList.add('validado');
        document.querySelector('#iconoCambio').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoCambio').classList.add('bi-check-circle-fill');
        //Mensaje de error cambio
        document.getElementById('alertCambio').classList.remove('alertaError');
        //Validar cambio
        campos['cambio'] = true;
    }else{
        document.querySelector('#iconoCambio').classList.remove('signo');
        document.getElementById('iconoCambio').classList.add('iconos', 'validado');
        document.querySelector('#iconoCambio').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoCambio').classList.add('error');
        document.getElementById('iconoCambio').classList.remove('validado');
        document.querySelector('#iconoCambio').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoCambio').classList.remove('bi-check-circle-fill');
        //Mensaje de error cambio
        document.getElementById('alertCambio').classList.add('alertaError');
        campos['cambio'] = false;
    }
});

if (cambio.value == 0) {
    document.querySelector('#iconoCambio').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoCambio').classList.add('signo');
    document.querySelector('#iconoCambio').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoCambio').classList.remove('iconos', 'validado');
    campos['cambio'] = false;
}

//Validar Combustible
document.getElementById("combustible").addEventListener('change', (event) => {
    if (event.target.value != 0) {
        document.querySelector('#iconoCombustible').classList.remove('signo');
        document.querySelector('#iconoCombustible').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoCombustible').classList.add('error');
        document.getElementById('iconoCombustible').classList.add('validado');
        document.querySelector('#iconoCombustible').classList.remove('bi-x-circle-fill');
        document.querySelector('#iconoCombustible').classList.add('bi-check-circle-fill');
        //Mensaje de error combustible
        document.getElementById('alertCombustible').classList.remove('alertaError');
        //Validar combustible
        campos['combustible'] = true;
    }else{
        document.querySelector('#iconoCombustible').classList.remove('signo');
        document.getElementById('iconoCombustible').classList.add('iconos', 'validado');
        document.querySelector('#iconoCombustible').classList.remove('bi-exclamation-circle-fill');
        document.getElementById('iconoCombustible').classList.add('error');
        document.getElementById('iconoCombustible').classList.remove('validado');
        document.querySelector('#iconoCombustible').classList.add('bi-x-circle-fill');
        document.querySelector('#iconoCombustible').classList.remove('bi-check-circle-fill');
        //Mensaje de error combustible
        document.getElementById('alertCombustible').classList.add('alertaError');
        campos['combustible'] = false;
    }
});

if (combustible.value == 0) {
    document.querySelector('#iconoCombustible').classList.remove('bi-x-circle-fill');
    document.querySelector('#iconoCombustible').classList.add('signo');
    document.querySelector('#iconoCombustible').classList.add('bi-exclamation-circle-fill');
    document.getElementById('iconoCombustible').classList.remove('iconos', 'validado');
    campos['combustible'] = false;
}

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);//cuando levanto la tecla se ejecuta un codigo
    input.addEventListener('blur' , validarFormulario);//cuando me salgo y preciono fuera del input
});
//#endregion

//#region Envia Formulario
function enviarPublicacion() {
    const formulario = document.getElementById('formularioRegistrarAutomovil');
    
    formulario.addEventListener('submit', (e) => {
        const patenteValue = patente.value.trim();
        const marcaValue = marca.value.trim();
        const modeloValue = modelo.value.trim();
        const versionValue = version.value.trim();
        const colorValue = color.value.trim();
        const estadoValue = estado.value.trim();
        const valorValue = valor.value.trim();
        const kilometrajeValue = kilometraje.value.trim();
        const añoValue = año.value.trim();
        
        if (patenteValue === "") {
            alert("Patente vacia");
        }if (marcaValue === "") {
            alert("Marca vacia");
        }if (modeloValue === "") {
            alert("Modelo vacio");
        }if (versionValue === "") {
            alert("Versión vacio");
        }if (colorValue === "") {
            alert("Color vacio");
        }if (estadoValue === "") {
            alert("Estado vacio");
        }
        
        //Cambio
        if (cambio.value == 0) {
            alert("Seleccione un tipo de cambio");
        }

        //Combustible
        if (combustible.value == 0) {
            alert("Seleccione un tipo de combustible");
        }
        
        if (valorValue === "") {
            alert("Valor vacio");
        }if (kilometrajeValue === "") {
            alert("Kilometraje vacio");
        }if (añoValue === "") {
            alert("Año vacio");
        }

        e.preventDefault();//evita que se envien los datos y se refresque la pagina
    
       if (campos.patente && campos.marca && campos.modelo && campos.version && campos.color && campos.estado && campos.cambio && campos.combustible && campos.valor && campos.kilometraje && campos.año) {
           //Enviar AJAX
           //buscarUsuario(formulario);

           //Cargando
           //document.querySelector('#cargando').classList.remove('invisible');//Logo de carga
           //document.querySelector('#loguearse').classList.add('invisible');//Esconde el texto del boton
       }else{
           alert("No se pudo iniciar sesión");
       }
    
    }); 
}
//#endregion