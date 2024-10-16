
 // Función para redirigir a WhatsApp
 function enviarWhatsapp() {
  var telefono = "51993178676"; // Aquí puedes cambiar el número de teléfono
  var mensaje = encodeURIComponent("¡Hola! Me gustaria contactarte. Vine desde tu pagina web CB WebCraft"); // Mensaje predeterminado
  var url = "https://api.whatsapp.com/send?phone=51993178676" + telefono + "&text=" + mensaje;
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

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 200) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bd").classList.add("barra-progreso3");
    document.getElementById("php").classList.add("barra-progreso4");
  }

}

//Funcion de formulario de correo con formspree

const form = document.querySelector('form'); // Aquí seleccionamos el formulario
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this); // FormData recoge los datos del formulario

  try {
    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      this.reset();
      alert('Gracias por contactarme, te escribiré pronto');
    } else {
      alert('Hubo un problema al enviar el formulario');
    }
  } catch (error) {
    alert('Hubo un error en el envío del formulario');
    console.error(error);
  }
});

