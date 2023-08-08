<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $nombre = $_POS["nombre"];
        $email = $_POST["email"];
        $tema = $_POST["tema"];
        $mensaje = $_POST["mensaje"];

        $destinatario = "cbtryharl0920@gmail.com";
        $asunto = "Hola un gusto, me gustaria poder contacte y tener mas informacion sobre su trabajo";
        $contenido = "Nombre: $nombre\n";
        $contenido .= "Email: $email\n";
        $contenido .= "Tema: $tema\n";
        $contenido .= "Mensaje:\n$mensaje\n";

        $headers = "From: $email";

        mail($destinatario, $asunto, $contenido, $headers);

        echo "Mensaje enviado correctamente. Gracias por ponerte en contacto.";

    }
?>