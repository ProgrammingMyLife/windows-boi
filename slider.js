var slider = document.getElementById("myRange");
var width = document.getElementById("WIDTH");

var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
function opacity() {

  console.log(slider.value)
  document.getElementById("mydiv").style.opacity = slider.value * 0.1;
} 

