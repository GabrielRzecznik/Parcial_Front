<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Registro - Rz Automóviles</title>
</head>
<body onload="formularioRzR()">
    <div class="container espaciado">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 colorear1">
                <h3 class="titulo">Crear Cuenta</h3>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formularioRegistro">
                    <!--Nombre-->
                    <span class="texto">Nombre </span><i class="bi bi-x-circle-fill iconos validado" id="iconoNombre"></i><span class="mensajeNombre"></span>
                    <br>
                    <input type="text" class="form-control inputs" name="nombre" id="nombre">
                    <br>
                    <!--Apellido-->
                    <span class="texto">Apellido </span><i class="bi bi-x-circle-fill iconos validado" id="iconoApellido"></i><span class="mensajeApellido"></span>
                    <br>
                    <input type="text" class="form-control inputs" name="apellido" id="apellido">
                    <br>
                    <!--Correo-->
                    <span class="texto">Correo </span><i class="bi bi-x-circle-fill iconos validado" id="iconoCorreo"></i><span class="mensajeCorreo"></span>
                    <br>
                    <input type="text" class="form-control inputs" name="correo" id="correo">
                    <br>
                    <!--Contraseña-->
                    <span class="texto">Contraseña </span><i class="bi bi-x-circle-fill iconos validado" id="iconoContraseña"></i><span class="mensajeContraseña"></span>
                    <br>
                    <input type="password" class="form-control inputs" name="contraseña" id="contraseña">
                    <br>
                    <!--Confirme Contraseña-->
                    <span class="texto">Confirme Contraseña </span><i class="bi bi-x-circle-fill iconos validado" id="iconoConfirmeContraseña"></i><span class="mensajeConfirmeContraseña"></span>
                    <br>
                    <input type="password" class="form-control inputs" name="confirmeContraseña" id="confirmeContraseña">
                    <br>
                    <!--Alerta Nombre-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertNombre">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Nombre:</strong>
                        El nombre debe tener de 4 a 24 caracteres.
                        <br>Solamente admite letras en "mayuscula" y "minuscula".
                        <br>No permite caracteres especiales ni digitos.
                    </div>
                    <!--Alerta Apellido-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertApellido">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Apellido:</strong>
                        El apellido debe tener de 4 a 24 caracteres.
                        <br>Solamente admite letras en "mayuscula" y "minuscula".
                        <br>No permite caracteres especiales ni digitos.
                    </div>
                    <!--Alerta Correo-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCorreo">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Correo:</strong>
                        El correo ingresado no corresponde
                        <br>a una dirección valida.
                        <br>Solamente admite letras en "minuscula".<!--Corregir con java-->
                    </div>
                    <!--Alerta Contraseña-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertContraseña">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Contraseña:</strong>
                        La contraseña debe tener de 8 a 16 caracteres.
                        <br>Debe contener al menos una "mayuscula" y un "digito".
                    </div>
                    <!--Alerta Confirma Contraseña-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertConfirmeContraseña">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Confirmación de Contraseña:</strong>
                        Las contraseña no coinciden.
                    </div>
                </form> 
            </div>
            <div class="col-md-4 colorear1">
                <h3 class="texto">Otro datos</h3>
                <br>
                <!--Provincia-->
                <span class="texto">Provincia </span><i class="bi bi-x-circle-fill iconos validado" id="iconoProvincia"></i>
                    <br>
                    <select class="form-control" name="provincia" id="provincia">
                        <option value="0" selected>Seleccione su provincia...</option>
                        <option value="1">Buenos Aires</option>
                        <option value="2">Catamarca</option>
                        <option value="3">Chaco</option>
                        <option value="4">Chubut</option>
                        <option value="5">Córdoba</option>
                        <option value="6">Corrientes</option>
                        <option value="7">Entre Ríos</option>
                        <option value="8">Formosa</option>
                        <option value="9">Jujuy</option>
                        <option value="10">La Pampa</option>
                        <option value="11">La Rioja</option>
                        <option value="12">Mendoza</option>
                        <option value="13">Misiones</option>
                        <option value="14">Neuquén</option>
                        <option value="15">Río Negro</option>
                        <option value="16">Salta</option>
                        <option value="17">San Juan</option>
                        <option value="18">San Luis</option>
                        <option value="19">Santa Cruz</option>
                        <option value="20">Santa Fe</option>
                        <option value="21">Santiago del Estero</option>
                        <option value="22">Tierra del Fuego</option>
                        <option value="23">Tucumán</option>
                    </select>
                    <br>
                    <!--Edad-->
                    <span class="texto">Edad </span><i class="bi bi-x-circle-fill iconos validado" id="iconoEdad"></i><span class="mensajeEdad"></span>
                    <br>
                    <select class="form-control" name="edad" id="edad">
                        <option value="0" selected>Seleccione su edad...</option>
                        <option value="1">> 16 años</option>
                        <option value="2">≤ 16 años o ≥ 17 años</option>
                        <option value="3">≤ 18 años</option>
                    </select>
                    <br>
                    <!--Foto-->
                    <span class="texto">Foto de Perfil </span><i class="bi bi-x-circle-fill iconos validado" id="iconoCC"></i><span class="mensajeC"></span>
                    <br>
                    <input type="file" class="form-control inputs" name="fotoPerfil" id="fotoPerfil" value="fotoPerfil">
                    <br>
                    <!--Terminos y Condiciones-->
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tyc">
                        <span class="texto">Aceptar terminos y condiciones</span><i class="bi bi-x-circle-fill iconos validado" id="iconoCC"></i><span class="mensajeC"></span>
                    </div>
                    <br>
                    <!--Alerta Provincia-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertProvincia">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Provincia:</strong>
                        La opción seleccionada no es
                        <br>valida, seleccione una provincia!
                    </div>
                    <!--Alerta Edad-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertEdad">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Edad:</strong>
                        La opción seleccionada no es
                        <br>valida, seleccione una edad!
                    </div>
                    <div class="alert alert-danger alert-dismissible fade show alerta" role="alert" id="alertEdad2">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Edad:</strong>
                        Debes ser mayor de 16 años para poder
                        <br>registrarte y utilizar nuestros servicios.
                    </div>
                    <div class="centrado"> 
                    <button type="submit" class="boton btn btn-secondary" name="boton" id="boton">
                        <span id="registrarse">Crear Usuario</span>
                        <span class="invisible" id="cargando">
                            <div class="sk-cube-grid">
                                <div class="sk-cube sk-cube1"></div>
                                <div class="sk-cube sk-cube2"></div>
                                <div class="sk-cube sk-cube3"></div>
                                <div class="sk-cube sk-cube4"></div>
                                <div class="sk-cube sk-cube5"></div>
                                <div class="sk-cube sk-cube6"></div>
                                <div class="sk-cube sk-cube7"></div>
                                <div class="sk-cube sk-cube8"></div>
                                <div class="sk-cube sk-cube9"></div>
                            </div>
                        </span>
                    </button>
                    <br><br>
                    <a class="registro" href="index.php">Volver Atrás</a>    
                </div>
            </div>
            <div class="col-md-2"></div>
            <div class="espaciado2"></div>
        </div>
    </div>
    <script src="js/registro.js"></script>
</body>
</html>