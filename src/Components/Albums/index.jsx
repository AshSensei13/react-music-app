import LikeButton from "../LikeButton"

function Albums ({albums}) {
    const listAlbums = albums.map(album => 
        <ul key={album.name}>
            <li>{album.name}</li>
            <li>{album.release_date}</li>
            <li><img style={{width: album.image_size, height: album.image_size}}src={album.cover_art_url}></img></li>
            <LikeButton />
        </ul>
    )
    return(
        <div>{listAlbums}</div>
    )
}

export default Albums