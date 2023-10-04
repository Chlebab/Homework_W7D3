import React from 'react';
import SongItem from './SongItem'

const SongsList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index+1}/>
    })

    return (
        <div>
            {songsItems}
        </div>


    );
}

export default SongsList;