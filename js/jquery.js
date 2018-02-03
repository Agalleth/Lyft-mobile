

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
