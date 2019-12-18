import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { Button, Card, Divider } from 'semantic-ui-react';

import MediaCardList from '../components/organisms/MediaCardList';
import MediaCard from '../components/molecules/MediaCard';
import {getAlbumMediaReq} from '../store/requests/media';
import {getUserAlbumsReq} from '../store/requests/albums';





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
  const [albumData, setAlbumData] = useState({});
  const [albumMedia, setAlbumMedia] = useState([]);

  useEffect(() => {
    (async () => {
      // console.log('props: ', props);
      const data = await getUserAlbumsReq(props.state.currentUser.user_id);
      console.log('UAC', data);
      setAvailableAlbums(data);
      // console.log('props.match.params.id: ', Number(props.match.params.id))
      for (let i = 0; i < data.length; i++) {
        // console.log('data[i].album_id: ', data[i].album_id)
        if (data[i].album_id === Number(props.match.params.id)) {
          // console.log('props.match.params.id: ', Number(props.match.params.id))
          // console.log('data[i]: ', data[i])
          setAlbumData(data[i]);
          // console.log('albumData: ', albumData)
        }
      }
      // console.log('props: ', props)
      // console.log('albumData: ', albumData)
    })();
  }, [props.state.currentUser.user_id]);

  useEffect(() => {
    console.log('albumData: ', albumData)
  }, [albumData]);

  useEffect(() => {
    (async () => {
      console.log('albumData.album_id: ', albumData.album_id)
      const data = await getAlbumMediaReq(albumData.album_id);
      console.log('AlbumMedia Data: ', data)
      // console.log('props: ', props)
      // console.log('Album Media Data: ', data);
      setAlbumMedia(data.data);
      
    })();
  }, [albumData]);

  useEffect(() => {
    console.log('albumMedia: ', albumMedia)
  }, [albumMedia]);



  return (
    <React.Fragment>
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


        {/* <MediaCardList albumMedia={albumMedia} /> */}

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
