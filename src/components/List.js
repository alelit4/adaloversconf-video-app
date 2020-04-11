import React, {Component} from 'react';
import Loading from './Loading'
import Item from './Item';
import {getVideos} from './../api';

class List extends Component {
     constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            videos: null, 
            error: null
        }
     }
    
    async componentDidMount(){
        this.setState({isLoading: true});
        getVideos().then((apiVideos) => { 
            this.setState({isLoading: false, videos: apiVideos});
        }).catch((error) => (this.setState({isLoading: false, error}) ));
    }
    render(){
        const {isLoading, videos, error } = this.state;
        if(error) return (<Loading message="Error Loading videos ..."></Loading>);
        if(isLoading) return (<Loading message="Loading videos ..."></Loading>);
        return (<React.Fragment> 
            <div className="container">
                <div className="grid-container">
                    { videos && videos.map((video, i) => {
                            return (<Item key={i} data={video} /> )
                      }) 
                    }
                </div>
            </div>
            </React.Fragment>)
    }
}

export default List;