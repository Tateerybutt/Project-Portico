// Function to convert currency to all available currencies
function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = "yFDJt654dqCNvJwutyhoAFP4J2AEe5GmbOMURcmt";

    fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`, {
            "method": "GET",
            "headers": {
                "x-api-key": apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.new_amount);
            document.getElementById('convertedAmount').value = data.new_amount;
        })
        .catch(err => {
            console.error(err);
        });
}

function swapDropdownOptions() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    const fromCurrencyValue = fromCurrencySelect.value;
    const toCurrencyValue = toCurrencySelect.value;

    fromCurrencySelect.value = toCurrencyValue;
    toCurrencySelect.value = fromCurrencyValue;
}