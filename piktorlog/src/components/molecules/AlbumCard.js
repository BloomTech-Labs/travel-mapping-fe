import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';

const AlbumCard = (props) => (
    <Card>
        <Card.Content>
            {/* <Image src ={props.src}/> */}
            <Card.Header>{props.albumData.title}</Card.Header>
            <p>{props.albumData.description+'...'}</p>
        </Card.Content>
        <Card.Content extra>
            <Button>View Album</Button>
        </Card.Content>
    </Card>
)

export default AlbumCard;