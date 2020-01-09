import React from 'react';
import {Button, Card, Image, Dropdown, DropdownItem, Modal, Popup} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

import styled from 'styled-components';


// clicking on media info opens the modal where media info can be seen, as well as edit and delete buttons
// clicking on edit button takes you to edit media page

const StyledCardContent = styled(Card.Content)({
    border: '1px solid black',
    position:'relative',
    'z-index':'0!important',
});

const StyledDropdownTransparent = styled(Dropdown)({
    position: 'absolute!important',
    top:'0',
    right:'0',
    'z-index':'1!important',
    background:'rgba(224,225,226,.4)!important'
});

const StyledDropdownOpaque = styled(Dropdown)({
    position: 'absolute!important',
    top:'0',
    right:'0',
    'z-index':'1!important',
    background:'rgba(224,225,226,0.6)!important'
});

const StyledModalContent = styled(Modal.Content)({
    // border: '1px solid red',
    position:'relative',
    'z-index':'0!important',
    background:'rgba(38,38,38,0.15)!important',
    // background:'rgba(0,0,0,0.1)!important'
});

const StyledPopup = styled(Popup)({
    // position: 'absolute!important',
    // top:'0',
    // left:'0',
    // 'z-index':'2!important',
    // border:'2px solid red!important'
    // background:'rgba(224,225,226,.4)!important'

});


const MediaCard = ({mediaItem}) => {
    console.log('mediaItem: ', mediaItem);
    console.log('Object.entries(mediaItem): ', Object.entries(mediaItem));
 
    return (
        <Card>
            <Card.Content>
                <Modal 
                    trigger = {
                        <StyledCardContent>
                            {/* Dropdown Menu */}
                            <StyledDropdownTransparent
                                button
                                icon = 'ellipsis vertical' 
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item text = 'edit' /> 
                                    <Dropdown.Item text = 'delete' />
                                </Dropdown.Menu>
                            </StyledDropdownTransparent>

                            {/* Image */}
                            <Image src = {mediaItem.media_url} />
                        </StyledCardContent>
                    }
                    style = {{background: 'rgba(224,225,226,.4)'}}
                    size = 'large'
                >

                    <StyledModalContent image>
                        <div style={{position:'relative', margin:'auto',}}>
                            <StyledDropdownOpaque
                                button
                                icon = 'ellipsis vertical' 
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item text = 'edit' /> 
                                    <Dropdown.Item text = 'delete' />
                                </Dropdown.Menu>
                            </StyledDropdownOpaque>
                            
                            <Image wrapped size = 'fullscreen' src = {mediaItem.media_url} />
                            <StyledPopup 
                                position='bottom left'
                                trigger={
                                    <Button icon='info circle' style={{position:'absolute', left:0, top:0, background:'rgba(224,225,226,.6)'}}/>
                                }
                            >
                                <Popup.Content>
                                    Media Info:  
                                </Popup.Content>
                            </StyledPopup>
                        </div>                       
                    </StyledModalContent>

                </Modal>              
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