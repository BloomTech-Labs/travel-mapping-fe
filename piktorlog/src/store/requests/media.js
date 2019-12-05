import axios from 'axios';

import { address, createAuthHeader } from '../utils';

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