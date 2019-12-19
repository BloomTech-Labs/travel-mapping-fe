import React, { useState } from 'react';
import { Form, Icon, Grid, GridColumn } from 'semantic-ui-react';

import MetaList from './MetaList';

const UploadMeta = ({ meta, addMeta, removeMeta }) => {
  const [metaName, setMetaName] = useState('');
  const [metaValue, setMetaValue] = useState('');

  return (
    <Grid>
      <Grid.Row colums = {3}>
        <GridColumn width = {7}>
            <Form.Input 
              fluid
              placeholder = 'Name'
              value = {metaName}
              onChange = {e => setMetaName(e.target.value)}
            />
        
        </GridColumn>
        <GridColumn width = {7}>
            <Form.Input 
              fluid
              placeholder = 'Value'
              value = {metaValue}
              onChange = {e => setMetaValue(e.target.value)}
            />
        </GridColumn>
        <GridColumn style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon 
              name="plus circle"
              color="teal"
              size="big"
              onClick={e => {
                addMeta(metaName, metaValue);
                setMetaName('');
                setMetaValue('');
              }}
            />
        </GridColumn>
      </Grid.Row>
      <Grid.Row colums = {1}>
        <GridColumn width = {16}>
            <MetaList 
                meta={meta}
                remove={removeMeta}
            />
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
};

export default UploadMeta;