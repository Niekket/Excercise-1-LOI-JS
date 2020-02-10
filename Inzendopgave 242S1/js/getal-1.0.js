document
  .getElementById("button-resultaat")
  .addEventListener("click", resultaat);
var x = document.getElementById("input-x");
var y = document.getElementById("input-y");

function resultaat() {
  var numX = +x.value;
  var numY = +y.value;
  var total = numX + " + " + numY + " = " + (numX + numY);
  total +=
    "<br>Het verschil tussen " + numX + " - " + numY + " = " + (numX - numY);
  total += "<br>Het product is: " + numX * numY;
  total += "<br>de quotiënt is: " + numX / numY;
  document.getElementById("resultaat").innerHTML = total;

  (function() {
    var mededeling;
    if (numX > numY) {
      mededeling = numX + " is groter dan: " + numY;
    } else if (numX < numY) {
      mededeling = numX + " is kleiner dan: " + numY;
    } else {
      mededeling = numX + " is gelijk aan: " + numY;
    }
    document.getElementById("mededeling").innerHTML = mededeling;
  })();
}
