import { createContext, useState, useReducer, useMemo } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";

const ReactHooksContext = createContext();

function ReactHooksProvider(props) {
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState('');

    const initialState = {
        favorites: []
    }
    const API = 'https://rickandmortyapi.com/api/character/';
    const characters = useGetCharacters(API)

    
    const favoriteReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_FAVORITE':
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                };
            default:
                return state;
        }
    }

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleClick = favorite => {
		dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
	}

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        }),
        [characters, search]
    )

    return (
        <ReactHooksContext.Provider value={{
            darkMode,
            search,
            changeDarkMode,
            handleSearch,
            favorites,
            dispatch,
            initialState,
            handleClick,
            characters,
            filteredUsers
        }}>
            {props.children}
        </ReactHooksContext.Provider>
    )
}

export { ReactHooksContext, ReactHooksProvider };