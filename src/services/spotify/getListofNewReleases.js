import clienteAxios from '../../config/axios'
async function NewReleases() {
    let result = [];
    await clienteAxios.get('https://api.spotify.com/v1/browse/new-releases', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
    })
        .then(respuesta => {
            result = respuesta.data.albums.items;
        }).catch(
            err => console.log(err)
        )
    return result;
}

export default NewReleases;