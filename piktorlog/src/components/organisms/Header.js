import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const Header = (props) => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);

  return (
    <Menu borderless size='mini' attached='top'>
      <Link to='/'>
        <Menu.Item header>Piktorlog</Menu.Item>
      </Link>

      <Menu.Menu position='right'>
        <Menu.Item
          name='search'
          active={activeNavItem === 'search'}
          onClick={handleNavItemClick}
        >
          <Icon size='large' name='search' />
        </Menu.Item>
        <Menu.Item
          name='account'
          active={activeNavItem === 'account'}
          onClick={handleNavItemClick}
        >
          <Icon size='large' name='cog' />
        </Menu.Item>
        <Menu.Item
          name='collab'
          active={activeNavItem === 'collab'}
          onClick={handleNavItemClick}
        >
          <Icon size='large' name='users' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
