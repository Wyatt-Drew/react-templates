import React, {Component} from 'react';
import {Switch, Link, Route, Redirect} from 'react-router-dom';
import Home from '../pages/HomePage';
// import SpaLink1 from './spaLink1';
// import SpaLink2 from './spaLink2';
import SiteNav, {ContentGroup} from 'react-site-nav';
import './Navbar.css';
import logo from '../assets/logo.png';

export default () =>
  (
      <header>
        {/* <div style={{width: '100%', background: 'white'}}>
          <Link to="/">
            <img style={{height: '70px', marginLeft: '20px', marginTop: '5px'}} src={logo}/>
          </Link>
        </div> */}
        <SiteNav>
            <ContentGroup title="About"/>
            <ContentGroup title="Services" width="300" height="100">
                        <ul>
              <li><Link to="/spa-link-1">Corporate</Link></li>
              <li><Link to="/spa-link-2">Private</Link></li>
              <li><Link to="/spa-link-2">Weddings</Link></li>
            </ul>
            </ContentGroup>
            <ContentGroup title="Testimonials"/>
            <ContentGroup title="Team"/>
            <ContentGroup title="Contact" width="200" height="150">
            <ul style={{listStyleType: 'none'}}>
              <li>
                <a href="mailto:MyCorporateEmail@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://facebook.com/MyCorporateFacebook">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/MyCorporateTwitter">Twitter</a>
              </li>
              <li>
                <a href="https://twitter.com/MyCorporateTwitter">Job Opportunities</a>
              </li>
            </ul>
          </ContentGroup>
            <ContentGroup title="About">
          </ContentGroup>

        </SiteNav>
      </header>
  );

