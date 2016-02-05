import React, { Component } from 'react';

class RedText extends Component {
  render() {
    return(
      <div className='red-text'>
        { this.props.text }
      </div>
    )
  }
};

export default RedText;
