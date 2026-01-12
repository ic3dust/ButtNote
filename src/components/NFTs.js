import {React} from 'react'

const NFTs=({image,id}) =>{
    return(
        <div>
            <img key={id} src={image}/>
        </div>
    );
}

export default NFTs