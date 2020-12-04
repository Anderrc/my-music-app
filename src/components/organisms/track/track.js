import React from 'react';
import ButtonFavorite from '../../atoms/button-favorite/buttonFavorite';
import Image from '../../atoms/image/image'
import './track.scss';

const Track = (props) => {
    // console.log(props.data)
    return ( 
        <div className="track">
            <Image className="track__img img--track" src={props.data.track.album.images[0].url} />
            <p className="track__nombre" title={props.data.track.name}>{props.data.track.name} </p>
            <ButtonFavorite />
        </div>
     );
}
 
export default Track;