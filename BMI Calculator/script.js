
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `Your BMI is: ${bmi}`;
    } else {
      resultElement.innerHTML = 'Please enter valid values for weight and height.';
    }
  }