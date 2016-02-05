import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Sample page</h1>
        <Link to='/'>Return to home page</Link>
      </div>
    )
  }
}

export default HomePage;
