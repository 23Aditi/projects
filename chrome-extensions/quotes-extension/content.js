(function () {
    const quotes = [
        { content: "Be the change you wish to see in the world", author: "Mahatma Gandhi" },
        { content: "The only way to do great work is to love what you do", author: "Steve Jobs" },
        { content: "In three words I can sum up everything I've learned about life: it goes on", author: "Robert Frost" },
        { content: "Life is what happens when you're busy making other plans", author: "John Lennon" },
        { content: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt" },
        { content: "Success is not final, failure is not fatal: it is the courage to continue that counts", author: "Winston Churchill" },
        { content: "The only impossible journey is the one you never begin", author: "Tony Robbins" },
        { content: "Everything you've ever wanted is on the other side of fear", author: "George Addair" },
        { content: "The way to get started is to quit talking and begin doing", author: "Walt Disney" },
        { content: "Don't count the days, make the days count", author: "Muhammad Ali" }
    ];

    // Get a random quote from our collection
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Create the quote container
    const quoteContainer = document.createElement("div");
    quoteContainer.className = "quote-container";

    // Create the quote content
    const quoteContent = document.createElement("span");
    quoteContent.className = "quote-content";
    quoteContent.textContent = `"${randomQuote.content}"`;

    // Create the author
    const quoteAuthor = document.createElement("span");
    quoteAuthor.className = "quote-author";
    quoteAuthor.textContent = ` - ${randomQuote.author}`;

    // Assemble the quote
    quoteContainer.appendChild(quoteContent);
    quoteContainer.appendChild(quoteAuthor);

    // Find the language selection div and insert the quote after it
    const languageDiv = document.querySelector('div#SIvCob');
    if (languageDiv) {
        languageDiv.parentNode.insertBefore(quoteContainer, languageDiv.nextSibling);
    }
})();
