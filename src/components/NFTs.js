import {React} from 'react'
import LF from "../img/load_fail.png"

const NFTs=({image,id, onRemove}) =>{

    return(
        <div>
            <img 
            src={image}
            alt={`NFT${id}`}
            loading="lazy"
            />
        </div>
    );
}

export default NFTs