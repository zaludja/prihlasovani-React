import React from 'react';
import Kytka from '../images/kytka.svg';
function Header() {
  return (
    <header>
      <div className="container">
        <img src={Kytka} alt="Amber Plasma Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
