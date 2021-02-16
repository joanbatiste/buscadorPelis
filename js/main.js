
//funciones
let valor = document.getElementById("buscador");
let valorId = document.getElementById("buscadorID");
//Recursos API

let key = "be761d96072c0447097947c70d2686b6";

let recurso= "search";

let criterio = "movie";



let base_url = `http://api.themoviedb.org/3/`;

const call = async (url) => {
    let res = await axios.get(url);
    

    if (res.data.results){
        return res.data.results;

    }
    if (res.data.title){
        return res.data;
    }
    
}


const pintar = async (coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    const divPelisDomElement = document.getElementById("contenedor");
    
    // console.log(coleccionPintar);
    if (Array.isArray(coleccionPintar)) {
        coleccionPintar.forEach(pelicula => {
            divPelisDomElement.innerHTML += `<div class='Peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' width='200px' class='Picture'>
            </img></div><div class='infoPelis'><h2>${pelicula.title}</h2><p>${pelicula.overview}</p></div>`
        });
    }
    
    if (coleccionPintar.original_title){
        divPelisDomElement.innerHTML += `<div class='Peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${coleccionPintar.poster_path}' width='200px' class='Picture'>
            </img></div><div class='infoPelis'><h2>${coleccionPintar.original_title}</h2><p>${coleccionPintar.overview}</p></div>`
        console.log(coleccionPintar.poster_path);
        console.log(coleccionPintar.overview);
        console.log(coleccionPintar.original_title);
    }
    return;
};



const buscador = async () => {
    let query = valor.value;
    //Construccion de la URL 
    let url = `${base_url}${recurso}/${criterio}?api_key=${key}&query=${query}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
        
};
const buscadorID = async () => {
    let query = valorId.value;
    
    //Construccion de la URL 
    
    let url = `${base_url}${criterio}/${query}?api_key=${key}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
        
};


