export const firstStore = () => {
    return {
        message: null
        todos: [
            {
                id: 1,
                title: "Do Laundry",
                background: null,
            },
            {
                id: 2,
                title: "Walk the Dog",
                background: null,
            }
        ],
        characters: [];
    }
    
}

export default function storeReducer( store, action = {}) {
    switch(action.type) {
        case 'add_task':

        const { id, color } = action.payload

        return {
            ...store,
            todos: store.todos.map ((todo) => (todo.id === id ? { ...todo, background: color} : todo))
        };
        default:
            throw Error('Unknown Action.');

    }
}