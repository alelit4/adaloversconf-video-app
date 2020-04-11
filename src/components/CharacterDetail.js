import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {getCharacterById} from './../api/rickandmortyapi';
import Loading from './Loading';
import Character from "./Character";

class CharacterDetail extends Component {
    
    constructor(props){
        super(props);
        this.state = { isLoading : false, character : null, error : null}
    }

    componentDidMount(){
        const {match} = this.props;
        this.setState({isLoading: true});
        getCharacterById(match.params.id)
        .then(characterData => this.setState({isLoading: false, character: characterData}) )
        .catch(err => this.setState({ isLoading: false,  error: err }));
    }

    render(){
        const {isLoading, character, error } = this.state;
        const {match} = this.props;
        if (error) return <Loading message={`Error = ${error}`}></Loading>
        if (isLoading || !character ) return <Loading message={`Cargando character ${match.params.id}`}></Loading>
        return(<React.Fragment>
            <div className="detail-container">
                <img className="character-image" src={character.image} alt={character.name}/>
                <div className="detail-summary">
                    <h2 className="detail-title"> {character.name} </h2>
                    <div className="character-name">{character.name} <p> Current status = {character.status} </p> </div>
                </div>
            </div>
        </React.Fragment>);
    }

}

export default withRouter(CharacterDetail);