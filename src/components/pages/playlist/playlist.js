import React,{useEffect,useState} from 'react';
import GetTracksList from '../../../services/spotify/getTracks';
import Aside from '../../molecules/aside/aside';
import Track from '../../organisms/track/track';
import './playlist.scss';

const PlayList = (props) => {
    const [listTracks, setListTracks] = useState([])
    const [consulta, setConsulta] = useState(true)
    useEffect(() => {
        if(consulta){
            const getTracks = async () => {
                await GetTracksList(props.match.params.id).then(res => {
                    setListTracks(res)
                    setConsulta(false)
                    console.log("ACA TOY!")
                }).catch(err=>{
                    console.log(err)
                    setListTracks([])
                })
            }
            getTracks();
        }
    }, [consulta]);
    console.log(listTracks)
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
           </div>
        </div>
    );
}
 
export default PlayList;