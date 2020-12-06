const [datos, setDatos] = useState({})

    function obtener(){navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);}
    function mostrar(posicion){
        let latitude, longitude, exactitud;

        latitude=posicion.coords.latitude;
        longitude=posicion.coords.longitude;
        exactitud=posicion.coords.accuracy;

        setDatos({latitude,longitude,exactitud})
        
    }    

    function gestionarErrores(error){

        alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

        'a internet y habilite la opción permitir compartir ubicación física');

    }

    <button onClick={obtener}>Obtener</button>
            <p>latitude = {datos.latitude}</p>
            <p>longitude = {datos.longitude}</p>
            <p>exactitud = {datos.exactitud}</p>