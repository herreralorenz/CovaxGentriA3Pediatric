$(document).ready(function () {
    $('#formCheck-Lahat').change(function() {   
    if ($('#formCheck-Lahat').prop('checked')) {
    $('#formCheck-Wala').prop('checked',false);
    $('#formCheck-Gamot').prop('checked',true);
    $('#formCheck-Pagkain').prop('checked',true);
    $('#formCheck-Insekto').prop('checked',true);
    $('#formCheck-Latex').prop('checked',true);
    $('#formCheck-Mold').prop('checked',true);
    $('#formCheck-Pet').prop('checked',true);
    $('#formCheck-Pollen').prop('checked',true);
    } else {
      $('#formCheck-Wala').prop('checked',true);
      $('#formCheck-Gamot').prop('checked',false);
      $('#formCheck-Pagkain').prop('checked',false);
    $('#formCheck-Insekto').prop('checked',false);
    $('#formCheck-Latex').prop('checked',false);
    $('#formCheck-Mold').prop('checked',false);
    $('#formCheck-Pet').prop('checked',false);
    $('#formCheck-Pollen').prop('checked',false);
    }  
});  

$('#formCheck-Wala').change(function() {   
  if ($('#formCheck-Wala').prop('checked')) {
  $('#formCheck-Lahat').prop('checked',false);
  $('#formCheck-Gamot').prop('checked',false);
  $('#formCheck-Pagkain').prop('checked',false);
  $('#formCheck-Insekto').prop('checked',false);
  $('#formCheck-Latex').prop('checked',false);
  $('#formCheck-Mold').prop('checked',false);
  $('#formCheck-Pet').prop('checked',false);
  $('#formCheck-Pollen').prop('checked',false);
  }
}); 

$('#formCheck-Wala').change(function() {   
  if ($('#formCheck-Wala').prop('checked')) {
  $('#formCheck-Lahat').prop('checked',false);
  $('#formCheck-Gamot').prop('checked',false);
  $('#formCheck-Pagkain').prop('checked',false);
  $('#formCheck-Insekto').prop('checked',false);
  $('#formCheck-Latex').prop('checked',false);
  $('#formCheck-Mold').prop('checked',false);
  $('#formCheck-Pet').prop('checked',false);
  $('#formCheck-Pollen').prop('checked',false);
  }
});


}); 
