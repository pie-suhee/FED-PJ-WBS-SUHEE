import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import './Sections/Navbar.css';
const Logo = require('../../../assets/images/HappyTubeLogo.png');

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu">
      <div className="menu__logo">
        <a href="/"><img src={Logo} alt="Logo" style={{ width: '100%', marginTop: '-5px' }} /></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <button
          className="menu__mobile-button"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </button>
        <Drawer
          title="MENU"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar