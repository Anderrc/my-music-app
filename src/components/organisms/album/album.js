import Image from "../../atoms/image/image";
import './album.scss';

const Album = (props) => {
    return ( 
        <div className="album">
            <Image src={props.data.images[0].url} className="img--album" />
            <span>{props.data.name}</span>
        </div>
    );
}
 
export default Album;