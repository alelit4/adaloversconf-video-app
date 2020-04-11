import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Character extends Component{
	render(){
		const { id, image, name, status } = this.props.data;
		return (<Link className="grid-item-link" to={`/character/${id}`}>
			 <div className="character-grid-item">
                <img className="character-image" src={image} alt={name}/>
                <div className="character-name">{name} <p> Current status = {status} </p> </div>
            </div>
		</Link>);
	}
}

Character.propTypes = { 
    data: PropTypes.object.isRequired
};

export default Character;