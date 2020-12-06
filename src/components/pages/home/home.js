import React, { useContext, useEffect, useState } from 'react';
import Header from '../../organisms/header/header';
import './home.scss'
// import Perfil from '../../../services/spotify/perfil'
// import ListasUser from '../../../services/spotify/getListUser'

import {AppContext} from '../../../provider/usuario'
// import ListasUsuario from '../../molecules/listas-usuario/listasUsuario';
import Aside from '../../molecules/aside/aside';
import NewReleases from '../../../services/spotify/getListofNewReleases';
import Album from '../../organisms/album/album';

const Home = () => {

    const [usuario, setUsuario] = useContext(AppContext);
    console.log(usuario);
    const [listNewRelease, setlistNewRelease] = useState([])
    useEffect(() => {
        const getNewReleases = async () => {
            await NewReleases().then(res => {
                setlistNewRelease(res)
            })
        }
        getNewReleases();
    }, []);
    console.log(listNewRelease)
    return (
        <div className="home contenedor__pagina">
            <aside className="body__aside">
                <Aside className="home__aside" />
            </aside>

            <div className="contenido">
                <h2 className="titulo-pagina">Nuevos Lanzamientos</h2>
                {listNewRelease.map(item => (
                    <Album data={item} />
                ))}
            </div>
        </div>
    );
}

export default Home;