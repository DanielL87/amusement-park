$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?(cm)"));

  if (height <= 111) {
    $("#under-111").show();
  }
  else if (height >= 194) {
      $("#over-195").show();
    }
  else {
    $("#ideal").show();
  }
});
