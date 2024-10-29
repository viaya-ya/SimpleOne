import React from 'react';
import './Header.css'
import Logo from "../img/Logo.svg"
import sidebar from "../img/sidebar.svg"
import PersonaImage from "../img/PersonaImage.svg"
import settings from "../img/settings.svg"
export default function Header() {
  return (
    <header className="header">
      <div className="header__body">

        <div className="header__left">
          <img src={Logo} alt="logo" className="logo" />
          <img src={sidebar} alt="sidebar" className="sidebar" />
        </div>

        <div className="header__right">
          <div className="header__item1">
            <input type="search" className="search header__search" placeholder="Поиск" />
          </div>
          <div className="header__item2">
            <img src={PersonaImage} alt="PersonaImage" className="header__avatar" />
            <span className="text">Максим Галактионов</span>
            <img src={settings} alt="settings" className="iconBorder" />
          </div>
        </div>

      </div>
    </header>
  );
}
