import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="/books">
            <i className="fas fa-book"></i> Books List
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
