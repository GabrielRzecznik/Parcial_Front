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
    <title>Inicio - Rz Automóviles</title>
</head>
<body onload="inicio()">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="./img/Logo_Blanco.png" width="35" height="35" class="d-inline-block align-top" alt="No se encontro logo">
                    Rz Automóviles
                </a>
                <!--Imagen de Perfil-->
                <img src="./img/GabrielRzecznik.jpg" class="d-inline-block align-top fotoPerfil" alt="No se encontro foto de perfil">
            </nav>
        </div>
        <br>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover table-dark tableFixHead">
                    <thead>
                        <tr class="table-blue" id="nombre_columnas"></tr>
                    </thead>
                    <tbody id="con">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="js/ajaxAuto.js"></script>
    <script src="js/inicio.js"></script>
</body>
</html>
