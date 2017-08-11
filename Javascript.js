
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
//========================================================================


//================= MODAL SETUP ===========================================
$('.openModal1').on('click', function() {
   $('.modal1').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal1').removeClass('is-active'); 
});


$('.openModal2').on('click', function() {
   $('.modal2').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal2').removeClass('is-active'); 
});


$('.openModal3').on('click', function() {
   $('.modal3').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal3').removeClass('is-active'); 
});


$('.openModal4').on('click', function() {
   $('.modal4').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal4').removeClass('is-active'); 
});


$('.openModal5').on('click', function() {
   $('.modal5').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal5').removeClass('is-active'); 
});


$('.openModal6').on('click', function() {
   $('.modal6').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal6').removeClass('is-active'); 
});

<<<<<<< HEAD
$('.openModal7').on('click', function() {
   $('.modal7').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal7').removeClass('is-active'); 
});

$('.openModal8').on('click', function() {
   $('.modal8').addClass('is-active'); 
});

$('.modal-background, .fechar').on('click', function() {
   $('.modal8').removeClass('is-active'); 
});

// ========================== VALIDAR EMAIL ================================= //

function login() {
  var done = 0;
  var email = document.getElementById("email").value;
  email = email.toLowerCase();
  var senha = document.getElementById("senha").value;
  senha = senha.toLowerCase();
  if (email=="joislan.lima@gmail.com" && senha=="cliente") {
    window.location.href="cliente1.html";
    done = 1;
  } 
  else if (email=="joislan.lima@gmail.com" && senha=="auditor") {
    window.location.href="formulario1.html";
    done = 2;
  }
  else if (email=="joislan.lima@gmail.com" && senha=="admin"){ window.location.href="admin1.html" }
  else {alert("Dados incorretos, tente novamente.");}
}

// ========================== RECUPERAR SENHA =============================== //

function recuperaSenha(){
    alert("Você receberá uma nova senha por email.")
} 



// ========================== FORMULARIOS ================================= //
function excluir(){
    confirm("Tem certeza que deseja excluir?");   document.getElementById("campoNomeUsuario").classList.add('visibilidade');
}

function preencherNome(){
preencheNome = document.getElementById("selectNome").value;
document.getElementById("perfilEdit").value = preencheNome;
document.getElementById("campoNomeUsuario").classList.remove('visibilidade');    
}



// ========================== PROGRESS BARS ================================= //
   var pg        = new Number();
   var maximo    = new Number();
   var pg        = 0;
   var maximo    = 31;
    
    function barra1(){
     
        if((pg + 1) <= maximo){
            pg++
            document.getElementById("myBar1").value = pg;
            setTimeout("barra1()",30);
        }
    }


   var pg2        = new Number();
   var maximo2    = new Number();
   var pg2        = 0;
   var maximo2    = 2;
    
    function barra2(){
     
        if((pg2 + 1) <= maximo2){
            pg2++
            document.getElementById("myBar2").value = pg2;
            setTimeout("barra2()",30);
        }
    }
    
   
   var pg3        = new Number();
   var maximo3    = new Number();
   var pg3        = 0;
   var maximo3    = 24;
    
    function barra3(){
     
        if((pg3 + 1) <= maximo3){
            pg3++
            document.getElementById("myBar3").value = pg3;
            setTimeout("barra3()",30);
        }
    }


   var pg4        = new Number();
   var maximo4    = new Number();
   var pg4        = 0;
   var maximo4    = 19;
    
    function barra4(){
     
        if((pg4 + 1) <= maximo4){
            pg4++
            document.getElementById("myBar4").value = pg4;
            setTimeout("barra4()",30);
        }
    }

   var pg5        = new Number();
   var maximo5    = new Number();
   var pg5       = 0;
   var maximo5    = 5;
    
    function barra5(){
     
        if((pg5 + 1) <= maximo5){
            pg5++
            document.getElementById("myBar5").value = pg5;
            setTimeout("barra5()",30);
        }
    }


   var pg6        = new Number();
   var maximo6    = new Number();
   var pg6       = 0;
   var maximo6    = 6;
    
    function barra6(){
     
        if((pg6 + 1) <= maximo6){
            pg6++
            document.getElementById("myBar6").value = pg6;
            setTimeout("barra6()",30);
        }
    }

   var pg7        = new Number();
   var maximo7    = new Number();
   var pg7       = 0;
   var maximo7    = 26;
    
    function barra7(){
     
        if((pg7 + 1) <= maximo7){
            pg7++
            document.getElementById("myBar7").value = pg7;
            setTimeout("barra7()",30);
        }
    }


   var pg8        = new Number();
   var maximo8    = new Number();
   var pg8       = 0;
   var maximo8    = 11;
    
    function barra8(){
     
        if((pg8 + 1) <= maximo8){
            pg8++
            document.getElementById("myBar8").value = pg8;
            setTimeout("barra8()",30);
        }
    }


   var pg9        = new Number();
   var maximo9    = new Number();
   var pg9       = 0;
   var maximo9    = 7;
    
    function barra9(){
     
        if((pg9 + 1) <= maximo9){
            pg9++
            document.getElementById("myBar9").value = pg9;
            setTimeout("barra9()",30);
        }
    }


   var pg10        = new Number();
   var maximo10    = new Number();
   var pg10       = 0;
   var maximo10    = 0;
    
    function barra10(){
     
        if((pg10 + 1) <= maximo10){
            pg10++
            document.getElementById("myBar10").value = pg10;
            setTimeout("barra10()",30);
        }
    }

