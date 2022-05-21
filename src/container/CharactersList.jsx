import React, { useContext } from "react";
import { CharacterItem } from "../components/CharacterItem";
import { ReactHooksContext } from "../context/ReactHooksContext";
import "../styles/CharactersList.scss"

const CharactersList = () => {
    const { favorites, filteredUsers } = useContext(ReactHooksContext)

    return (
        <div className="CharactersList">
            { favorites.favorites.length > 0 ? <h2>FAVORITOS</h2> : <></> }
            <div className="Characters-fav">
                {favorites.favorites.map(favorite => (
                    <img src={favorite.image} alt={favorite.name} key={favorite.id}/>
                ))}
            </div>
            <div className="CharactersList-items">
                {filteredUsers.map(character => (
                    <CharacterItem 
                        character={character}
                        key={character.id}
                    />
                ))}
            </div>
        </div>
    );
}

export { CharactersList };