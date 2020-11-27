import clienteAxios from '../../config/axios'
const GetMusic = async() =>{

    let result ="";
    let token ="AQB0Y5n2TD9JeyJ6QloH_y5PNAKZpU9lO6xQlg87kQnHH-3koBU120jpETQO4_S_wek5u6GxUcpcoZPHf5j4oPOgeRj9FQ9JQxQE3hMF-vGY_Reaz0Jx9MiWfXCvVNYrJRCbdu3x4HkFHkuH2UjRKrHUigQAMMH1QMM57CtQEXKL0q6ZnvvBwvz9QMqS1KsLSMP0Jgq1xsHENx3H8FGdBlHiMclkmw";
    await clienteAxios.get('https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f',{        
        headers: {
            Authorization: "Bearer " + token  
            }
        }
    )
        .then(respuesta => {
            result = respuesta;
        }).catch(
            err => console.log(err)
        )
    return result;
}
export default GetMusic;


