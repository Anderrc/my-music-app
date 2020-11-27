import clienteAxios from '../../config/axios'
async function GetAlbum(url) {
    let result = [];
    await clienteAxios.get(url, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
    })
        .then(respuesta => {
            result = respuesta.data.albums.items;
        }).catch(
            err => console.log(err)
        )
    return result;
}

export default GetAlbum;