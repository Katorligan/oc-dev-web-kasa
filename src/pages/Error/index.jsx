import { Link } from 'react-router-dom';
import './index.css';

function Error() {
	return (
		<div className="error">
			<h2>404</h2>
			<h3>Oups! La page que vous demandez n'existe pas.</h3>
			<Link to="/">Retourner sur la page d'accueil</Link>
		</div>
	);
}

export default Error;
