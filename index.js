

$(function(){


// creating navbar

   $(".navbar form").mouseenter(function(){
    $(".navbar form  .form-control").css({"display":"block"})
   });
   $(".navbar form").mouseleave(function(){
    $(".navbar form  .form-control").css({"display":"none"})
   });
   $(".navbar form input").focuse(function(){
    $(".navbar form  .form-control").css({"display":"block"})
   });
   $(".navbar form input").blur(function(){
    $(".navbar form  .form-control").css({"display":"none"})
   });

// creating navbar



});
