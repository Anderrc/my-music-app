import clienteAxios from '../../config/axios'
async function ListasUser(userId) {
    let result = [];
    await clienteAxios.get('https://api.spotify.com/v1/users/' + userId + '/playlists', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
    })
        .then(respuesta => {
            result = respuesta.data;
        }).catch(
            err => console.log(err)
        )
    return result;
}

export default ListasUser;