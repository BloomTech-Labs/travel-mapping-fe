import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card, Divider, Search, Dropdown, Modal } from 'semantic-ui-react';
import MediaCard from '../components/molecules/MediaCard';
import {getAlbumMediaReq} from '../store/requests/media';
import {getUserAlbumsReq, deleteAlbumReq} from '../store/requests/albums';
import {getLocalDateAndTime} from '../store/utils.js';

import { useGetAlbum, useGetAlbumMedia } from '../store/hooks/useImmediateFetch';

/**
 * The AlbumOverview need to receive all of the album information. It can query for the images as it is loading
 * album = {
 *   title: "",
 *   description: "",
 *   dateCreated: "",
 *   lastUpdated: "",
 *   coverImageURL: "",
 *   albumMeta: ["meta1", "meta2", "meta3", "etc..."],
 * }
 */

const StyledDropdownTransparent = styled(Dropdown)({
  position: 'absolute!important',
  top:'0',
  right:'0',
  'z-index':'1!important',
  background:'rgba(224,225,226,.4)!important'
});

const StyledDropdownMenu = styled(Dropdown.Menu)({
  background:'rgba(0,0,0,0)!important', 
});

// const StyledButton = styled(Button)({
//   // border:'3px solid red!important',
//   background:'rgba(224,225,226,0.8)!important'
// });

const AlbumOverview = (props) => {
  console.log('props: ', props)
  const [availableAlbums, setAvailableAlbums] = useState([]);
  const [albumData, setAlbumData] = useState({});
  const [albumMedia, setAlbumMedia] = useState([]);
  const [inputState, setInputState] = useState('');

  // const [albumData] = useGetAlbum(props.match.params.id);
  // const [albumMedia] = useGetAlbumMedia(props.match.params.id);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {setModalOpen(true)};
  const handleClose = () => {setModalOpen(false)};

  const [toHomePage, setToHomePage] = useState(false);

  const deleteAlbum = () => {
    deleteAlbumReq(albumData.album_id); //API request to delete media from album;
    handleClose();
    setToHomePage(true);
  }

  const updateAlbumAfterMediaDelete = async() => {
    const userAlbums = await getUserAlbumsReq(props.state.currentUser.user_id);
      console.log('userAlbums', userAlbums);
      setAvailableAlbums(userAlbums);
      for (let i = 0; i < userAlbums.length; i++) {
        if (userAlbums[i].album_id === Number(props.match.params.id)) {
          console.log('props.match.params.id: ', props.match.params.id)
          console.log('userAlbums[i].album_id: ', userAlbums[i].album_id)
          setAlbumData(userAlbums[i]);
        }
      }
  }

  //makes it so that the URL associated with the add button (i.e. the + button) directs user to upload photo page
  useEffect(()=> {
    props.handleRedirectToUploadMedia();

    return () => {
      console.log('unmounting')
      props.handleRedirectToCreateAlbum();
    }
  }, [])

  useEffect(() => {
    (async () => {
      // instead of requesting all user albums from backend, use endpoint 
      // to get single album here
      const userAlbums = await getUserAlbumsReq(props.state.currentUser.user_id);
      console.log('userAlbums', userAlbums);
      setAvailableAlbums(userAlbums);
      for (let i = 0; i < userAlbums.length; i++) {
        if (userAlbums[i].album_id === Number(props.match.params.id)) {
          console.log('props.match.params.id: ', props.match.params.id)
          console.log('userAlbums[i].album_id: ', userAlbums[i].album_id)
          setAlbumData(userAlbums[i]);
        }
      }
    })();
  }, [props.state.currentUser.user_id]);

  // useEffect(()=> {
  //   console.log('albumData: ', albumData)
  // }, [albumData])

  useEffect(() => {
    (async () => {
      if (albumData && albumData.album_id) {
        const userAlbumMedia = await getAlbumMediaReq(albumData.album_id);
        console.log('userAlbumMedia: ', userAlbumMedia);
        setAlbumMedia(userAlbumMedia);
      } 
    })();
  }, [albumData]);

  // useEffect(()=> {
  //   console.log('albumMedia: ', albumMedia)
  // }, [albumMedia])


  useEffect(() => {
    (async() => {
      if (inputState) {
        let filteredMedia = albumMedia.filter(mediaItem => {
          console.log('mediaItem: ', mediaItem)
          let titleIncludesSearchInput = mediaItem.title.includes(inputState);
          
          let mediaKeywords = mediaItem.keywords;
          let keywordsIncludingInput = [];
          for (let i = 0; i < mediaKeywords.length; i++) {
            if (mediaKeywords[i].includes(inputState)) {
              keywordsIncludingInput.push(mediaKeywords[i])
            }
          }
          console.log('keywordsIncludingInput: ', keywordsIncludingInput)
          console.log('titleIncludesSearchInput: ', titleIncludesSearchInput)

          if ( titleIncludesSearchInput || keywordsIncludingInput.length>0) {
            console.log('filteredmediaItem', mediaItem);
            return mediaItem
          }
        });
        console.log('filteredMedia: ', filteredMedia)
        setAlbumMedia(filteredMedia);
      } else if (albumData && albumData.album_id) {
        const userAlbumMedia = await getAlbumMediaReq(albumData.album_id);
        setAlbumMedia(userAlbumMedia);
      } 
    })();
  }, [inputState, albumData])

  return (
    <React.Fragment>

      {toHomePage ? <Redirect to ='/'/>: null}

      <Search  
        loading = {false}
        results = {albumMedia}       
        onSearchChange = {(event) => {setInputState( event.target.value)}}
      ></Search>

      <Card.Group centered stackable doubling>
        <Card raised fluid>
          <Card.Content>
            {/* <Button floated='right' icon='ellipsis vertical' /> */}
            <StyledDropdownTransparent
              button
              icon = 'ellipsis vertical' 
            >                                
              <StyledDropdownMenu>
                {/* <Link to= {{pathname:`/media/${mediaItem.media_id}/edit`, state: {'mediaItem':mediaItem, albumData:albumData}}} style = {{'textDecoration': 'none', color:'black'}}> */}
                <Link to= {{pathname:`/albums/${albumData.album_id}/edit`}} style = {{'textDecoration': 'none', color:'black'}}>
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
                    <h3>Are you sure you want to delete this album?</h3>
                    <Button onClick= {() =>deleteAlbum()} color='green'>
                        Delete
                    </Button>
                    <Button color='red' onClick= {() =>handleClose()}>
                        Cancel
                    </Button>
                  </Modal.Content>
                </Modal>
              </StyledDropdownMenu>
            </StyledDropdownTransparent>
            <Card.Header>{albumData.title}</Card.Header>
            <Card.Meta>Date Created: {getLocalDateAndTime(albumData.created_at)}</Card.Meta>
            <Card.Meta>Last Updated: {getLocalDateAndTime(albumData.updated_at)}</Card.Meta>
            <Divider horizontal>Album Description</Divider>
            <Card.Description>{albumData.description}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>

      <Card.Group centered stackable doubling>
        {albumMedia.map((albumMediaItem, index) => (
            <MediaCard key={index} mediaItem={albumMediaItem} albumData = {albumData} updateAlbumAfterMediaDelete = {updateAlbumAfterMediaDelete}/>
        ))}
      </Card.Group>
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  return {
    state:state
  }
}

export default connect(mapStateToProps, {})(AlbumOverview);
