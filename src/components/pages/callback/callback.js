import React,{useEffect, useState, useContext} from 'react';
import GetToken from '../../../services/spotify/getToken'
const queryString = require('query-string')

const Callback = (props) => {

    const [consumo, setconsumo] = useState(true);
    useEffect(() => {
        if(consumo){
            const parsed = queryString.parse(window.location.search);
            GetToken(parsed.code);
            // props.consulta(true)
            setconsumo(false)
            
        }
    }, [consumo])

    return ( 
        <div>
            
        </div>
     );
}
 
export default Callback;
