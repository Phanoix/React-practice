import React, { Component } from 'react';
import './GridSquare.css';

class GridSquare extends Component {
  render() {
    return (
      <div className={"GridSquare " + this.getContextSensitiveClasses(this.props.text) } >
        {this.props.text}
      </div>
    );
  }

  getContextSensitiveClasses( text ){
    const classes = [];
    classes['w'] = 'Wall';
    classes['0'] = 'Floor';
    classes['e'] = 'Entrance';
    classes['x'] = 'Exit';
    classes[1] = 'Character';
    classes[-1] = 'CharacterPath';

    return classes[text];
  }
}

export default GridSquare;
