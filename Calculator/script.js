let display = document.getElementById('display');
let history = document.getElementById('history');
let lastClicked = null; // Variable to track the last clicked button

function appendToDisplay(value) {
    // If the last clicked button was '=' and the current button is a number, clear the display
    if (lastClicked === '=' || lastClicked === '√' || lastClicked === '^2') {
        clearDisplay();
    }

    display.value += value;
    lastClicked = value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(`${display.value} = ${result}`);
        display.value = result;
        lastClicked = '=';
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
        addToHistory(`√(${display.value})`);
        lastClicked = '√';
    } catch (error) {
        display.value = 'Error';
    }
}

function exponentiation() {
    try {
        display.value = eval(display.value) ** 2;
        addToHistory(`(${display.value})²`);
        lastClicked = '^2';
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    history.innerHTML += `<p>${entry}</p>`;
    history.scrollTop = history.scrollHeight; // Auto-scroll to the bottom
}