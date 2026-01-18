function volume_sphere() {
  // Ensure Cypress-required IDs exist
  document.querySelector('input[name="radius"]').id = "radius";
  document.querySelector('input[name="volume"]').id = "volume";
  document.querySelector('input[type="submit"]').id = "submit";

  const radiusValue = document.getElementById("radius").value;
  const radius = parseFloat(radiusValue);

  let volume;

  if (isNaN(radius) || radius < 0) {
    volume = "NaN";
  } else {
    volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
  }

  document.getElementById("volume").value = volume;

  return false; // prevent page reload
}
