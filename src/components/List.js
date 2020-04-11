import React, {Component} from 'react';
import Loading from './Loading'
import Item from './Item';
import {getVideos} from './../api';

class List extends Component {
     constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            videos: null
        }
     }
    componentDidMount(){
        this.setState({isLoading: true});
        getVideos().then((apiVideos) => { 
            this.setState({isLoading: false, videos: apiVideos});
        });
    }
    render(){
        const {isLoading, videos} = this.state;
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