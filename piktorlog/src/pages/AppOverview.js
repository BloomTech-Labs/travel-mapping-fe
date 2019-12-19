<<<<<<< HEAD
import React from 'react';
import SearchBar from '../components/molecules/SearchBar'
const AppOverview = () => {
  return (
    <React.Fragment>
      <div>

<SearchBar/>
</div>
      <h1>App Overview</h1>
=======
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
>>>>>>> 99652fa3022281d279fb9c7a8b7666c50b1bc4a7
    </React.Fragment>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(AppOverview);



