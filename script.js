function volume_sphere(event) {
  // Prevent form submission (page reload)
  event.preventDefault();

  const radiusValue = document.getElementById("radius").value;
  const radius = parseFloat(radiusValue);

  let volume;

  // Validate radius
  if (isNaN(radius) || radius < 0) {
    volume = "NaN";
  } else {
    volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
  }

  // Display result
  document.getElementById("volume").value = volume;
}

// Attach function to form submit
document.getElementById("MyForm").addEventListener("submit", volume_sphere);
