import {jquery} from 'https://code.jquery.com/jquery-1.11.0.min.js'
import {jquery_migrate} from 'https://code.jquery.com/jquery-migrate-1.2.1.min.js'
import {slick} from 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js'




function dropUser(){
   if(document.getElementById("menu").onclick){
        document.getElementById("usuario_dropdown_conteudo").style.display = "block"
   }
    
    document.getElementById("menu").onfocusout = function(){andropUser()}
    
    
}
function andropUser(){
    document.getElementById("usuario_dropdown_conteudo").style.display = "none"
}
function dropMenu(){
    document.getElementById("menu_dropdown_conteudo").style.display = "block"
}
function andropMenu(){
    document.getElementById("menu_dropdown_conteudo").style.display = "none"
}
/*
Document.getElementById('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  });*/

$('.carousel').slick();