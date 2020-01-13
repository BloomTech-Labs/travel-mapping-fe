import axios from 'axios';

import { address, createAuthHeader, errors } from '../utils';

// NOTE: Need backend endpoints set up for editing an album's media item, and deleting an album's media item. 


// user_id is an integer, and albums is just an array of integers.

// media is... a bit more complex.
// it's an array of objects, taking the form:
// media: [{
//   title: 'A Photo Title',
//   caption: 'A Photo Caption',
//   keywords: ['keyword one', 'keyword two'],
//   meta: [{
//     name: 'Meta Name',
//     value: 'Meta Value'
//   }, {
//     name: 'Other Meta Name',
//     value: 'Other Meta Value'
//   }],
//   file: <File> // the actual image, provided through an input element, or react-dropzone
// }, {
//   title: 'Another Photo Title',
//   caption: 'Another Photo Caption',
//   keywords: ['keyword one', 'keyword two'],
//   meta: [{
//     name: 'Meta Name',
//     value: 'Meta Value'
//   }, {
//     name: 'Other Meta Name',
//     value: 'Other Meta Value'
//   }],
//   file: <File>
// }]

export const uploadMedia = async (media, albums, user_id) => {
  const header = createAuthHeader();
  if (!header) return false;

  const submission = new FormData();

  submission.append('albums', JSON.stringify(albums));

  media.forEach(e => {
    if (e.keywords) {
      const keywords = e.keywords.split(',').map(e => e.trim());
      e.keywords = keywords;
    }
  });
  submission.append('media', JSON.stringify(media.map(({ file, id, ...rest }) => rest)));

  media.forEach(e => {
    submission.append('files', e.file, e.id);
  });

  const { data } = await axios.post(
    `${address}/users/${user_id}/media/add`,
    submission,
    header
  );
  return data;
};

export const getAlbumMediaReq = async (album_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      // request returns an array of objects; each object containing an individual media item's data 
      const { data } = await axios.get(
        `${address}/albums/${album_id}/media`, 
        header
      );
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

}

// form of Media object
// {
//   "title": "A Photo Title",
//   "caption": "A short caption for a photo",
//   "keywords": ["keyword-one", "keyword-two", "keyword-three"],
//   "meta": [{
//      "name": "Location",
//      "value": "Mexico"
//   }]
// }

// changes is an object with optional string properties 'title', 'caption', 
// optional array property 'keywords', and optional array property 'meta' 
// with a single object inside it where the keys are the names of the metafield
// and the values are the values associated with the metafield 
export const editMediaReq = async(media_id, changes) => {
  const header = createAuthHeader();
  if (!header) return false;

  const {data} = await axios.put(
    `${address}/media/data/${media_id}/edit`, 
    changes, 
    header
  );
  return data
}


export const deleteMediaFromAlbumReq = async(media_id, album_id) => {
  const header = createAuthHeader();
  console.log('header: ', header)
  if (!header) throw new Error(errors.authHeaderError);
  else {
    try {
      // request returns an array of objects; each object containing an individual media item's data 
      const {data} = await axios.delete(`${address}/albums/${album_id}/media/${media_id}/remove`, header);
      console.log('data: ', data);
      return data;

    } catch(err) {
      console.log('err: ', err)
      throw new Error(Object.values(err.response.data)[0]);
    }
  }
}

export const getIndividualMediaReq = async (media_id) => {

  const header = createAuthHeader();
  if (!header) throw new Error(errors.authHeaderError);
  else {

    try {

      const { data } = await axios.get(`${address}/media/data/${media_id}/view`, header);
      return data;

    } catch(err) {
      throw new Error(Object.values(err.response.data)[0]);
    }

  }

};
