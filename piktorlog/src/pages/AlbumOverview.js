import React from 'react';
import { connect } from 'react-redux';

import { useGetAlbum, useGetAlbumMedia } from '../store/hooks/useImmediateFetch';
import { Button, Card, Divider, Search } from 'semantic-ui-react';
import MediaCard from '../components/molecules/MediaCard';

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
  
  // const [availableAlbums, setAvailableAlbums] = useState([]);
  // const [albumData, setAlbumData] = useState({});
  // const [albumMedia, setAlbumMedia] = useState([]);
  // const   [inputState, setInputState] = useState('');

  const [albumData] = useGetAlbum(props.match.params.id);
  const [albumMedia] = useGetAlbumMedia(props.match.params.id);
  
  // useEffect(() => {
  //   console.log('album', albumMedia);
  // }, [albumMedia]);
  // useEffect(() => {
  //   console.log('isLoading', loadingMedia);
  // }, [loadingMedia]);
  // useEffect(() => {
  //   console.log('errorMessage', getMediaErr);
  // }, [getMediaErr]);
  // const filteredPhotosHandler = filteredPhoto => {
  //   console.log('filteredPhoto', filteredPhoto)
  //   setInputState(filteredPhoto)
  // }

  // useEffect(() => {
  //   (async () => {
  //     const data = await getUserAlbumsReq(props.state.currentUser.user_id);
  //     console.log('UAC', data);
  //     setAvailableAlbums(data);
  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].album_id === Number(props.match.params.id)) {
  //         setAlbumData(data[i]);
  //       }
  //     }

  //   })();
  // }, [props.state.currentUser.user_id, props.match.params.id]);

  // useEffect(() => {
  //   // console.log('albumData: ', albumData)

   
      

  // }, [albumData]);

  // useEffect(() => {
  //   console.log('availableAlbums: ', availableAlbums)
  // }, [availableAlbums]);

  // useEffect(() => {
  //   (async () => {
  //     if (!albumMedia.length) {
  //     // console.log('albumData.album_id: ', albumData.album_id)
  //     try {
  //       const data = await getAlbumMediaReq(albumData.album_id);
  //       // console.log('AlbumMedia Data: ', data)
  //       setAlbumMedia(data);
  //     } catch(err) {
  //       console.error({ err });
  //     }
      
      

  //     // let filteredPhoto = albumMedia.filter(
  //     //   photos => {
  //     //    if ( photos.title.includes(inputState) || photos.keywords.includes(inputState)) {
  //     //     console.log('filteredphoto from Album Overview', photos);
  //     //     //title.includes(props.searchInput)
  //     //    //album.title.indexOf(inputState[0]) !== -1;
  //     //    return photos
  //     //    }
  //     //    return false;
  //     //   })
  
  //     // setAlbumMedia(filteredPhoto)
  //     }
  //   })()
  // }, [albumData, inputState, albumMedia]);

  // useEffect(() => {
  //   console.log('albumMedia: ', albumMedia)
  // }, [albumMedia]);



  return (
    <React.Fragment>
      <Search 
        results = {albumMedia}       
        onSearchChange = {(event) => { /*setInputState( event.target.value)*/}}
      />
      <Card.Group centered stackable doubling>
        <Card raised fluid>
          <Card.Content>
            <Button floated='right' icon='ellipsis vertical' />
            <Card.Header>{albumData.title}</Card.Header>
            <Card.Meta>Date Created: {albumData.created_at}</Card.Meta>
            <Card.Meta>Last Updated: {albumData.updated_at}</Card.Meta>
            <Divider horizontal>Album Description</Divider>
            <Card.Description>{albumData.description}</Card.Description>
          </Card.Content>
        </Card>

        <Card.Group>
          <Card.Group>
              {albumMedia.map((albumMediaItem, index) => (
                  <MediaCard key={index} mediaItem={albumMediaItem}/>
              ))}
          </Card.Group>
        </Card.Group>

      </Card.Group>
    </React.Fragment>
  );
};


const mapStateToProps = state => {
  return {
    state:state
  }
}

export default connect(mapStateToProps, {})(AlbumOverview);
