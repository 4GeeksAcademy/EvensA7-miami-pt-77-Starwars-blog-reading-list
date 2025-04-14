export const initialStore=()=>{
  return {
        
    characters: [],
    planets: [],
    favorites: [],
}

}

export default function storeReducer( store, action = {}) {
switch(action.type) {
    case 'add_characters':


    return {
        ...store,
        characters: action.payload
    };
    
    case 'add_planets':


    return {
        ...store,
        planets: action.payload
    };

    case 'toggle_favorites':
        let name = action.payload
        let newFavorites = []
        if(store.favorites.includes(name)){
            newFavorites = store.favorites.filter((item)=>item!=name)
            console.log(false)
        } else{
            store.favorites.push(name)
            console.log(true)
        }
        return {
            ...store,
            favorites: newFavorites
        };
    default:
        throw Error('Unknown Action.');

}
}