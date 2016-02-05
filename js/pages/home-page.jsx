import React, { Component } from 'react';
import { Link } from 'react-router';

import RedText from '../components/red-text';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <RedText text='This is sample red text component.' />
        <Link to='/sample'>Go to sample page</Link>
      </div>
    )
  }
}

export default HomePage;
