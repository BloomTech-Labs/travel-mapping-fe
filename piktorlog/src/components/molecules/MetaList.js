import React from 'react';
import styled from 'styled-components';
import { Label, Icon } from 'semantic-ui-react';

const MetaLabelContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  .ui.label {
    margin: 0.3rem 0.2rem;

    &:first-child {
      margin-left: 0.2rem;
    }
  }
`;

const AlbumMetaList = ({ meta, remove }) => {
  return (
    <MetaLabelContainer>
      {meta && meta.map(e => (
        <Label key={e.name}>
          {`${e.name}: ${e.value}`}
          <Icon 
            name="delete"
            color="red"
            size="large"
            onClick={() => remove(e.name, e.value)}
          />
        </Label>
      ))}
    </MetaLabelContainer>
  );
};

export default AlbumMetaList;