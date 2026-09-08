function Artist({artist}) {
    return(
        <div>
            <h2>{artist.name}</h2>
            <h2>{artist.genre}</h2>
            <p>{artist.description}</p>
        </div>
    )
}

export default Artist