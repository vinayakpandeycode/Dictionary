const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', searchWord);
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWord();
    }
});

function searchWord() {
    const word = searchInput.value.trim();
    if (!word) {
        resultDiv.innerHTML = '<p class="error">Please enter a word.</p>';
        return;
    }

    const dictionary = {
        
            "apple": "एक गोल फल...",
            "banana": "एक लंबा घुमावदार फल...",
            "computer": "एक इलेक्ट्रॉनिक उपकरण...",
            "kitab": "पुस्तक...",
            "pani": "पानी...",
            "ghar": "घर...",
            "pustak": "पुस्तक...",
            "paani": "पानी...",
            "house": "घर...",
            "book": "पुस्तक...",
            "water": "पानी...",
            "hello": "नमस्ते...",
            "namaste": "हेलो...",
            // ... और भी शब्द जोड़ें ...
        };
    

    const lowerCaseWord = word.toLowerCase();

    if (dictionary.hasOwnProperty(lowerCaseWord)) {
        resultDiv.innerHTML = `<h2>${word}</h2><p>${dictionary[lowerCaseWord]}</p>`;
    } else {
        resultDiv.innerHTML = `<p class="error">"${word}" not found in the dictionary.</p>`;
    }
}