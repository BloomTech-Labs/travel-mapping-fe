import React/*, {useEffect, useState}*/ from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import {getAlbumMediaReq} from '../../store/requests/media';

const AlbumCard = (props) => {
    // const [albumMedia, setAlbumMedia] = useState([]);

    // useEffect(() => {
    //   (async () => {
    //     const data = await getAlbumMediaReq(props.albumData.album_id);
    //     console.log('props: ', props)
    //     console.log('Album Media Data: ', data);
    //     setAlbumMedia(data);
    //   })();
    // }, [props.albumData.album_id]);
    
    return (
        <Card>
            <Card.Content>
                <Image src = {props.albumData.cover_url}/>
                <Card.Header>{props.albumData.title}</Card.Header>
                <Card.Content>
                    <p>{props.albumData.description+'...'}</p>
                </Card.Content>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/albums/${props.albumData.album_id}`}><Button>View Album</Button></Link>
            </Card.Content>
        </Card>
    )
}

export default AlbumCard;