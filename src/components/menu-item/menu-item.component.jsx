import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
    {/* Only wrap the image with the syle, so not to affect the content */}
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
