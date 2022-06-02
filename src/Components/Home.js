import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export const Home = () => {
  const [vinylList, setVinylList] = useState([])
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const fetchVinyls = () => {
    fetch("http://localhost:3000/vinyls")
    .then((response) => response.json())
    .then((data) => setVinylList(data.vinyls))
  }




  useEffect(() => fetchVinyls(),  [])

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/vinyls" ,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      artistName: artist,
      albumName: album
      })
    }).then(() => {
      setArtist("")
      setAlbum("")
      fetchVinyls()
    })
    }
  
  let vinylDisplay = ""
  if(vinylList.length > 0) {
  vinylDisplay = vinylList.map((vinyl, i) => {
    return (
     <Link to= {`/vinyl/${vinyl._id}`} key = {i}>
     <li> {`${vinyl.artistName} ${vinyl.albumName}`}</li> </Link>
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