

$(document).ready(function () {
  $(".control").click(cargarImagen);
})
var target = 0;

var cargarImagen = function() {
  // console.log(this.dataset.target);
  var $target = $(this).data("target");
  console.log($target);
  changeImage($target);
  changeColorButton($target);
}

var changeImage = function (target) {
  // console.log($("div.active"));
  var $actualImage = $("div.active");
  // console.log($("div[data-slide='"+$target+"']"));
  var $newImage = $("div[data-slide='" + target +"']");
  $actualImage.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function (target) {
    var $actualButton = $("button.active");
    var $newButton = $("button[data-target='" + target +"']");
    $actualButton.removeClass("active");
    $newButton.addClass("active");
}

$(document).ready(function() {
  $('select').material_select();
});

  $('.dropdown-button').dropdown('open');


var verifyBtn = $("#verify-phone");
function loadPage(){
  $inputPhone.keyup(validatePhone);
}


function validatePhone() {

  if($(this).val().trim().length == 10) {
    $verifyBtn.removeAttr("disabled", false);
    number = $icon_telephone.val();
    saveNumber(number);
  } else {
    $nextButton.attr("disabled", true);
  }
  console.log(number);
}
function saveNumber(number) {
  console.log(number);
  var $containernumber = $('#number_user');

  $containernumber.text(number);
}
function pruebaTelefono() {
    var str = $("#icon_telephone").val();
    var nstr = str.replace(/\D/g,''); //Expresión regular para que bote cualquier cosa que no sea dígito numérico
    if(nstr.length==10){
        $("#verify-phone").prop('disabled', false);
    }
    else if (nstr.length>10) {
        nstr=nstr.substring(0, 10);
        $("#verify-phone").prop('disabled', false);
    }
    else{
        $("#verify-phone").prop('disabled', true);
    }
    $("#icon_telephone").val(nstr);
}
//Generando rándom
function getRandom() {
  var random =  Math.random() * (9.9 - 0) + 0;
  var randomParseado = parseInt(random);
  //console.log(randomChido)
  return randomParseado;
}
//generando los tres números
$("#verify-phone").click(function (){
  var num_1=getRandom();
  var num_2=getRandom();
  var num_3=getRandom();

  alert("LAB - "+num_1+" "+num_2+" "+num_3);
  window.location.href="code.html?num_1="+num_1+"&num_2="+num_2+"&num_3="+num_3;
});

/*
var url_string = "window.location.href"
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);
*/
//Sacando el código rándom generado de la url para poder reutilizarlo

$("#resend-btn").click(function(){
  var url_string = window.location.href;
  var url = new URL(url_string);
  var num_1= url.searchParams.get("num_1");
  var num_2= url.searchParams.get("num_2");
  var num_3= url.searchParams.get("num_3");
  alert("LAB - "+num_1+" "+num_2+" "+num_3);
  //console.log(c);
});
