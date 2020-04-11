import React from 'react';
import PropTypes from 'prop-types';

const Item = ({data}) => (
    <div className="grid-item">
        <img className="preview-image" src={data.thumbnail} alt={data.title}/>
        <div className="preview-title">{data.title} <a href={data.url}>Go to the video!</a></div>
    </div>
);

Item.propTypes = { 
    data: PropTypes.object.isRequired
};

export default Item;
