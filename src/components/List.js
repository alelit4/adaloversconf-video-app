import React, {Component} from 'react';
import Loading from './Loading'
import Item from './Item';
import {getVideos} from './../api/index';

import {getCharacter}  from './../api/rickandmortyapi';
import Character from './Character';

class List extends Component {
     constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            videos: null, 
            error: null, 
            characters : null
        }
     }
    
    async componentDidMount(){
        this.setState({isLoading: true});
     //   getVideos().then((apiVideos) => { 
     //       this.setState({isLoading: false, videos: apiVideos});
     //   }).catch((error) => (this.setState({isLoading: false, error}) ));
        getCharacter().then((apiCharacter) => { 
            this.setState({isLoading: false, characters: apiCharacter});
        }).catch((error) => (this.setState({isLoading: false, error}) ));


    }
    render(){
        const {isLoading, videos, characters, error } = this.state;
        if(error) return (<Loading message="Error Loading content ..."></Loading>);
        if(isLoading) return (<Loading message="Loading content ..."></Loading>);
        return (<React.Fragment> 
            <div className="container">
                <div className="grid-container">
                    { videos && videos.map((video, i) => {
                            return (<Item key={i} data={video} /> )
                      }) 
                    }
                </div>
                <div className="character-grid-container">
                    { characters && characters.map((character, i) => {
                            return (<Character key={i} data={character} /> )
                      }) 
                    }
                </div>
            </div>
            </React.Fragment>)
    }
}

export default List;