import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    const text = this.props.text;
    return (
      <div className="MenuItem" onClick={() =>  alert('clicked ' + text)}>
        {this.props.text}
      </div>
    );
  }
}

export default MenuItem;
