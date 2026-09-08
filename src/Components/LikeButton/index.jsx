import { useState } from "react"

function LikeButton () {
    const [liked, setLiked] = useState(false)
    const toggleLike = () => {
        setLiked(!liked)
    }
    return (
        <button onClick={toggleLike}>
            {liked ? '❤️ Liked' : '♡ Like'}
        </button>
    )
}

export default LikeButton