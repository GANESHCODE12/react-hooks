import { useContext } from 'react';
import { ReactHooksContext } from '../context/ReactHooksContext';
import "../styles/CharacterItem.scss";
import balloonHeart from "../assets/icons/chat-heart.svg";



const CharacterItem = ({ character }) => {
	const { handleClick } = useContext(ReactHooksContext);

	

	return (
		<div className="CharacterItem">
			<img src={character.image} alt={character.name} />
			<div className="character-info">
                <p>{character.name}</p>
				<figure onClick={() => handleClick(character)} >
					<img src={balloonHeart} alt="Favorito" />
				</figure>
			</div>
		</div>
	);
}

export { CharacterItem };