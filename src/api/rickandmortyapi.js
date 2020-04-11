
export const getCharacter = () => new Promise((resolve, reject) => {
    getRickAndMortyCharacter().then( (character) => {
        character.results = character.join();
        return resolve(character);
    }).catch(console.error);
});


const getRickAndMortyCharacter = async(id) => {
    try {
        if(!id)
            id = '1,2,3,4,5,6,7,8,23,24,53,76,79,87';
        let character = await fetch('https://rickandmortyapi.com/api/character/'+id);  
        return character.json();
    } catch (error) {
        throw error;        
    }
}

export const getCharacterById = (id) => new Promise((resolve, reject) => {
    getRickAndMortyCharacter(id).then( (character) => {
        return resolve(character);
    }).catch(console.error);
});
