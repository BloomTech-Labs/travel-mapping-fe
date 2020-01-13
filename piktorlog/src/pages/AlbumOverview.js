import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router-dom';
// import styled from 'styled-components';

import { Button, Card, Divider, Search } from 'semantic-ui-react';
import MediaCard from '../components/molecules/MediaCard';
import {getAlbumMediaReq} from '../store/requests/media';
import {getUserAlbumsReq} from '../store/requests/albums';
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

const AlbumOverview = (props) => {
  
  const [availableAlbums, setAvailableAlbums] = useState([]);
  // const [albumData, setAlbumData] = useState({});
  // const [albumMedia, setAlbumMedia] = useState([]);
  const [inputState, setInputState] = useState('');

  const [albumData] = useGetAlbum(props.match.params.id);
  const [albumMedia] = useGetAlbumMedia(props.match.params.id);

  // useEffect(() => {
  //   (async () => {
  //     // instead of requesting all user albums from backend, use endpoint 
  //     // to get single album here
  //     const userAlbums = await getUserAlbumsReq(props.state.currentUser.user_id);
  //     console.log('UAC', userAlbums);
  //     setAvailableAlbums(userAlbums);
  //     for (let i = 0; i < userAlbums.length; i++) {
  //       if (userAlbums[i].album_id === Number(props.match.params.id)) {
  //         setAlbumData(userAlbums[i]);
  //       }
  //     }
  //   })();
  // }, [props.state.currentUser.user_id]);



  // useEffect(() => {
  //   (async () => {
  //     if (albumData && albumData.album_id) {
  //       console.log(albumData, albumData.album_id);
  //       const userAlbumMedia = await getAlbumMediaReq(albumData.album_id);
  //       setAlbumMedia(userAlbumMedia.data);  

  //     }

  //   })();
  // }, [albumData]);

  // useEffect(() => {
  //   (async() => {
  //     if (inputState) {
  //       let filteredMedia = albumMedia.filter(mediaItem => {
  //         console.log('mediaItem: ', mediaItem)
  //         let titleIncludesSearchInput = mediaItem.title.includes(inputState);
          
  //         let mediaKeywords = mediaItem.keywords;
  //         let keywordsIncludingInput = [];
  //         for (let i = 0; i < mediaKeywords.length; i++) {
  //           if (mediaKeywords[i].includes(inputState)) {
  //             keywordsIncludingInput.push(mediaKeywords[i])
  //           }
  //         }
  //         console.log('keywordsIncludingInput: ', keywordsIncludingInput)
  //         console.log('titleIncludesSearchInput: ', titleIncludesSearchInput)

  //         if ( titleIncludesSearchInput || keywordsIncludingInput.length>0) {
  //           console.log('filteredmediaItem', mediaItem);
  //           return mediaItem
  //         }
  //       });
  //       console.log('filteredMedia: ', filteredMedia)
  //       setAlbumMedia(filteredMedia);
  //     } else if (albumData && albumData.album_id) {
  //       const userAlbumMedia = await getAlbumMediaReq(albumData.album_id);
  //       setAlbumMedia(userAlbumMedia.data);
  //     } 
  //   })();
  // }, [inputState, albumData])

  return (
    <React.Fragment>  
      <Search 
        isLoading = 'false' 
        results = {albumMedia}       
        onSearchChange = {(event) => {setInputState( event.target.value)}}
      ></Search>

      <Card.Group centered stackable doubling>
        <Card raised fluid>
          <Card.Content>
            <Button floated='right' icon='ellipsis vertical' />
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
            <MediaCard key={index} mediaItem={albumMediaItem} albumData = {albumData}/>
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
