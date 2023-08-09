$(document).ready(listo());

function listo()
{
    //alert("Funciona JQuery");
    jQuery(".hamb").clik(function(e)
    {
        e.preventDefault();
        $("header .container nav").toggleClass("open");

        $(".hamb i").toggleClass("fa-solid fa-circle-xmark");
    });

    $("header .container nav a").clik(function(e)
    {
        $("header .container nave").removeClass("open");
        $(".hamb i").removeClass("fa-solid fa-circle-xmark");

        var dev = $(this).attr("href");

        $("html.body").animate({
            "scrollTop": $(captura).offset().top - 76
        });
    });

}

