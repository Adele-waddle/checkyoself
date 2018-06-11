import React from 'react';
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><Link to='/'></Link>Home</li>
      <li onClick={close}><Link to='/text'></Link>Text</li>
      {/* <li onClick={close}><Link to='/text'></Link>Text</li>
      <li onClick={close}><Link to='/text'></Link>Text</li> */}
    </ul>
  </div>
);