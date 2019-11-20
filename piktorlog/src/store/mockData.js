/* PREVIEW ALBUM FETCH MOCK */
const fetchAlbumOverview = {
  success: true,
  message: 'successfully retrieved album list',
  albums: [
    {
      album_id: 0,
      title: 'Awesome Meals',
      description: "A collection of photos of delicious food I've eaten",
      created_at: '2019-10-01',
      updated_at: '2019-10-01',
      cover_url: 'https://via.placeholder.com/450x150',
    },
    {
      album_id: 1,
      title: 'Awesome Places',
      description: 'A collection of interesting places I have visited',
      created_at: '2019-10-01',
      updated_at: '2019-10-01',
      cover_url: 'https://via.placeholder.com/450x150',
    },
    {
      album_id: 2,
      title: 'Awesome People',
      description: "A collection of photos of people I don't know",
      created_at: '2019-10-01',
      updated_at: '2019-10-01',
      cover_url: 'https://via.placeholder.com/450x150',
    },
  ],
};

export const getAlbums = () => fetchAlbumOverview;

/* IMAGE FETCH MOCK */
const fetchImageZero = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [
    {
      rating: 'number / number',
      category: 'category name',
      'main ingredients': 'ingredient name',
    },
  ],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageOne = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [
    {
      rating: 'number / number',
      category: 'category name',
      'main ingredients': 'ingredient name',
    },
  ],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageTwo = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [
    {
      rating: 'number / number',
      category: 'category name',
      'main ingredients': 'ingredient name',
    },
  ],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageThree = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ rating: 'number / number', location: 'location name' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageFour = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ rating: 'number / number', location: 'location name' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageFive = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ rating: 'number / number', location: 'location name' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageSix = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ rating: 'number / number', location: 'location name' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageSeven = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ nickname: 'nickname goes here...', birthday: '1980-10-01' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageEight = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ nickname: 'nickname goes here...', birthday: '1980-10-01' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageNine = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ nickname: 'nickname goes here...', birthday: '1980-10-01' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};
const fetchImageTen = {
  title: 'Image Title',
  caption: 'Image Caption Goes Here...',
  media_url: 'https://via.placeholder.com/450x150',
  created_at: '2019-10-01',
  updated_at: '2019-10-01',
  meta: [{ nickname: 'nickname goes here...', birthday: '1980-10-01' }],
  keywords: ['keyword 1', 'keyword 2', 'keyword 3'],
};

/* FULL ALBUM FETCH MOCK */
const fetchAlbumZero = {
  success: true,
  message: 'successfully retrieved album',
  album: {
    album_id: 0,
    title: 'Awesome Meals',
    description: "A collection of photos of delicious food I've eaten",
    created_at: '2019-10-01',
    updated_at: '2019-10-01',
    cover_url: 'https://via.placeholder.com/450x150',
    album_meta: ['rating', 'category', 'main ingredients'],
    images: [
      fetchImageZero,
      fetchImageOne,
      fetchImageTwo,
      fetchImageZero,
      fetchImageOne,
      fetchImageTwo,
    ],
  },
};
const fetchAlbumOne = {
  success: true,
  message: 'successfully retrieved album',
  album: {
    album_id: 1,
    title: 'Awesome Places',
    description: 'A collection of interesting places I have visited',
    created_at: '2019-10-01',
    updated_at: '2019-10-01',
    cover_url: 'https://via.placeholder.com/450x150',
    album_meta: ['rating', 'location'],
    images: [fetchImageThree, fetchImageFour, fetchImageFive, fetchImageSix],
  },
};
const fetchAlbumTwo = {
  success: true,
  message: 'successfully retrieved album',
  album: {
    album_id: 2,
    title: 'Awesome People',
    description: "A collection of photos of people I don't know",
    created_at: '2019-10-01',
    updated_at: '2019-10-01',
    cover_url: 'https://via.placeholder.com/450x150',
    album_meta: ['nickname', 'birthday'],
    images: [fetchImageSeven, fetchImageEight, fetchImageNine, fetchImageTen],
  },
};

export const getAlbum = (id) => {
  switch (id) {
    case 0:
      return fetchAlbumZero;
    case 1:
      return fetchAlbumOne;
    case 2:
      return fetchAlbumTwo;
    default:
      return {
        success: false,
        message: 'unable to retrieve album as specified',
      };
  }
};
