

$(function(){


// creating navbar

   $(".navbar form").mouseenter(function(){
    $(".navbar form  .form-control").css({"display":"block"})
   });
   $(".navbar form").mouseleave(function(){
    $(".navbar form  .form-control").css({"display":"none"})
   });
   
   $(".navbar form input").focus(function(){
    $(".navbar form").css({"display":"block"})
   });
   $(".navbar form input").blur(function(){
    $(".navbar form").css({"display":"none"})
   });
   
// creating navbar



});
