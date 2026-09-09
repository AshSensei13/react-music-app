import { useAlbum } from "../../contexts/albums"
import LikeButton from "../LikeButton"
import { Link } from "react-router-dom"

function Albums () {
    const {album} = useAlbum()

    return(
        <div className="album-list">
            {album.map(album => (
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