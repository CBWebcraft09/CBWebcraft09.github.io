<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "MiBaseDeDatos";
$port = "3306";

//Crear la conexion
$conexion = new mysqli ($servername, $username, $password, $dbname, $port );

//Verificar la conexion
if ($conexion -> connect_error){
    die("Conexion Fallida:" .$conexion->connect_error);
}
echo "Conexion Existosa a la Base de Datos. ";

// Cerrar la conexion
$conexion->close();

?>