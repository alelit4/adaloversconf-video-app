import React from 'react';
import PropTypes from 'prop-types';

const Character = ({data}) => (
    <div className="character-grid-item">
        <img className="character-image" src={data.image} alt={data.name}/>
        <div className="character-name">{data.name} <p> Current status = {data.status} </p> </div>
    </div>
);

Character.propTypes = { 
    data: PropTypes.object.isRequired
};

export default Character;