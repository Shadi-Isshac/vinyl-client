import React from 'react'
import { useEffect, useState } from 'react';



export const Home = () => {
  const [vinylList, setVinylList] = useState([])
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  
useEffect(() => {
    fetch("http://localhost:3000/vinyls/")
    
    .then((data) => setVinylList(data.vinyls))
  },[])

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/vinyls/" ,{
      method: "POST",
      body: JSON.stringify({
      artistName: artist,
      albumName: album
      })
    } ).then((res) => console.log(res))
    setArtist("")
    setAlbum("")
  }
  
  let vinylDisplay = ""
  if(vinylList.length > 0) {
  vinylDisplay = vinylList.map((vinyl, i) => {
    return (
      <li key = {i}>{`${vinyl.artistName} ${vinyl.albumName}`}</li>
    )
  })
  }
  
  return (
    <div>
      <h1>Artists and Vinyls</h1>
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
        value="Add Vinyl"
        />
       </form>


      <ul>{vinylDisplay}</ul>
      </div>

  )
}

export default Home;