import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

const NavBar = (props) => {
  return (
    <Menu borderless size='mini' attached='top'>
      <Menu.Item header>{props.header}</Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='search'
          active={props.activeItem === 'search'}
          onClick={props.handleClick}
        >
          <Icon size='large' name='search' />
        </Menu.Item>
        <Menu.Item
          name='account'
          active={props.activeItem === 'account'}
          onClick={props.handleClick}
        >
          <Icon size='large' name='cog' />
        </Menu.Item>
        <Menu.Item
          name='collab'
          active={props.activeItem === 'collab'}
          onClick={props.handleClick}
        >
          <Icon size='large' name='users' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
