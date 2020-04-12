import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {getVideoDetail} from './../api';
import Loading from './Loading';
import Video from "./Video";
import {fadeIn} from './../internalLibs/FadeIn'

class Detail extends Component {
    
    constructor(props){
        super(props);
        this.state = { isLoading : false, video : null, error : null}
    }

    componentDidMount(){
        const {match} = this.props;
        this.setState({isLoading: true});
        getVideoDetail(match.params.id)
        .then(videoData => this.setState({isLoading: false, video: videoData}) )
        .catch(err => this.setState({ isLoading: false,  error: err }));
    }

    render(){
        const {isLoading, video, error } = this.state;
        const {match} = this.props;
        if (error) return <Loading message={`Error = ${error}`}></Loading>
        if (isLoading || !video ) return <Loading message={`Cargando video ${match.params.id}`}></Loading>
        return(<React.Fragment>
            <div className="detail-container">
                <Video title={video.title} embed={video.embed}/>
                <div className="detail-summary">
                    <h2 className="detail-title"> {video.title} </h2>
                    <p ref={el => fadeIn(el)}> {video.description} </p>
                </div>
            </div>
        
        </React.Fragment>);
    }

}

export default withRouter(Detail);