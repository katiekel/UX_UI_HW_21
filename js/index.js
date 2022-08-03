console.log("Your Index.js file is loaded correctly!");

$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#footer-placeholder").load("footer.html");
});

$(document).ready(function(){

    $(".skillsCard").mouseover(function(){
      $(this).stop().animate({"width": "101%","left":"1px","top":"1px"}, 100,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "100%","left":"0px","top":"0px",}, 100,'swing');
    });;
});

$(document).ready(function(){

    $(".myworkCard").mouseover(function(){
      $(this).stop().animate({"width": "101%","left":"1px","top":"1px"}, 100,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "100%","left":"0px","top":"0px",}, 100,'swing');
    });;
});

$(document).ready(function(){
   
    $(".scrollProjects").on('click', function(event) {
  
      if (this.hash !== "") {
     
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } // End if
    });
  });