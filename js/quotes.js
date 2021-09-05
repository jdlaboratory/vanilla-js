const quotes = [
    {
        quote: "아침 일찍 일어나는 새가 먹이를 먹는다.",
        author: "한국 속담",
    },
    {
        quote: "사면초가",
        author: "중국 속담",
    },
    {
        quote: "시간은 화살과 같이 흐른다.",
        author: "미국 속담",
    },
    {
        quote: "어제의 나보다 오늘의 내가 더 발전한다.",
        author: "한국 속담",
    },
    {
        quote: "인생은 짧다.",
        author: "미국 속담",
    },
    {
        quote: "일석이조",
        author: "중국 속담",
    },
    {
        quote: "우공이산",
        author: "중국 속담",
    },
    {
        quote: "읍참마속",
        author: "중국 속담",
    },
    {
        quote: "내일 지구가 멸망하더라도 오늘 사과 나무 한그루를 심겠다. ",
        author: "아이작 뉴턴",
    },
    {
        quote: "그래도 지구는 돈다.",
        author: "갈릴레오 갈릴레이",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0 ~ 9 

function randomQuotes() {
    const arraySize = quotes.length;
    const num = Math.floor(Math.random() * arraySize);
    const todayQuote = quotes[num];
    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}

setInterval(randomQuotes, 1000);
//randomQuotes();