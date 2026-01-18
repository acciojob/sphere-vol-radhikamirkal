function volume_sphere() {
  // Get radius value from input
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  let volume;

  // Validate radius: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
  }

  // Display result
  document.getElementById("volume").value = volume;

  return false; // Prevent form submission
}
