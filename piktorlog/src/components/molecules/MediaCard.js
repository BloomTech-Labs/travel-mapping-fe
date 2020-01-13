import React from 'react';
import {Button, Card, Image, Dropdown, /*DropdownItem,*/ Modal, Popup, /*Divider*/} from 'semantic-ui-react';
import { /*Redirect,*/ Link } from 'react-router-dom';
import {getLocalDateAndTime} from '../../store/utils.js';

import styled from 'styled-components';


const StyledCardContent = styled(Card.Content)({
    // border: '1px solid black',
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
});

const MediaCard = ({mediaItem, albumData}) => {
    return (
        <Card>
            <Card.Content>
                <Modal
                    style = {{background: 'rgba(13, 13, 13)'}}
                    size = 'large'
                    // the trigger for this modal is the media item card
                    trigger = {
                        <StyledCardContent>
                            {/* Dropdown */}
                            <StyledDropdownTransparent
                                button
                                icon = 'ellipsis vertical' 
                            >                                
                                <Dropdown.Menu>
                                    <Link to= {{pathname:`/media/${mediaItem.media_id}/edit`, state: {'mediaItem':mediaItem, albumData:albumData}}} style = {{'textDecoration': 'none', color:'black'}}>                                    
                                        <Dropdown.Item text = 'edit'/>
                                    </Link>
                                    
                                    
                                    <Dropdown.Item text = 'delete' />
                                </Dropdown.Menu>
                            </StyledDropdownTransparent>

                            {/* Image */}
                            <Image src = {mediaItem.media_url} />
                        </StyledCardContent>
                    } 
                >
                    {/* The content of the modal */}
                    <StyledModalContent image>

                        <div style={{position:'relative', margin:'auto',}}>
                            {/* Dropdown */}
                            <StyledDropdownOpaque
                                button
                                icon = 'ellipsis vertical' 
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item text = 'edit' /> 
                                    <Dropdown.Item text = 'delete' />
                                </Dropdown.Menu>
                            </StyledDropdownOpaque>
                            
                            {/* Image */}
                            <Image wrapped size = 'huge' src = {mediaItem.media_url} />

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