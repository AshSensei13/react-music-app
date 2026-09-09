import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useArtist } from "../../contexts/artist"

function ShowLyrics () {
    const {artist} = useArtist()
    const [lyrics, setLyrics] = useState("")
    const {featured_song} = useParams()
    const navigate = useNavigate()

    useEffect(() => {getLyrics()}, [])
    
    async function getLyrics() {
        const fetchAPI = `https://api.lyrics.ovh/v1/${artist.name}/${featured_song}`
        const response = await fetch(fetchAPI)
        const result = await response.json()
        const lyrics = result.lyrics
        setLyrics(lyrics)
    }

    return (
        <div className="lyrics-box">
        <button onClick={() => navigate('/albums')}>Back to Albums</button>
        <p>{lyrics}</p>
        </div>
    )
}

export default ShowLyrics;