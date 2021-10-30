//dropdown category
$(document).ready(function(){
  $(".dropdown-category .dropdown-item").click(function(){
   $(".dropdown-toggle-category").text($(this).text());
     $(".dropdown-toggle-category").val($(this).text());      
});
});

//dropdown  category id

$(document).ready(function(){
  $(".dropdown-category-id .dropdown-item").click(function(){
   $(".dropdown-toggle-category-id").text($(this).text());
     $(".dropdown-toggle-category-id").val($(this).text());      
});
});

//suffix
$(document).ready(function(){
  $(".dropdown-suffix .dropdown-item").click(function(){
   $(".dropdown-toggle-suffix").text($(this).text());
     $(".dropdown-toggle-suffix").val($(this).text());      
});
});

//civil status
$(document).ready(function(){
  $(".dropdown-civilstatus .dropdown-item").click(function(){
   $(".dropdown-toggle-civilstatus").text($(this).text());
     $(".dropdown-toggle-civilstatus").val($(this).text());      
});
});