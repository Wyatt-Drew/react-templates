import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import SiteNav, {ContentGroup} from 'react-site-nav'; // 1. Do this
// import Home from './home';
// import MyStory from './myStory';

export default () =>
  (
    <div>
      {/* 2. Add SiteNav with ContentGroup as children */}
      <SiteNav>
        <ContentGroup title="About" height="200">
          {/* 3. You can add anything in a ContentGroup */}
          <ul>
            {/* react router link! */}
            {/* <li><Link to="/my-story">My Story</Link></li> */}
            <li>Another list item</li>
          </ul>
        </ContentGroup>
        <ContentGroup title="Contact" height="200">
          Free text followed by some links.<br/>
          <a href="mailto:yusinto@gmail.com">Email</a><br/>
          <a href="https://github.com/yusinto">Github</a>
        </ContentGroup>
      </SiteNav>
      {/* <Switch> */}
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route path="/my-story" component={MyStory}/> */}
      {/* </Switch> */}
    </div>
  );

