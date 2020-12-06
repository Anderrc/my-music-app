import clienteAxios from '../../config/axios'
async function GetSavedTracks(inicial) {
    let result = [];
    await clienteAxios.get('https://api.spotify.com/v1/me/tracks?offset='+inicial+'&limit=20', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
    })
        .then(respuesta => {
            result = respuesta.data.items;
        }).catch(
            err => console.log(err)
        )
    return result;
}

export default GetSavedTracks;