function saveToWatchList(MovieID) {
    document.addEventListener('DOMContentLoaded', function () {
        // const moviesContainer = document.querySelector('#movies-container');
        // const searchForm = document.querySelector('#search-form');
        document.addEventListener('click', function (e) {
            e.preventDefault();
            const watchList = localStorage.getItem('watchList');
            let parseList = JSON.parse(watchList)
            let movieContainer = document.querySelector(".results")
            movieContainer.innerHTML = renderMovies(parseList)
        })
    })
}

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
                        <a href="#" onclick = "saveToWatchList('${currentMovie.imdbID}')" class="btn btn-danger">Add To Watch List</a>
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
    const searchString = document.getElementById('search-bar').value
    const urlEncodedString = encodeURIComponent(searchString);
    fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedString)
        .then(Response => {
            movieData = Response.data.Search;
            const moviesContainer = document.querySelector('.results')
            container.innerHTML = renderMovies(Response.data.Search)
        }
        )
})

    //const moviesContainer = document.querySelector('#movies-container');
    // moviesContainer.innerHTML = renderMovies(movieData);
    //console.log('click search')
