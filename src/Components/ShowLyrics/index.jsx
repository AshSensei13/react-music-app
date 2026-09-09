import { useEffect, useState } from "react"

function ShowLyrics ({album, artist}) {
    const [lyrics, setLyrics] = useState("")
    useEffect(() => getLyrics(), [])
    
    async function getLyrics() {
        const fetchAPI = `https://api.lyrics.ovh/v1/${artist.name}/${album.featured_song}`
        const response = await fetch(fetchAPI)
        const result = await response.json()
        const lyricsRes = result.lyrics
        setLyrics(lyricsRes)
    }
}