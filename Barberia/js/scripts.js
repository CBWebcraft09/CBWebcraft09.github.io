 // Función para redirigir a WhatsApp
 function enviarWhatsapp() {
    var telefono = "51993178676"; // Aquí puedes cambiar el número de teléfono
    var mensaje = encodeURIComponent("¡Hola! Me gustaria contactarte. Vine desde tu pagina web CB WebCraft"); // Mensaje predeterminado
    var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + mensaje;
    window.open(url, "_blank");
  }
  
  //Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
  function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
  
    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
  }
  
  //función que muestra el menu responsive
  function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
      x.className = "responsive";
    } else {
      x.className = "";
    }
  }