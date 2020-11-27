import clienteAxios from '../../config/axios'
const Perfil = async() => {

    let result  = [];
    await clienteAxios.get('https://api.spotify.com/v1/me',{
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token")},
    })
        .then(respuesta => {
            result = respuesta.data;
        }).catch(
            err => console.log(err)
        )
     return result;
}

export default Perfil;