import React from 'react';
import {Card} from 'semantic-ui-react';
import AlbumCard from '../molecules/AlbumCard';

const AlbumsList = (props) => {
    return (
        <Card.Group>
            {props.map((albumData, index) => (
                <AlbumCard key={index} albumData={albumData}/>
            ))}
        </Card.Group>
    )
}

export default AlbumsList;