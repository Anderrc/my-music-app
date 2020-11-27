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
        <div className="home">
            <Header />
            <div className="body">
                <aside className="body__aside">
                    <Aside className="home__aside" />
                </aside>
                <div className="body__body">
                    <h2 className="body__body__titulo-pagina">Nuevos Lanzamientos</h2>
                    {listNewRelease.map(item => (
                        <Album data={item} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;