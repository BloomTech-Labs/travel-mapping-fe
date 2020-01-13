import React, {useEffect, useState}from 'react';
import {connect} from 'react-redux';
import {Card, Search} from 'semantic-ui-react';
import AlbumCard from '../components/molecules/AlbumCard';
import {getUserAlbumsReq} from '../store/requests/albums';
// import SearchBar from '../components/molecules/SearchBar'
const AppOverview = (props) => {
  const [availableAlbums, setAvailableAlbums] = useState([]);
 const   [inputState, setInputState] = useState('');


  // const filteredAlbums = availableAlbums.filter(
  //   album => {

  //    if ( album.title.includes(inputState)) {
  //     console.log('Album app overview', album);
  //     //title.includes(props.searchInput)
    
  //    //.title.indexOf(inputState[0]) !== -1;
  //    }
  //    return album

   
  //   })

    const filteredAlbumsHandler = filteredAlbums => {
      console.log('filteredAlbums', filteredAlbums);
      setInputState(filteredAlbums)
    }

  useEffect(() => {
    (async () => {
      const data = await getUserAlbumsReq(props.currentUser.user_id)
      let filteredAlbums = data.filter(
        album => {
         if ( album.title.includes(inputState) || album.description.includes(inputState)) {
          console.log('Album app overview', album);
          //title.includes(props.searchInput)
         //album.title.indexOf(inputState[0]) !== -1;
         return album
         }
         return false;
        })
      console.log('filteredAlbums', filteredAlbums);
      setAvailableAlbums(filteredAlbums)  
    })();
  }, [props.currentUser.user_id, inputState ]);


  useEffect(() => {
    (async () => {
      console.log('testing')
      const data = await getUserAlbumsReq(props.currentUser.user_id)
      setAvailableAlbums(data)  
    })();
  }, []);




  useEffect(() => {
    (async () => {
  
      //  inputState[1]((prevStateInput) => ({
      //    text: prevStateInput.text}))


      // const data = await getUserAlbumsReq(props.currentUser.user_id)


      // .filter(album => {
      //   return album.title.includes(searchInput).toLowerCase()});

     // console.log('filteredAlbums', filteredAlbums);
      //setAvailableAlbums(data)
     // setInputState(filteredAlbums)
      
    })();
   } , [setInputState]);

  
  // useEffect({
            
  //   this.setState({ [e.target.name]: e.target.value }); 
  // })

// const filteredAlbums = availableAlbums.filter(
//   albumData => {
//     return albumData.title.indexOf(props.searchInput) !== -1;
//     //title.includes(props.searchInput)
//     //title.indexOf(props.searchInput) !== -1;

    
//   });
   

  return (
    <React.Fragment>
      <h1>My Albums</h1>
      <br/>
      {/* <SearchBar changeHandler={changeHandler}/> */}
      <br/>
      <br/>
      <br/>
 {/* <Search onSearchInput= {filteredAlbumsHandler} isLoading = 'false' results = {availableAlbums}       onSearchChange = {(event) => { setInputState( event.target.value)}}
  
  >

 </Search> */}
      <Card.Group>
            {availableAlbums.map((albumData, index) => (
                <AlbumCard key={index} albumData={albumData} />
            ))}
      </Card.Group>
      
    </React.Fragment>
  );
};

const mapStateToProps = ({ currentUser }, state) => {
  return {
    currentUser,
    searchInput: state.searchInput
  };
};

export default connect(mapStateToProps)(AppOverview);