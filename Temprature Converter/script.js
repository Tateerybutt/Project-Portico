
let inputUnit = document.getElementById("inputUnit");
let outputUnit = document.getElementById("outputUnit");
let inputTemperature = document.getElementById("inputTemperature");
let outputTemperature = document.getElementById("outputTemperature");

function convertTemperature() {
  // Get the selected input and output units
  let fromUnit = inputUnit.value;
  let toUnit = outputUnit.value;

  // Get the input temperature value
  let temperature = parseFloat(inputTemperature.value);

  // Check if the input temperature is a valid number
  if (!isNaN(temperature)) {
    // Perform temperature conversion
    let result;

    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        result = temperature + 273.15;
      } else {
        result = temperature; // Same unit, no conversion needed
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
      } else if (toUnit === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
      } else {
        result = temperature; // Same unit, no conversion needed
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
      } else {
        result = temperature; // Same unit, no conversion needed
      }
    }

    // Display the result in the output field
    outputTemperature.value = result.toFixed(2);
  } else {
    // If the input temperature is not a valid number, display an error or handle it accordingly
    outputTemperature.value = "Invalid Input";
  }
}

function swapUnits() {
  // Swap the selected units
  let temp = inputUnit.value;
  inputUnit.value = outputUnit.value;
  outputUnit.value = temp;
  // Perform conversion after swapping
  convertTemperature();
}