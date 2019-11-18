import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import NavBar from '../components/organisms/NavBar';
import ActionButton from '../components/organisms/ActionButton';
import AlbumsList from '../components/organisms/AlbumsList';

const AlbumsOverview = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('');
    const [actionToggle, setActionToggle] = useState(false);
    //const history = useHistory();

    /*
    Need to develop code for handling album changes or prmpting changes
    const [albumData, getAlbumData] = useState([]);

    useEffect(()=>{
      function handleAlbumStatusChange(status){
        getAlbumData(status.albumData);
      }

    });

    */
  
    const handleNavItemClick = (e, { name }) => setActiveNavItem(name);
    const handleButtonClick = () => setActionToggle(!actionToggle);
    
    return (
        <React.Fragment>
          <NavBar
            header='Piktorlog'
            activeItem={activeNavItem}
            handleClick={handleNavItemClick}
          />
          <ActionButton active={actionToggle} handleClick={handleButtonClick} />
          <AlbumsList albumData={}/>
        </React.Fragment>
      );

}

export default AlbumsOverview;