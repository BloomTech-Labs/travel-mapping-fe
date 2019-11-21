import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAlbumStart } from '../store/actions/createAlbum'

const CreateAlbum = (props) => {
    console.log('props: ', props);

    // const createAlbum = () => {
    //     props.createAlbum();
    // }

    const [albumTitle, setAlbumTitle] = useState('');
    const [albumDescription, setAlbumDescription] = useState('');
    const [albumMetadata, setAlbumMetadata] = useState([{}]);

    return (
        <>
            <h1>CREATE ALBUM PAGE</h1>
            <form>
            
                <label>
                    Album Name:
                <input 
                    type = 'text'
                    name = 'albumTitle'
                    value = {albumTitle}
                    onChange = {e => setAlbumTitle(e.target.value)}
                />
                </label>

                <br />
            
                <label>
                    Album Description:
                <input 
                    type = 'text'
                    name = 'albumDescription'
                    value = {albumDescription}
                    onChange = {e => setAlbumDescription(e.target.value)}
                />
                </label>

                <br />
            
                <label>
                    Album Metadata:
                <input 
                    type = 'text'
                    name = 'albumMetadata'
                    value = {albumMetadata}
                    onChange = {e => setAlbumMetadata(e.target.value)}
                />
                </label>

                <br />

                <button
                    type = 'button'
                    onClick = {() => props.createAlbumStart({albumTitle:albumTitle,albumDescription:albumDescription, albumMetadata:albumMetadata})}
                >
                    Create
                </button>

                <br />

                <button
                    type = 'button'
                >
                    Cancel
                </button>
                
            </form>

        </>
    )
};

// const mapDispatchToProps = {
//     createAlbum
// };

const mapStateToProps = state => {
    return {
      state:state
    }
  }

// export default connect(
//     state => state,
//     mapDispatchToProps
// )(CreateAlbum);
export default connect(mapStateToProps, {createAlbumStart})(CreateAlbum);