import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect/dist/core';

class Loading extends Component {

    componentDidMount(){
        this.typewriter = new Typewriter(this.$loading, 
            {strings : [this.props.message],
                autoStart: true});
    }
   
    render(){
        return (<div className="loading" ref={el => this.$loading = el}> </div>);
    }

}

Loading.propTypes = {
    message: PropTypes.string.isRequired
};

export default Loading;