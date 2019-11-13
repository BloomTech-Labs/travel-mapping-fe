import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';

const AlbumCard = (props) => (
    <Card>
        <Card.Content>
            <Image src ={props.src}/>
            <Card.Header>{props.title}</Card.Header>
            <Card.Descripton>{props.caption.slice(150)+'...'}</Card.Descripton>
        </Card.Content>
        <Card.Content extra>
            <Button>Details</Button>
        </Card.Content>
    </Card>
)

export default AlbumCard;