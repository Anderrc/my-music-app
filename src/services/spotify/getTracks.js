import clienteAxios from '../../config/axios'
async function GetTracksList(id) {
    let result = [];
    await clienteAxios.get("https://api.spotify.com/v1/playlists/"+id+"/tracks", {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
    })
        .then(respuesta => {
            result = respuesta.data.items;
        }).catch(
            err => console.log(err)
        )
    return result;
}

export default GetTracksList;