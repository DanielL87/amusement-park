$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?(cm)"));

  if (height <= 111) {
    $("#under-111").show().addClass("green-background");
  }
  else if (height >= 194) {
    $("#over-195").show().addClass("red-background");
    }
  else {
    $("#ideal").show().addClass("blue-background");
  }
});
