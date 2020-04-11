import React, {Component} from 'react';
import Loading from './Loading'
import Item from './Item';

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
        setTimeout( () => {
            this.setState({isLoading: false, videos: [
                {  
                    id:0,
                    title:'Flutter and the Dart Side 💜🌈 - Alexandra Rivero García en AdaLoversConf 2019',
                    url:'https://youtu.be/f07uhqGyu78',
                    thumbnail:'https://img.youtube.com/vi/f07uhqGyu78/maxresdefault.jpg',
                  },
                {   
                    id:1,
                    title:'Refactorizar y como refactorizar esa es la cuestión 💯⭐️ Yodra López en AdaLoversConf 2019 ',
                    url: 'https://youtu.be/mwqfDyQv6Ls',
                    thumbnail:'https://img.youtube.com/vi/mwqfDyQv6Ls/maxresdefault.jpg',
                  },
                  {  
                    id:2,
                    title:'De su padre y de su madre 📣🔥 Diversidad en equipos de trabajo | Isabel Aguilar Undiano AdaLoversConf 2019',
                    url:'https://youtu.be/hmdAT0GtDuU',
                    thumbnail:'https://img.youtube.com/vi/hmdAT0GtDuU/maxresdefault.jpg',
                  },
                  {   
                    id:3,
                    title:'Test en React 🦄✨ Marta Alvarez Torres en AdaLoversConf 2019',
                    url: 'https://youtu.be/UWbhtop9Zgs',
                    thumbnail:'https://img.youtube.com/vi/UWbhtop9Zgs/maxresdefault.jpg',
                  }
            ]});
        }, 2000);    
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