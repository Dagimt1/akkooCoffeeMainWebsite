import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/menu">Menu</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-item"><a href="/locations">Locations</a></li>
          <li className="nav-item"><a href="/jobs">Jobs</a></li>
          <li className="nav-item cart-icon"><a href="/cart">🛒</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
