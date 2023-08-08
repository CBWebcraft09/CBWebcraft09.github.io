<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $nombre = $_POS["nombre"];
        $email = $_POST["email"];
        $tema = $_POST["tema"];
        $mensaje = $_POST["mensaje"];


        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)){
            echo "Mensaje enviado con exito..";
        }
        else{
            echo "Error al enviar el mensaje..";
        }
        echo "Mensaje enviado correctamente. Gracias por ponerte en contacto.";
    }
?>