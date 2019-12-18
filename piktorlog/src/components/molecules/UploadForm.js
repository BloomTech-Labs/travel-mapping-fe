import React, { useEffect } from 'react';
import { Segment, Image, Grid, Form, Button } from 'semantic-ui-react';
import UploadMeta from './UploadMeta';

const UploadForm = ({ media, setMedia, removeMedia }) => {

  useEffect(() => {
    console.log('UF', media);
  }, [media]);

  const handleChange = (e, { name, value }) => {
    setMedia(media.id, { [name]: value });
  };

  const handleAddMeta = (name, value) => {
    setMedia(media.id, { meta: [...media.meta, { name, value }] });
  };

  const handleRemoveMeta = (delName) => {
    setMedia(media.id, { meta: media.meta.filter(e => e.name !== delName) });
  }

  const clear = () => {
    setMedia(media.id, {
      title: '',
      caption: '',
      keywords: '',
      meta: []
    });
  };

  const remove = () => {
    removeMedia(media.id);
  };

  return (
    <Segment>
      <Grid>
        <Grid.Column width="6">
          <Image src={URL.createObjectURL(media.file)} rounded />
        </Grid.Column>
        <Grid.Column width="10">
          <Form>
            <Form.Input
              fluid
              name="title"
              placeholder="title"
              value={media.title}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="caption"
              placeholder="caption"
              value={media.caption}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="keywords"
              placeholder="keywords (comma-separated, e.g. one, two, three)"
              value={media.keywords}
              onChange={handleChange}
            />
            <UploadMeta 
              meta={media.meta}
              addMeta={handleAddMeta}
              removeMeta={handleRemoveMeta}
            />
          </Form>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
            <Button onClick={clear}>
              Clear
            </Button>
            <Button onClick={remove}>
              Remove
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
  )
};

export default UploadForm;