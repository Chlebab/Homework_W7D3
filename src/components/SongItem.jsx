import React from 'react';

const SongItem = ({song, index}) => {

    return (  
        <div>
            <ul>
                <li>Rank: {index}</li>
                <li>Title: {song['im:name'].label}</li>
                <li>Author: {song['im:artist'].label}</li>
            </ul>
        </div>
    );
}

export default SongItem;