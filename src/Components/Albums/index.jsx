import LikeButton from "../LikeButton"
import { Link } from "react-router-dom"

function Albums ({albums}) {
    // const listAlbums = albums.map(album => 

    //     <div>
    //         <ul key={album.name}>
    //             <li>{album.name}</li>
    //             <li>{album.release_date}</li>
    //             <li><img style={{width: album.image_size, height: album.image_size}}src={album.cover_art_url}></img></li>
    //             <li><Link to={`/albums/${album.featured_song}`}>{album.featured_song}</Link></li>
    //             <LikeButton />
    //         </ul>
    //     </div>

    // )
    return(
        <div className="album-list">
            {albums.map(album => (
                <div className='album-box' key={album.name}>
                    <h2>{album.name}</h2>
                    <h3>{album.release_date}</h3>
                    <img style={{width: album.image_size, height: album.image_size}}src={album.cover_art_url}></img>
                    <p><Link to={`/albums/${album.featured_song}`}>{album.featured_song}</Link></p>
                    <LikeButton />
                 </div>

            ))}
        </div>
    )
}

export default Albums