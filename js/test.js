const joketext=document.getElementById("output");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single";

let myfun=()=>
{
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        joketext.textContent=`${item.joke}`;
        
    });

}
