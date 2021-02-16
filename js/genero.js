let promise = axios.get('http://api.themoviedb.org/3/movie/popular?api_key=bb78e4cf3442e302d928f2c5edcdbee1')
// Quiero una promesa de un array de pelis
let pelisArrayPromise = promise.then((response) => response.genre_ids.results);
console.log(pelisArrayPromise);

// resultsPromise = promise.then(response => response.results);


 // esta funcion recibe un array de peliculas y pinta en un div una linea por cada pelicula
const pintaLasPelis = (pelisCollection) => {
    console.log(pelisCollection);
    // const divPelisDomElement = document.getElementById('pelis');
    pelisCollection.genre_ids.map((pelicula) => {
        if(genre_ids.includes(28)){
            console.log(pelicula.title);
        }
    //    const newPeliDomElement =  document.createElement('div');
    //    newPeliDomElement.innerHTML = pelicula.title;
    //    divPelisDomElement.appendChild(newPeliDomElement);
    });
}

pelisArrayPromise.then(console.log);