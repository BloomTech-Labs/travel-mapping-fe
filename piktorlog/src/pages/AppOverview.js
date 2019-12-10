import React, {useEffect, useState}from 'react';
import {connect} from 'react-redux';
import {Card} from 'semantic-ui-react';
import AlbumCard from '../components/molecules/AlbumCard';
import {getUserAlbumsReq} from '../store/requests/albums';

const AppOverview = (props) => {
  const [availableAlbums, setAvailableAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getUserAlbumsReq(props.currentUser.user_id);
      console.log('UAC', data);
      setAvailableAlbums(data);
    })();
  }, [props.currentUser.user_id]);


  return (
    <React.Fragment>
      <h1>My Albums</h1>
      <Card.Group>
            {availableAlbums.map((albumData, index) => (
                <AlbumCard key={index} albumData={albumData}/>
            ))}
      </Card.Group>
    </React.Fragment>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(AppOverview);



