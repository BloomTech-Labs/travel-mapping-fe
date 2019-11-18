import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const Header = (props) => {
  return (
    <Menu borderless size='mini' attached='top'>
      <Link to='/'>
        <Menu.Item header>Piktorlog</Menu.Item>
      </Link>

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

export default Header;
