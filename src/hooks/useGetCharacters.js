import { useState, useEffect } from "react";


const useGetCharacters = (API) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    return characters;
}

export { useGetCharacters  }