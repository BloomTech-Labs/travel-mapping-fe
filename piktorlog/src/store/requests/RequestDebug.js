import React from 'react';

import { createAlbumReq, addAlbumMetaReq, editAlbumReq, getUserAlbumsReq, deleteAlbumReq } from './albums';
import { editUser, getAllUsers, getUser, deleteUser } from './users';

const RequestDebug = () => {
  return (
    <div>
      <div>
        <button onClick={() => createAlbumReq(4, 'Test Album', 'This is a description. A Very descriptive description').then(res => console.log(res))}>
          createAlbum
        </button>
        <button onClick={() => editAlbumReq(1, { title: 'Test Album with Cooler Title' }).then(res => console.log(res))}>
          editAlbum
        </button>
        <button onClick={() => getUserAlbumsReq(2).then(res => console.log(res))}>
          getUserAlbums
        </button>
        <button onClick={() => deleteAlbumReq(5).then(res => console.log(res))}>
          deleteAlbum
        </button>
        <button onClick={() => addAlbumMetaReq(3, [{ name: 'meta1', value: 'value1' }, { name: 'meta2', value: 'value2' }]).then(res => console.log(res))}>
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