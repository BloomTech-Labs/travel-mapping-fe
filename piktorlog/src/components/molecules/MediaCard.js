import React from 'react';
import {Button, Card, Image, Dropdown, DropdownItem, Modal} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

import styled from 'styled-components';


// clicking on media info opens the modal where media info can be seen, as well as edit and delete buttons
// clicking on edit button takes you to edit media page

const StyledCardContent = styled(Card.Content)({
    border: '1px solid black',
    position:'relative',
    'z-index':'0!important',
});

const StyledDropdown = styled(Dropdown)({
    position: 'absolute!important',
    top:'0',
    right:'0',
    'z-index':'1!important',
    background:'rgba(224,225,226,.4)!important'
});



const MediaCard = ({mediaItem}) => {
    console.log('mediaItem: ', mediaItem);
    console.log('Object.entries(mediaItem): ', Object.entries(mediaItem));

    return (
        <Card>
            <Card.Content>
                
                    <StyledCardContent>
                        {/* Dropdown Menu */}
                        <StyledDropdown
                            button
                            icon = 'ellipsis vertical' 
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item text = 'edit' /> 
                                <Dropdown.Item text = 'delete' />
                            </Dropdown.Menu>
                        </StyledDropdown>

                        {/* Image */}
                        <Image src = {mediaItem.media_url} />
                    </StyledCardContent>
                                    
            </Card.Content>
        </Card>
    )
}

export default MediaCard;




// {/* Dropdown Menu */}
// <Card.Content>
// {/* <ul>
//     {Object.entries(mediaItem).map((keyValPair, index) => (
//         <li key = {index}> {String(keyValPair[0])}: {String(keyValPair[1])} </li>
//     ))}
// </ul> */}
// <ul>
//     <li> Title: {mediaItem.title}  </li>
//     <li> Caption: {mediaItem.caption}</li>
//     <li> Keywords: {mediaItem.keywords}</li>
//     <li> Created At: {mediaItem.created_at}</li>
// </ul>
// </Card.Content>





            


            
// {/* <Modal trigger = {<Button></Button>}>
//     <Modal.Content image>
//         <Image wrapped size = 'medium' src = {mediaItem.media_url} /> 
//     </Modal.Content>
// </Modal> */}























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