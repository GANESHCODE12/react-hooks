import { useContext } from "react";
import { ReactHooksContext } from "../context/ReactHooksContext";
import toggleOn from "../assets/icons/toggle-on.svg";
import toggleOff from "../assets/icons/toggle-off.svg";
import "../styles/Header.scss";


const Header = () => {
    const {
        darkMode, 
        changeDarkMode,
        search,
        handleSearch
    } = useContext(ReactHooksContext);

    return (
        <nav>
            <div className="navbar-left">
                <ul>
                    <li>
                    {
                        darkMode 
                            ? <p className='title-nav-dark'>RICK AND MORTY</p>
                            : <p className='title-nav'>RICK AND MORTY</p>
                    }
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" >
                        <input 
                            className="Search" 
                            type="text"
                            placeholder="Search Character"
                            value={search} 
                            onChange={handleSearch}
                            />
                    </li>
                    <li className="navbar-icon">
                        {
                            darkMode 
                                ? <button 
                                    type="button" 
                                    onClick={changeDarkMode}
                                    value={darkMode}
                                    className="button-dark">
                                <img src={toggleOff} alt="sun" className='sun'/> 
                                </button>
                                : <button 
                                    type="button" 
                                    onClick={changeDarkMode}
                                    value={darkMode}
                                    className="button-ligth">
                                <img src={toggleOn} alt="moon" className='moon'/>
                                </button>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };