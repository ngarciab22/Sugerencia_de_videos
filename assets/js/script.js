//Definición de una IIFE
const iife = (() => {
    //Función para manipular elementos html
    const SrcMultimedia = (url, id) => {
        let elemento = document.getElementById(id);
        elemento.setAttribute('src', url);
    };

    //Retorna método "play" que utiliza la función setSrcMultimedia
    return {
        play(url, id) {
            SrcMultimedia(url, id);
        }
    }
})();

//Definición de la clase Multimedia
class Multimedia {
    constructor(url) {
        this._url = url; // URL del contenido multimedia
    }
    //Getter para  URL
    get url() {
        return this._url;
    }
    //Setter para URL
    set url(nuevaUrl) {
        this._url = nuevaUrl;
    }

    //Método para establecer el inicio del contenido multimedia
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

//Definición de la clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); 
        this._id = id;
    }
    //Getter para el ID
    get id() {
        return this._id;
    }
    //Setter para el ID
    set id(nuevaId) {
        this._id = nuevaId;
    }
    //Método para reproducir el contenido multimedia
    playMultimedia() {
        iife.play(this.url, this._id);
    }
    //Método para establecer el tiempo de inicio del contenido multimedia
    setInicio(tiempo) {
        this.url = `${this.url}?start=${tiempo}`;
    }
}

//Creación de instancias de Reproductor
const music = new Reproductor('https://www.youtube.com/embed/n-IwmbARwBo?si=vUV37cw7z_ITa4qI', 'musica');
const movie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/csSaSrJJPRs?si=C_AVJNi5Xalgmx4A', 'series');

//Establecimiento del tiempo de inicio de movie
movie.setInicio(105);

//Reproducción del contenido multimedia para cada instancia
music.playMultimedia();
serie.playMultimedia();
movie.playMultimedia();
