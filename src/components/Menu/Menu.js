import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    const menu_items = this.props.menu_items;
    return (
      <div className="Menu">
        {menu_items.map((menu_item) => 
          <MenuItem text={menu_item.toString()}></MenuItem>
        )}
      </div>
    );
  }
}

export default Menu;
