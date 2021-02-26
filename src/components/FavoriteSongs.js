import React from "react";

const FavSong = (props) => {
  const  {favSongs, deleteFavSong} = props
  const loaded = ()=>{
    return(
      <div>
        {favSongs.map(song=>{
          return(
            <article>
              <div className="song-name">
                  <p>{song.title}</p>
                </div>

                <div className="artist-name">
                  <p> {song.artist} </p>
                </div>

                <div className="song-length">
                  <p> {song.time}</p>
                </div>
                <button onClick={()=>{deleteFavSong(song)}}>X</button>
              </article>
          )
        })
      }
      </div>
    )
  }
  const loading = <h3>Add your favorites</h3>
  return (
    <div>
      <h2>Favorites List</h2>
      {favSongs.length>0 ? loaded(): loading}
    </div>
  );
};

export default FavSong;
