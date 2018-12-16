//Java homework

document.getElementById("button1").addEventListener("click", function(){
    console.log (clickme);
    count++;


function getData(){
    fetch('https://api.github.com/orgs/HackYourFuture/repos')
    .then ((res)=>{ return res.json()})
    .then ((data)=> {
        for( var i = 0; i< data.length; i ++) {
            display.innerHTML += `   
        <li>${data[i].title} </li> `
    }
    console.log(json);