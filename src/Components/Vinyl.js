import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const Vinyl = () => {
  const [vinyl, setVinyl] = useState([])
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const id = useParams().id

  useEffect(() => {
    fetch(`http://localhost:3000/vinyls/${id}`)
    .then((res) => res.json())
    .then((data) => setVinyl(data.vinyl))
  },[])

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/vinyls/${id}` ,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      artistName: artist,
      albumName: album
      })
    } ).then(res => res.json())
    .then((newVinyl) => setVinyl(newVinyl.vinyl))
    setArtist("")
    setAlbum("")
  }
  
  const handleDelete = event => {

  }
  
  let vinylDisplay = ""
  if(vinyl) {

     vinylDisplay = <li>{`${vinyl.artistName} ${vinyl.albumName}`}</li>
    }
  
  return (
    <div>
      <h1>Vinyl</h1>
      <ul>{vinylDisplay}</ul>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder= "Artist Name"
        value={artist}
        onChange={handleArtistChange}
        />
        <input
        type="text"
        placeholder= "Album Name"
        value={album}
        onChange={handleAlbumChange}
        />
        <input
        type="submit"
        value="Edit Vinyl"
        />
       </form>
        <button onClick = {handleDelete}>Delete</button>

      
      </div>

  )
}

export default Vinyl;
