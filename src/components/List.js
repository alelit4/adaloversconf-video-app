import React, {Component} from 'react';
import Loading from './Loading'
import Item from './Item';
import {getVideos} from './../api/index';
import AddVideo from './AddVideo';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class List extends Component {
     constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            videos: null, 
            error: null, 
            showAddVideo: false
        }
        this.handleAddVideo = this.handleAddVideo.bind(this);
        this.handleCloseAddVideo = this.handleCloseAddVideo.bind(this);
    }
    
    async componentDidMount(){
        this.setState({isLoading: true});
        getVideos().then((apiVideos) => { 
            this.setState({isLoading: false, videos: apiVideos});
        }).catch((error) => (this.setState({isLoading: false, error}) ));
    }
    handleAddVideo(e){
        e.preventDefault();
        this.setState({showAddVideo: true});
    }
    handleCloseAddVideo(reload){
        return () => {
            if(reload){
                this.setState({ isLoading: true, showAddVideo: false });
                getVideos().then((apiVideos) => { 
                    this.setState({isLoading: false, videos: apiVideos, showAddVideo: false});
                }).catch((error) => (this.setState({isLoading: false, error, showAddVideo: false}) ));
            }else{
                this.setState({showAddVideo: false});
            }
        }
    }
    render(){
        const {isLoading, videos, error } = this.state;
        if(error) return (<Loading message="Error Loading content ..."></Loading>);
        if(isLoading) return (<Loading message="Loading content ..."></Loading>);
        return (
            <React.Fragment> 
                <div className="container">
                    <div className="grid-container">
                        { videos && videos.map((video, i) => {
                                return (<Item key={i} data={video} /> ) }) 
                        }
                    </div>
                </div>
                <Fab color="primary" aria-label="add"  onClick={this.handleAddVideo} style={{position:'fixed', bottom: '20px', right: '30px'}}>
                    <AddIcon />
                </Fab>
                {this.state.showAddVideo && (<AddVideo onClose={this.handleCloseAddVideo}/>)}
            </React.Fragment>
        )
    }
}

export default List;

