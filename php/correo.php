<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $nombre = $_POS["nombre"];
        $email = $_POST["email"];
        $tema = $_POST["tema"];
        $mensaje = $_POST["mensaje"];

        $to = "cbtryharl0920@gmail.com";
        $subject = "Hola un gusto, me gustaria poder contacte y tener mas informacion sobre su trabajo";
        $message = "Nombre: $nombre\n";
        $message .= "Email: $email\n";
        $message .= "Tema: $tema\n";
        $message .= "Mensaje: $mesaje\n";

        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)){
            echo "Mensaje enviado con exito..";
        }
        else{
            echo "Error al enviar el mensaje..";
        }
    }
?>