fetch('assets/js/movies.json')
    .then(response => response.json())
    .then(data => {console.log(data)

let arrayMovies = data.results;

for (i = 0; i < arrayMovies.length; i++) {

    document.getElementById('movies').innerHTML += `<div class="movie">
    <img class="imgMovie" src="${arrayMovies[i].poster_path}" alt="">
    <p class="title">${arrayMovies[i].original_title}</p>
    <p class="summary">${arrayMovies[i].overview.slice(0, 80)} ...</p>
    <span class="score">
    <div class="score-wrap">
        <span class="stars-active" style="width:${arrayMovies[i].vote_average*10}%">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
        </span>
<span class="stars-inactive">
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
</div>
</span>
</div>`
};
})


let mySearch = 'harry'

function getMovie(){
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${mySearch}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "64393cabd3mshde0c1b9ddd453b9p1c94abjsn2cbaa333220e"
	}
})
.then(response => response.json())
.then(data => {console.log(data)})
.catch(err => {
	console.error(err);
});
}

getMovie()