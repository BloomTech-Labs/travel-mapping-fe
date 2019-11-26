import React, { useEffect } from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const UploadForm = ({ media }) => {

  useEffect(() => {
    console.log('UF', media);
  }, [media]);


  return (
    <Segment>
      <Grid>
        <Grid.Column width="6">
          <Image src={URL.createObjectURL(media.file)} rounded />
        </Grid.Column>
        <Grid.Column width="10">
          
        </Grid.Column>
      </Grid>
    </Segment>
  )
};

export default UploadForm;