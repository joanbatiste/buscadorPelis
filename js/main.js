let promise = axios.get('http://api.themoviedb.org/3/movie/popular?api_key=be761d96072c0447097947c70d2686b6')

let pelisArrayPromise = promise.then((response)=> response.data.results);


const pintaLasPelis = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('pelis');
    
    pelisCollection.map((pelicula) =>{
        const pathImg = 'https://image.tmdb.org/t/p/w500';
        const newPeliDomElement = document.createElement('div');
        const titleMovie = document.createElement('h4')
        const moviePic = document.createElement('img')
        
        divPelisDomElement.appendChild(newPeliDomElement)
        newPeliDomElement.appendChild(titleMovie)
        newPeliDomElement.appendChild(moviePic)
        
        newPeliDomElement.setAttribute('class', 'titlePicture')
        titleMovie.innerHTML = pelicula.title;
        moviePic.setAttribute('src', pathImg+pelicula.poster_path);

    });
}


pelisArrayPromise.then(pintaLasPelis);





// const pintaLasPelis = (pelisCollection) => {
//     console.log(pelisCollection);
//     const divPelisDomElement = document.getElementById('pelis');
//     pelisCollection.map((pelicula) => {
//        const newPeliDomElement =  document.createElement('div');
//        newPeliDomElement.innerHTML = pelicula.title;
//        divPelisDomElement.appendChild(newPeliDomElement);
//     });
// }
// const moviePicture = (moviesCollection) =>{
//     console.log(moviesCollection);
//     const divPelisDomElement = document.getElementById('pictureMovies');
//     moviesCollection.map((pelicula) => {
//         const newPeliDomElement =  document.createElement('img');
//         newPeliDomElement.setAttribute('src','https://image.tmdb.org/t/p/w500'+ pelicula.poster_path );
//         divPelisDomElement.appendChild(newPeliDomElement);
//      });
    



// }

// pelisArrayPromise.then(moviePicture);

