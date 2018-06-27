var $form = $('form#test-form'),
    url = 'https://script.google.com/a/lostsailordesign.com/macros/s/AKfycbwfynyMzXnNI1Pxy0lU9GylXlOe5yM-huKd9mNipykHrBTfBlV9/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(!this.form.checkbox.checked){

    alert('You must agree to the terms first.');
  } 
  else {
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject(),
    success: function () {
      $("#test-form").fadeOut(1000);
      $(".successMessage").fadeIn(1000);
    }
  })
}
})

$(document).ready(function () {
  $("#yourChoices_btn").click(function () {
    $('html, body').animate({
      scrollTop: $("#yourChoices").offset().top
    }, 2000);
  });
});

var namer = (params) => {
  console.log(params);
  
}
function nam(p){
  console.log(p);
  
}
var i = 'computer'
if(i.includes('c')){
  alert('yes')
}
nam('ffffffff')
namer('cool');
namer('co');
namer('brother');
namer('jane')













