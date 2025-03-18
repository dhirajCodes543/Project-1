const quote = document.getElementById("quote");
const button = document.getElementById("button");
const share = document.getElementById("share");

async function getQuote() {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    console.log(data);
       
    quote.innerHTML = `"${data.quote}"`;
}


getQuote();

button.addEventListener("click", getQuote);
share.addEventListener("click",()=>alert("Not available"));