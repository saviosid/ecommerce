import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.component.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   return (
      <div
         className={`${size} menu-item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
         <div
            className="background-image"
            style={{
               backgroundImage: `url(${imageUrl})`
            }}
         />
         <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
      </div>
   );
};

export default withRouter(MenuItem);

// WithRouter is a higher order function which gives us access to the Routes
// match object which is only available to the Routes component, not children
// hence menu-item now has access to history and can be used as a prop
