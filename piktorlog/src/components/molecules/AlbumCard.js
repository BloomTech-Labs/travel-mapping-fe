import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AlbumCard = (props) => (
    <Card>
        <Card.Content>
        <Image src = "https://upload.wikimedia.org/wikipedia/commons/7/72/Detail_of_the_Central_Branch_of_Greater_Victoria_Public_Library%2C_Victoria%2C_British_Columbia%2C_Canada_01.jpg"/>
            {/* <Image src = {props.albumData.cover_url}/> */}
            <Card.Header>{props.albumData.title}</Card.Header>
            <p>{props.albumData.description+'...'}</p>
        </Card.Content>
        <Card.Content extra>
            <Link to={`/albums/${props.albumData.album_id}`}><Button>View Album</Button></Link>
        </Card.Content>
    </Card>
)

export default AlbumCard;