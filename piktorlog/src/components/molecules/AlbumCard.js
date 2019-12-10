import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AlbumCard = (props) => (
    <Card>
        <Card.Content>
            {/* <Image src ={props.src}/> */}
            <Card.Header>{props.albumData.title}</Card.Header>
            <p>{props.albumData.description+'...'}</p>
        </Card.Content>
        <Card.Content extra>
            <Link to={`/albums/${props.albumData.album_id}`}><Button>View Album</Button></Link>
        </Card.Content>
    </Card>
)

export default AlbumCard;