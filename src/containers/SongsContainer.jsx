import React, { useState, useEffect } from 'react';
import SongsList from '../components/SongsList';

const SongsContainer = () => {
    const [songs, setSongs] = useState([])
    
    useEffect(() =>{
        getSongs();
    }, [])
    
    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then((result) => result.json())
        .then((data) => {
            const songsArray = data.feed.entry
            setSongs(songsArray)
            console.log(songsArray)
        })
    }

    return (
        <>
            This is songs container
            <SongsList songs={songs}/>
        </>

    );
}

export default SongsContainer;