/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//Heel erg goed samengewerkt met Taufieq Hussainali en veel van elkaar geleerd//

var section = document.querySelector('section');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;


    //sanne hulp    
    for (var i = 0; i < movies.length; i++) {
        populateSection(movies[i]);
    }

};

function populateSection(deFilm) {
    var myH3 = document.createElement('h3');
    myH3.textContent = '2. ' + deFilm.title;

    var movieImg = document.createElement('img');
    movieImg.src = deFilm.cover;

    var kortBeschrijving = document.createElement('h4');
    kortBeschrijving.textContent = deFilm.simple_plot;
    
    var infoKnop = document.createElement('button');
    infoKnop.innerHTML = "Show info";
    
    infoKnop.addEventListener('click', function(){
        var geselecteerdeFilm = this.parentNode;
        var artikel = document.querySelectorAll('article');
        artikel.forEach(function (artikel){
            if (artikel == geselecteerdeFilm){
                //doe dan niets

            } else {
                    artikel.classList.remove('show');
                }
        });
        this.parentNode.classList.toggle('show');
    });

    var beschrijvingFilm = document.createElement('p');
    beschrijvingFilm.textContent = deFilm.plot;
    
    var genres = document.createElement('p');
    genres.textContent = deFilm.genres;
    
    var releaseDate = document.createElement('p');
    releaseDate.textContent = deFilm.release_date;
    
    var nieuweFilm = document.createElement('article');
    nieuweFilm.appendChild(myH3);
    nieuweFilm.appendChild(movieImg);
    nieuweFilm.appendChild(kortBeschrijving);
    nieuweFilm.appendChild(infoKnop);
    nieuweFilm.appendChild(beschrijvingFilm);
    nieuweFilm.appendChild(genres);
    nieuweFilm.appendChild(releaseDate);
    section.appendChild(nieuweFilm);

}
var header = document.querySelector('header');

document.onkeydown = function(event) {
    if (event.keyCode == 50) {
        
        var errorImage = document.createElement('img');
        errorImage.src = 'img/error.png';
        header.appendChild(errorImage);
        
        section.classList.add('error');
        
    }
};
