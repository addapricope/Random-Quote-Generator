const quoteText=document.querySelector('.quote');
quoteBtn=document.querySelector("button");
const authorName=document.querySelector(".name")
const sound=document.querySelector(".sound");
const copy=document.querySelector(".copy")
const twitter=document.querySelector(".twitter")
body=document.querySelector("body")



function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result)
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    })
}
body.onload=randomQuote();
quoteBtn.addEventListener("click", randomQuote);


sound.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance)
})

copy.addEventListener("click", ()=>{
   navigator.clipboard.writeText(quoteText.innerText)
})

twitter.addEventListener("click", ()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");
})




