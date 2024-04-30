var author;
var data;

async function getRandomQuote() {
    const quoteText = document.getElementById('quote-text');
    const response = await fetch('https://api.quotable.io/random');
    data = await response.json();
    author = data.author;
    quote = `${data.content} - ${data.author}`;
    quoteText.innerHTML = `"${quote}" <button id="copy-to-clipboard-btn" onclick="copyToClipboard()"><i class="fa-regular fa-copy"></i></button><br><button onclick="getAuthor()">Get Author Details</button>`;
}

async function getAuthor() {
    if (!author) {
        alert("Please generate a quote first.");
        return;
    }

    try {
        const apiUrl = `https://api.quotable.io/authors/${encodeURIComponent(author)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display author details
        alert(`Author: ${data.name}\nBio: ${data.bio}\nNumber of quotes: ${data.quoteCount}`);
    } catch (error) {
        console.error('Error fetching author details:', error);
        alert('Failed to fetch author details. Please try again later.');
    }
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