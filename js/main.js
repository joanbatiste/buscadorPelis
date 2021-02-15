
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
    
    if(!res.data.results){
        error = new Error("La url era incorrecta");
        return error;
    }
    
    return res.data.results;
}

const pintar = async (coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    const divPelisDomElement = document.getElementById("contenedor");
    
    console.log(coleccionPintar);
    if (Array.isArray(coleccionPintar)) {
        coleccionPintar.forEach(pelicula => {
            divPelisDomElement.innerHTML += `<div class='Peliculas'><img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' width='200px' class='Picture'></img></div><div class='infoPelis'><h2>${pelicula.title}</h2><p>${pelicula.overview}</p></div>`
        });
    }else{

    };
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


