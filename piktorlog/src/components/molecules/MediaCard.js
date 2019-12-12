import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const MediaCard = ({media}) => {
    return (
        <Card>
            <Image src = {media.media_url} />
            <Card.Content>
                <div>
                    {Object.entries(media).map(keyValPair => (
                        <h3> {keyValPair[0]}: {keyValPair[1]} </h3>
                    ))}
                </div>
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