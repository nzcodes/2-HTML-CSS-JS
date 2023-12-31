const tmdbKey = '105e96f91975b5ad517732b25be3915a';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

// Populate Drop-down Menu with Genres
const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}/${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json()
      const genres = jsonResponse.genres
      // console.log(genres)
      return genres;
    }
  } catch (error) {
    console.log(error)
  }
}

// Get a Random Movie
const getMovies = async() => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie'
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json()
      const movies = jsonResponse.results;
      console.log(movies)
      return movies;
    }
  } catch (error) {console.log(error)}
};

// Get Movie Info
const getMovieInfo = async(movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`
  const requestParams = `?api_key=${tmdbKey}`
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const movieInfo = await response.json()
      return movieInfo
    }
  } catch (error) {console.log(error)}
};

// Display Movie: Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async() => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies()
  const randomMovie = getRandomMovie(movies)
  const info = await getMovieInfo(randomMovie)
  displayMovie(info)
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;