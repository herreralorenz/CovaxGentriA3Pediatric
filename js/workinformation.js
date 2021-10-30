$(document).ready(function() {
$("input[name$='trabaho']").click(function() {
       var inputValue = $(this).attr("value");
    
    if(inputValue == "meron"){
      $(".section-trabaho").css("display","block");
      $("#selecttrabaho").prop('required', true);
      $("#trabahopropesyonuringnegosyo").prop('required', true);
      $("#pangalanngemployeronegosyo").prop('required', true);
      $("#contactnumberngemployeronegosyo").prop('required', true);
      $("#addressngemployeronegosyo").prop('required', true);
    }
    else if(inputValue == "wala"){
      $(".section-trabaho").css("display","none");
      $("#selecttrabaho").prop('required', false);
      $("#trabahopropesyonuringnegosyo").prop('required', false);
      $("#pangalanngemployeronegosyo").prop('required', false);
      $("#contactnumberngemployeronegosyo").prop('required', false);
      $("#addressngemployeronegosyo").prop('required', false);
    }
    });
});