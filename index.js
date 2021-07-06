document.addEventListener('DOMContentLoaded', function () {
    // const moviesContainer = document.querySelector('#movies-container');
    // const searchForm = document.querySelector('#search-form');
})

function renderMovies(movieArray) {
    console.log('test')
    const movieHtmlArray = movieArray.map(currentMovie => {
        return `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card mb-3">
                    <img src="${currentMovie.Poster}" class="card-img-top" alt="Poster for ${currentMovie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <p class="card-text">${currentMovie.Year}</p>
                        <a href="# class="btn btn-primary">Add</a>
                    </div
                </div>
            </div`
    })
    console.log(movieHtmlArray)
    return movieHtmlArray.join('')
}

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const moviesContainer = document.querySelector('#movies-container');
    moviesContainer.innerHTML = renderMovies(movieData);
    //console.log('click search')
})



function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map((currentmovie) => {
        return `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card w-100 mb-5">
        <img src="${currentmovie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${currentmovie.Title}</h5>
        <p class="card-text"> ${currentmovie.Year} 
        </p>
        <a href="#" onclick = "saveToWatchList('${currentmovie.imdbID}')" class="btn btn-danger">Add To Watch List</a>
        </div>
        </div>
        </div>`
    })


    return movieHtmlArray.join("")
}

document.addEventListener("DOMContentLoaded", () => {

    const watchlist = localStorage.getItem('watchlist');
    console.log(watchlist)
    var parselist = JSON.parse(watchlist)
    console.log(parselist)
    const moviecontainer = document.querySelector(".results")
    moviecontainer.innerHTML = renderMovies(parselist)
})