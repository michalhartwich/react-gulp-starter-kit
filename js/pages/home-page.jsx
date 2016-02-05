import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to='/sample'>Go to sample page</Link>
      </div>
    )
  }
}

export default HomePage;
