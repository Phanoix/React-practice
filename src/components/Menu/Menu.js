import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

class Menu extends Component {
  menuItems(menu_items) {
    let list = [''];
    if (menu_items){
      list = menu_items.map((menu_item) => 
        <MenuItem text={menu_item.toString()} key={menu_item.toString()}></MenuItem>
      )
    }

    return list;
  }

  render() {
    const menu_items = this.props.menu_items;
    return (
      <div className="Menu">
        {this.menuItems(menu_items)}
      </div>
    );
  }
}

export default Menu;
