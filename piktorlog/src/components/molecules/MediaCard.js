import React, { useState, useEffect } from 'react';
import {Button, Card, Image, Dropdown, Modal, Popup} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {getLocalDateAndTime} from '../../store/utils.js';
import {deleteMediaFromAlbumReq} from '../../store/requests/media'

import styled from 'styled-components'; 


const StyledCardContent = styled(Card.Content)({
    // border: '1px solid red',
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
    position:'relative',
    'z-index':'0',
    background:'rgba(38,38,38,0.15)!important',
    // border: '2px solid green',
});

// const StyledDropdownItem = styled(Dropdown.Item)({
//     // border: '1px solid red',
//     // margin:'auto!important',
//     // position:'relative',
//     // left:'50%'
//     // 'z-index':'0!important',
// });

const StyledDropdownMenu = styled(Dropdown.Menu)({
    background:'rgba(0,0,0,0)!important'
});

// const StyledButton = styled(Button)({
//     // border:'3px solid red!important',
//     background:'rgba(224,225,226,0.8)!important'
// });



const MediaCard = ({mediaItem, albumData, updateAlbumAfterMediaDelete}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {setModalOpen(true)};
    const handleClose = () => {setModalOpen(false)};

    const deleteMediaFromAlbum = () => {
        deleteMediaFromAlbumReq(mediaItem.media_id, albumData.album_id); //API request to delete album
        updateAlbumAfterMediaDelete(); // function that signals parent component to re-render to due deletion of image item 
        handleClose(); // close the modal 
    };

    return (
        <Card>
            <Card.Content>
                <Modal
                    style = {{background: 'rgba(13, 13, 13)'}}
                    size = 'large'
                    // the trigger for this modal is the media item card
                    trigger = {
                        <Card.Content>
                            {/* Dropdown */}
                            <StyledDropdownTransparent
                                button
                                icon = 'ellipsis vertical' 
                            >                                
                                <StyledDropdownMenu>
                                    
                                    <Link to= {{pathname:`/media/${mediaItem.media_id}/edit`, state: {'mediaItem':mediaItem, albumData:albumData}}} style = {{'textDecoration': 'none', color:'black', position:'relative'}}>                                    
                                        <Button fluid>
                                            <Dropdown.Item text = 'edit'/>
                                        </Button>
                                    </Link>
                                    

                                    <Modal
                                        style = {{background: 'rgba(13, 13, 13)'}}
                                        size = 'tiny'
                                        trigger = {
                                            <Button fluid>
                                                <Dropdown.Item text = 'delete' onClick ={()=>handleOpen()} />
                                            </Button>
                                        }
                                        open = {modalOpen}
                                        onClose = {() =>handleClose()}
                                    >
                                        {/* Content of the delete modal */}
                                        <Modal.Content >
                                            <h3>Are you sure you want to delete this item from your album?</h3>
                                                <Button onClick= {deleteMediaFromAlbum()} color='green'>
                                                    Delete
                                                </Button>
                                                <Button color='red' onClick= {() =>handleClose()}>
                                                    Cancel
                                                </Button>
                                        </Modal.Content>
                                    </Modal>
                                </StyledDropdownMenu>
                            </StyledDropdownTransparent>

                            {/* Image */}
                            <Image src = {mediaItem.media_url} />
                        </Card.Content>
                    } 
                >
                    {/* The content of the modal */}
                    <StyledModalContent image>

                        <div style={{position:'relative', margin:'auto',/*border: '1px solid red'*/}}>
                            {/* Dropdown */}
                            <StyledDropdownOpaque
                                button
                                icon = 'ellipsis vertical' 
                            >
                                <StyledDropdownMenu>
                                    <Link to= {{pathname:`/media/${mediaItem.media_id}/edit`, state: {'mediaItem':mediaItem, albumData:albumData}}} style = {{'textDecoration': 'none', color:'black'}}>                                    
                                        <Button fluid>
                                            <Dropdown.Item text = 'edit'/>
                                        </Button>
                                    </Link> 
                                    <Modal
                                        style = {{background: 'rgba(13, 13, 13)'}}
                                        size = 'tiny'
                                        trigger = {
                                            <Button fluid>
                                                <Dropdown.Item text = 'delete' onClick ={()=>handleOpen()} />
                                            </Button>
                                        }
                                        open = {modalOpen}
                                        onClose = {() =>handleClose()}
                                    >
                                        {/* Content of the delete modal */}
                                        <Modal.Content >
                                            <h3>Are you sure you want to delete this item from your album?</h3>
                                                <Button onClick= {() =>deleteMediaFromAlbum()} color='green'>
                                                    Delete
                                                </Button>
                                                <Button color='red' onClick= {() =>handleClose()}>
                                                    Cancel
                                                </Button>
                                        </Modal.Content>
                                    </Modal>
                                </StyledDropdownMenu>
                            </StyledDropdownOpaque>
                            
                            {/* Image */}
                            <Image  size = 'huge' src = {mediaItem.media_url} />

                            {/* Popup button */}
                            <Popup 
                                position='bottom left'
                                trigger={<Button icon='info circle' style={{position:'absolute', left:0, top:0, background:'rgba(224,225,226,.6)'}}/>}
                            >
                                <Popup.Content>
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{mediaItem.title}</Card.Header>
                                            <Card.Description>{mediaItem.caption}</Card.Description>
                                            <Card.Meta>Created On: {getLocalDateAndTime(mediaItem.created_at)}</Card.Meta>
                                            <Card.Meta>Last Updated: {getLocalDateAndTime(mediaItem.updated_at)}</Card.Meta>                                            
                                            <Card.Meta>
                                                Keywords: {mediaItem.keywords.map((keyword,index) => (
                                                    <span key = {index}>{keyword},</span>                                            
                                                ))}
                                            </Card.Meta>
                                        </Card.Content>
                                    </Card>
                                </Popup.Content>
                            </Popup>
                        </div>

                    </StyledModalContent>

                </Modal>              
            </Card.Content>
        </Card>
    )
}

export default MediaCard;