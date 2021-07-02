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
    <link rel="icon" href="../Backend/img/icono.ico">
    <title>Login - Rz Automóviles</title>
</head>
<body onload="formularioRz()">
    <div class="container espaciado">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 colorear1">
                <h3 class="titulo">Crear Cuenta</h3>
                <br>
                <form onsubmit="event.preventDefault()" action="#" method="post" id="formulario">
                    <!--Usuario-->
                    <span class="texto">Usuario </span><i class="bi bi-x-circle-fill iconos validado" id="iconoU"></i><span class="mensajeC"> [A-Z] y [0-9]</span>
                    <br>
                    <input type="text" class="form-control inputs" name="usuario" id="usuario">
                    <br>
                    <!--Contraseña-->
                    <span class="texto">Contraseña </span><i class="bi bi-x-circle-fill iconos validado" id="iconoC"></i><span class="mensajeC"> [A-Z] y [0-9]</span>
                    <br>
                    <input type="password" class="form-control inputs" name="contraseña" id="contraseña">
                    <br>
                    <!--Confirma Contraseña-->
                    <span class="texto">Confirma Contraseña </span><i class="bi bi-x-circle-fill iconos validado" id="iconoCC"></i><span class="mensajeC"> [A-Z] y [0-9]</span>
                    <br>
                    <input type="password" class="form-control inputs" name="confirmaContraseña" id="confirmaContraseña">
                    <br>
                    <!--Alerta Usuario-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertUs">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Usuario:</strong>
                        El usuario debe tener de 4 a 24 caracteres.
                        <br>Permite espacio, guion medio y bajo.
                        <br>No permite caracteres especiales ni digitos.
                    </div>
                    <!--Alerta Contraseña-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCont">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Contraseña:</strong>
                        La contraseña debe tener de 8 a 16 caracteres.
                        <br>Debe contener al menos una "mayuscula" y un "digito".
                    </div>
                    <!--Alerta Confirma Contraseña-->
                    <div class="alert alert-warning alert-dismissible fade show alerta" role="alert" id="alertCont">
                        <i class="bi bi-info-circle-fill"></i>
                        <strong>Contraseña:</strong>
                        La contraseña debe tener de 8 a 16 caracteres.
                        <br>Debe contener al menos una "mayuscula" y un "digito".
                    </div>
                </form> 
            </div>
            <div class="col-md-4 colorear1">
                <div class="centrado"> 
                    <button type="submit" class="boton btn btn-secondary" name="boton" id="boton">
                        <span id="loguearse">Crear Usuario</span>
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
            <div class="espaciado"></div>
        </div>
    </div>
    <script src="js/js.js"></script>
</body>
</html>