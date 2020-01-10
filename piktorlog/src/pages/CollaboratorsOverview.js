import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { useGetUserAlbums, useLogOnChange } from '../store/requests/hooks';

// import { Switch, Route, Link } from 'react-router-dom';
// import styled from 'styled-components';

import AddCollaboratorsForm from '../components/molecules/AddCollaboratorsForm';
import CollaboratorsList from '../components/organisms/CollaboratorsList';

import { Dropdown } from 'semantic-ui-react'

/*
Mock Data for Dropdown based on React Semantic UI example:
See: https://codesandbox.io/s/semantic-ui-example-7tkob

*/
// const collaborators = [
//     {
//         key: 'album',
//         text: 'Album 1',
//         value: 'Album 1',
//         image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
//       }
// ]

/*
Component Structure/Flow 

- 1) Dropdown menu populated by known albums (use filter to show only the albums where album.user_id == currentuser.user_id)
   - I tried using Dropdoown from Semantic UI (documentation for that bit sketchy)
- 2) Form where you can entire email of collaborator see /molecules/AddCollaboratorsForm.js

- 3) "Display area" which lists the collaborators of a selected album 
  - This might require another component, e.g. "CollaboratorsDisplayArea" 
  or it could be done at this level (iterate over a list)

- When album is selected it will populate a list 
of names/emails of collaborators for that album
  - Each collaborator will have their name along with an X button next to that name. (tab)
  - Clicking X removes that collaborators
*/

// filterFn MUST either be declared outside of the component, or memoized, such as with useCallback
// it WILL break otherwise
const useFilteredAlbums = (user_id, filterFn) => {
  const [albums, loading, error, refire] = useGetUserAlbums(user_id);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
  
    setFilteredAlbums(albums.filter(filterFn));

  }, [albums, filterFn]);

  return [filteredAlbums, loading, error, refire];
};

const CollaboratorsOverview = ({ currentUser }) => {

  const filterFn = useCallback((e) => e.user_id === currentUser.user_id, [currentUser.user_id]);
  const [filteredAlbums] = useFilteredAlbums(currentUser.user_id, filterFn);
  useLogOnChange('filtered', filteredAlbums);
   
  // SelectedAlbum--what album has been selected/in Focus
  const [selectedAlbum, setSelectedAlbum] = React.useState(null);
  useLogOnChange('selected', selectedAlbum);

  return (
    <div>
      <h1>COMING SOON!</h1>
      <Dropdown
        placeholder='Select Album'
        fluid
        selection
        options={filteredAlbums.map(e => ({ key: e.album_id, text: e.title, value: e.album_id, image: { src: e.cover_url } }))}
        onChange={(e, data) => setSelectedAlbum(data.value)}
        value={selectedAlbum}
      />

      {selectedAlbum && <AddCollaboratorsForm />}

      {selectedAlbum && <CollaboratorsList album_id={selectedAlbum} />}
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(CollaboratorsOverview);