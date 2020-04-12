import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddVideo extends Component {
    render(){
        const {onClose} = this.props;
        return (
            <div className="modal">
                <div className="modal-content" style={{color: '#444444'}}>
                    <span className="close" onClick={onClose(false)} >&times;</span>
                    <h2> Add a new video </h2>
                </div>
            </div>
        );
    }
}

AddVideo.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default AddVideo;