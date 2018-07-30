//define functions here

$(document).ready(function(){

  frameIt();
// call functions here
  getIt();
  pressIt();
  submitIt();

});

function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on("load", function(){
    $(this).addClass("tasty");
    $(this).css('border', "solid 2px red");  
  });
}

function pressIt(){
  $('input').on("keydown", function(key){
    if(key.which == 71){
      alert("G pressed");
    }
  });
}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}