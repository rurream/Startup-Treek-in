

$(function () {
    
    var menuDesplegable = document.getElementById('menuHamburgesa');
    var botonHamburger = document.getElementById('navHamburguesa');
    // menuDesplegable.style.transform.scale = (0, 0);
    //botonHamburger.style.display='none';
    

    var estadoDesplegado = 0;
    botonHamburger.addEventListener("click", mostrarMenu);

    function mostrarMenu(){
        if (estadoDesplegado === 0){
            menuDesplegable.style.transform = "scale(1,1)";
            estadoDesplegado = 1
        }else{
            menuDesplegable.style.transform = "scale(0,0)";
            estadoDesplegado = 0;
        }
        
    };


    var marcoVisual = $(window);
      $(function () {
        marcoVisual.resize(function(){
            var w = window.innerWidth;
            if (estadoDesplegado === 1){
                if (w > 768){
                    menuDesplegable.style.transform = "scale(0,0)";
                    estadoDesplegado = 0;
                }
            }
        });
      });

      var optionHamburger = document.getElementsByClassName('optionHambur');
      for (i = 0; i < optionHamburger.length; i++) {
        optionHamburger[i].addEventListener("click", mostrarMenu);
      }
    
});