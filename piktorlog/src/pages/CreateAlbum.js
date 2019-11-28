import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAlbum } from '../store/actions/albums.js';

// NOTE: Need to access option so user could choose between making album private or public
const CreateAlbum = (props) => {
    console.log('props: ', props);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <h1>CREATE ALBUM PAGE</h1>
            <form>
            
                <label>
                    Album Name:
                <input 
                    type = 'text'
                    name = 'title'
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                />
                </label>

                <br />
            
                <label>
                    Album Description:
                <input 
                    type = 'text'
                    name = 'description'
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                />
                </label>

                <br />
                {/* Holding off on implementing add album metadata functionality... */}

                {/* <label>
                    Album Metadata:
                <input 
                    type = 'text'
                    name = 'albumMetadata'
                    value = {albumMetadata}
                    onChange = {e => setAlbumMetadata(e.target.value)}
                />
                </label>

                <br /> */}

                <button
                    type = 'button'
                    onClick = {() => props.createAlbum(props.state.currentUser.user_id, title, description, 'public')}
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


const mapStateToProps = state => {
    return {
      state:state
    }
  }

export default connect(mapStateToProps, {createAlbum})(CreateAlbum);