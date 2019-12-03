import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/organisms/Header';
import ActionButton from '../components/organisms/ActionButton';
import AlbumsList from '../components/organisms/AlbumsList';

const Albums = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('');
    const [actionToggle, setActionToggle] = useState(false);
    //const history = useHistory();

    /*
    Need to develop code for handling album changes or prmpting changes.
    Question of course, is will this hook live here or would it go better somewhere else?

    const [albumData, getAlbumData] = useState([]);

    useEffect(() => {
      function handleAlbumStatusChange(status){
        getAlbumData(status.albumData);
      }

      someAPI.getAlbumData(props.albumData handleAlbumStatusChange)

    });

    */
  
    const handleNavItemClick = (e, { name }) => setActiveNavItem(name);
    const handleButtonClick = () => setActionToggle(!actionToggle);
    
    return (
        <React.Fragment>
          <Header
            header='Piktorlog'
            activeItem={activeNavItem}
            handleClick={handleNavItemClick}
          />
          <ActionButton active={actionToggle} handleClick={handleButtonClick} />
          <AlbumsList />
        </React.Fragment>
      );

}

export default Albums;