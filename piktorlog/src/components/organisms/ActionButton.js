import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledActionButton = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
`;

const ActionButton = (props) => {
  return (
    <StyledActionButton
      circular
      toggle
      size='huge'
      icon='plus'
      active={props.active}
      onClick={props.handleClick}
      className='actionButton'
    />
  );
};

export default ActionButton;
