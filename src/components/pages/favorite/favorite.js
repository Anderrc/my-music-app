import React,{useEffect,useState} from 'react';
import GetSaveTracks from '../../../services/spotify/getSavedTracks';
import Aside from '../../molecules/aside/aside';
import Track from '../../organisms/track/track';
import './favorite.scss';

const Favorite = (props) => {
    const [listTracks, setListTracks] = useState([])
    const [consulta, setConsulta] = useState(true)
    useEffect(() => {
        if(consulta){
            const getTracks = async () => {
                await GetSaveTracks(listTracks.length).then(res => {
                    setListTracks(res)
                    setConsulta(false)
                }).catch(err=>{
                    console.log(err)
                    setListTracks([])
                })
            }
            getTracks();
        }
    }, [consulta]);
    const cargarMas = async () => {
        await GetSaveTracks(listTracks.length).then(res => {
            let aux = res.concat(listTracks);
            setListTracks(aux);
            console.log("ACA TOY!")
        }).catch(err=>{
            console.log(err)
            setListTracks([])
        })
    }
    return (  
        <div className="playlist contenedor__pagina">
            <aside className="body__aside">
                <Aside className="home__aside" />
            </aside>
           <div className="contenido">
                <h2 className="titulo-pagina">Nuevos Lanzamientos</h2>
                {listTracks.map(item=>(
                        <Track data={item} key={item.track.id}/>
                    ))} 
                <button onClick={cargarMas} type="button" className="playlist_ver-mas">Ver mas</button>
           </div>
        </div>
    );
}
 
export default Favorite;