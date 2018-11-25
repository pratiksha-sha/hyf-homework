const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
const resultcontainer =document.getElementById('output');
let movies=[];

fetch(url)
.then((res)=> res.json())
.then((jsonMovies)=>{
    movies=jsonMovies;
    getTitles();
    document.getElementById('titles').addEventListener('click',getTitles);
    document.getElementById('good').addEventListener('click',getGoodMovies);
    document.getElementById('average').addEventListener('click',getAverageMovies);
    document.getElementById('bad').addEventListener('click',badMovies);

})

function getTitles(){
    let output='';
    movies.map(movie=> output+= `<ul><li><b>${movie.title}</b></li><br></ul>`);
    resultcontainer.innerHTML =output;
}

function getGoodMovies() {
    let goodMovies="";
    let good =movies.filter(movie => movie.rating>=7)
    movies.map(movie=> goodMovies+=`<ul><li><b>${movie.title}</b> <br> Rating: ${movie.rating}</li><br></ul>`)
    resultcontainer.innerHTML =`<h3 class="total"> Total number of movies:<br>${good.length}</h3><br>` + goodMovies;
}

function getAverageMovies(){
    let averageMovies ="";
    let average=movies.filter(movie=> movie.rating>=4 && movie.rating<7)
    average.map(movies=averageMovies +=`<ul><li><b>${movie.title}</b> <br> Rating: ${movie.rating}</li><br></ul>`)
    resultcontainer.innerHTML =`<h3 class="total"> Total number of movies:<br>${average.length}</h3><br>` + averageMovies;
}

function getAverageRating(){
    let averageRating ="";
    const totalRating = (rate,movie)=> rate+movie.rating;
    let rating =movie.reduce(totalRating,0);
    rating =(rating/movies.length).toFixed(2);
    aveRating+= `<h2 class="ave-rate"> average rating of movies: <b class= "rate"> $ {rating}</b> </h2><br>`;
    resultcontainer.innerHTML =averageRating;

}

function getOldMovies(){
    let output ="";
    movies.map(movie=>{
        let oold =movie.titel.split('');
        oold.filter(x=>{
            if (x.toLowerCase()=== word.toLowerCase()){
                output += `<ul><li><b> ${movie.title}</b></li><ul>`;
                resultContainer.innerHTML =output;
            }
        })
    })
}



