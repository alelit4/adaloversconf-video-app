
export const getCharacter = () => new Promise((resolve, reject) => {
    getRickAndMortyCharacter().then( (character) => {
        character.results = character.join();
        return resolve(character);
    }).catch(console.error);
});

const getRickAndMortyCharacter = async() => {
    try {
        let character = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,23,24,53,76,79,87');    
        return character.json();
    } catch (error) {
        throw error;        
    }
}