const request = require('request');

const GetToken = (code) => {
    var client_id = 'b31e27acd21b459185707da6890ea79f'; // Your client id
    var client_secret = 'c2cef081c3894067afa17942e56064f7'; // Your secret
    var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code,
            redirect_uri: redirect_uri,
            grant_type: "authorization_code",
            client_id,
            client_secret
        }
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var cuerpo = JSON.parse(body);
            var access_token = cuerpo.access_token;
            var refresh_token = cuerpo.refresh_token;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            window.location = '/getuser';
        } else {
            window.location = '/login';
        }
    });

}
export default GetToken;


