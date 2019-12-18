import React from 'react';
import {Card, Image} from 'semantic-ui-react';

// const MediaCard = ({mediaItem}) => {
const MediaCard = ({mediaItem}) => {
    console.log('mediaItem: ', mediaItem);
    console.log('Object.entries(mediaItem): ', Object.entries(mediaItem));
    return (
        <Card>
            <Image src = {mediaItem.media_url} />
            <Card.Content>
                <ul>
                    {Object.entries(mediaItem).map((keyValPair, index) => (
                        <li key = {index}> {String(keyValPair[0])}: {String(keyValPair[1])} </li>
                    ))}
                </ul>
            </Card.Content>
            
        </Card>
    )
}

export default MediaCard;

























// // Eric's code for same component

// import React from 'react';
// import styled from 'styled-components';
// import { Button, Card, Image } from 'semantic-ui-react';

// const ImageCard = styled(Card)``;

// const _ImageCard = ({ image }) => {
//   return (
//     <ImageCard>
//       <Image src={image.media_url} wrapped ui={false} />
//       <Card.Content>
//         <Button floated='right' icon='ellipsis vertical' />
//         <Card.Header>{image.title}</Card.Header>
//         <Card.Description>{image.caption}</Card.Description>
//         <Card.Meta>Created On: {image.created_at}</Card.Meta>
//         <Card.Meta>Last Updated: {image.updated_at}</Card.Meta>
//       </Card.Content>
//     </ImageCard>
//   );
// };

// export default _ImageCard;