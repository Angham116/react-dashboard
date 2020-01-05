import React from 'react';
import { Link } from 'react-router-dom';

import {
  Support_Url,
} from '../../routes_url';

import logo from '../../Assets/logo.png';

import './style.css';
import './media.css';

export default function PageNotFound() {
  return (
    <div className='pageNotFound__container'>
      <img src={logo} alt="spanat_logo" className="logo-img"/>
      <div className='pageNotFound__container-form'>
        <div className="pageNotFound-header">
          <h2 className="pageNotFound-title">Page Not Found</h2>
          <span className="title-hint">404 Page Not Found</span>
        </div>
        <div className="pageNotFound-form" >
          <div className="pageNotFound-form-hint">
            <p className="pageNotFound-hint__text">Sorry, we can't find the page you are looking for.</p>
          </div>
          <div className="pageNotFound-form-hint">
            <span className="support__text">Need more help <Link to={Support_Url}>Contact Support</Link></span>
          </div>
        </div>
      </div>
  </div>
  )
}
