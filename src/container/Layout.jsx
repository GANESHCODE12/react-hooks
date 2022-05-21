import { useContext } from 'react';
import { Header } from '../components/Header';
import { ReactHooksContext } from '../context/ReactHooksContext';
import "../styles/Layout.scss";

const Layout = ({ children }) => {
	const { darkMode } = useContext(ReactHooksContext);
	return (
		<div className="Layout">
			{
				darkMode
					? <div className='Layout-dark'>
						<Header/>
						{children}
					</div>
					: <div className='Layout-ligth'>
						<Header/>
						{children}
					</div>
			}
		</div>
	);
}

export { Layout };