
//funciones
let valor = document.getElementById("buscador");
let valorId = document.getElementById("buscadorID");
//Recursos API

let key = "be761d96072c0447097947c70d2686b6";

let recurso= "search";

let criterio = "movie";

let base_url = `https://api.themoviedb.org/3/`;


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
        console.log(coleccionPintar);
        coleccionPintar.forEach(pelicula => {
            divPelisDomElement.innerHTML += `<div id='peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}'></img></div>
            <div id='textos'><h2>${pelicula.title}</h2>
            <p>${pelicula.overview}</p>
            </div>`
        });
    }
    
    if (coleccionPintar.original_title){
        divPelisDomElement.innerHTML += `<div class='peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${coleccionPintar.poster_path}' width='200px' class='picture'>
            </img></div><div class='infoPelis'><h2>${coleccionPintar.original_title}</h2><p>${coleccionPintar.overview}</p></div>`
        
    }
    return;
};



const buscador = async () => {
    let query = valor.value;
    //Construccion de la URL 
    let url = `${base_url}${recurso}/${criterio}?api_key=${key}&language=es-ES&query=${query}`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
        
};
const buscadorID = async () => {
    let query = valorId.value;
    
    //Construccion de la URL 
    
    let url = `${base_url}${criterio}/${query}?api_key=${key}&language=es-ES`; 
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);
        
};


