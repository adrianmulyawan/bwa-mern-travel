import React from 'react';
import IconText from './IconText';
import { useLocation } from 'react-router-dom';
import ButtonComponent from '../components/Button/button.component';

// import css 
import '../assets/scss/style.scss';

const HeaderPart = (props) => {
  // > instansiasi useLocation
  const location = useLocation();

  // > Cek sedang dimenu mana 
  const getNavLinkClass = (path) => {
    // > beri class active pada routenya
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary">
        <div className="container">
          {/* Icon Website */}
          <IconText />
          {/* Humberger Menu */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'>
                <ButtonComponent 
                  className={`nav-link ${getNavLinkClass('/')}`}
                  type='link'
                  href="/"
                >
                  Home
                </ButtonComponent>
              </li>
              <li className='nav-item'>
                <ButtonComponent 
                  className={`nav-link ${getNavLinkClass('/browse-by')}`}
                  type='link'
                  href="/browse-by"
                >
                  Browse By
                </ButtonComponent>
              </li>
              <li className='nav-item'>
                <ButtonComponent 
                  className={`nav-link ${getNavLinkClass('/stories')}`}
                  type='link'
                  href="/stories"
                >
                  Stories
                </ButtonComponent>
              </li>
              <li className='nav-item'>
                <ButtonComponent 
                  className={`nav-link ${getNavLinkClass('/agents')}`}
                  type='link'
                  href="/agents"
                >
                  Agents
                </ButtonComponent>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderPart;
