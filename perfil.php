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
    <title>Perfil - Rz Automóviles</title>
</head>
<body onload="formularioRz()">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="../Backend/img/Logo_Blanco.png" width="35" height="35" class="d-inline-block align-top" alt="No se encontro logo">
                    Rz Automóviles
                </a>
                <!--Imagen de Perfil-->
                <!--<img class="fotoPerfil" id="fotoPerfil">-->
                    <img src="../Backend/img/GabrielRzecznik.jpg" class="d-inline-block align-top fotoPerfil" alt="No se encontro foto de perfil">
            </nav>
        </div>
        <div class="row">
            <div class="col-md-8 colorear1">
                <br>
                <div class="row">
                    <div class="col-md-3 centrado">
                        <!--Foto-->
                        <img src="../Backend/img/GabrielRzecznik.jpg" class="d-inline-block align-top fotoPerfil2" alt="No se encontro logo">
                        <br><br>
                    </div>
                    <div class="col-md-9">
                        <!--Usuario-->
                        <h2 class="texto" id="mostrarUsuario">Gabriel Rzecznik</h2>
                        <i class="bi bi-envelope-fill"></i>
                        <span class="texto" id="mostrarCorreo">Gabriel@gmail.com</span>
                        <br>
                        <i class="bi bi-geo-alt-fill"></i>
                        <span class="texto" id="mostrarGeo">Buenos Aires</span>
                    </div>
                </div>
                <br>
                <input type="file" id="archivo">
                <input class="derecha" type="submit" value="Cambiar foto">
                <a href="#">Atrás</a>
            </div>
            <div class="col-md-4 colorear3">
            </div>
        </div>
    </div>
    <script src="js/js.js"></script>
</body>
</html>