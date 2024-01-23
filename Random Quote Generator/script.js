async function getRandomQuote() {
    const quoteText = document.getElementById('quote-text');
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quote = `${data.content} - ${data.author}`;

    quoteText.innerHTML = `"${quote}" <button id="copy-to-clipboard-btn" onclick="copyToClipboard()"><i class="fa-regular fa-copy"></i></button>`;
}

function copyToClipboard() {
    const quoteText = document.getElementById('quote-text').textContent;
    navigator.clipboard.writeText(quoteText)
        .then(() => {
            console.log('Text copied to clipboard successfully!');
        })
        .catch(err => {
            console.error('Unable to copy text to clipboard', err);
        });
}