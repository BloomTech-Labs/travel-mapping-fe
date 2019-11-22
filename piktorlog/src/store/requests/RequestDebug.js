import React from 'react';

import { createAlbum, addAlbumMeta, editAlbum, getUserAlbums, deleteAlbum } from './albums';
import { editUser, getAllUsers, getUser, deleteUser } from './users';

const RequestDebug = () => {
  return (
    <div>
      <div>
        <button onClick={() => createAlbum(2, 'title2', 'desc').then(res => console.log(res))}>
          createAlbum
        </button>
        <button onClick={() => editAlbum(3, { title: 'titleChange' }).then(res => console.log(res))}>
          editAlbum
        </button>
        <button onClick={() => getUserAlbums(2).then(res => console.log(res))}>
          getUserAlbums
        </button>
        <button onClick={() => deleteAlbum(5).then(res => console.log(res))}>
          deleteAlbum
        </button>
        <button onClick={() => addAlbumMeta(3, [{ name: 'meta1', value: 'value1' }, { name: 'meta2', value: 'value2' }]).then(res => console.log(res))}>
          addAlbumMeta
        </button>
      </div>
      <div>
        <button onClick={() => editUser(3, { display_name: 'newName' }).then(res => console.log(res))}>
          editUser
        </button>
        <button onClick={() => getAllUsers().then(res => console.log(res))}>
          getAllUsers
        </button>
        <button onClick={() => getUser(3).then(res => console.log(res))}>
          getUser
        </button>
        <button onClick={() => deleteUser(5).then(res => console.log(res))}>
          deleteUser
        </button>
      </div>
    </div>
  );
};

export default RequestDebug;