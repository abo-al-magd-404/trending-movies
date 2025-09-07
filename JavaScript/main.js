var myHttp = new XMLHttpRequest();
var moviesList;
myHttp.open(
  "GET",
  "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50"
);
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    moviesList = JSON.parse(myHttp.response).results;
    displayMovies();
  }
});

function displayMovies() {
  var cartoona = ``;
  for (var i = 0; i < moviesList.length; i++) {
    cartoona += `
    <div class="movie">
    <div class="poster">
    <img src="https://image.tmdb.org/t/p/w500${moviesList[i].poster_path}" class="w-100" alt="alt" />
    </div>
    <div class="description">
        <h2 class="text-info">${moviesList[i].title}</h2><br>
        <p>${moviesList[i].overview}</p><br>
    </div>
    <div class="vote">
        <span >${moviesList[i].vote_average}</span>
    </div>
    </div>
    `;
  }
  document.getElementById("movies").innerHTML = cartoona;
}
