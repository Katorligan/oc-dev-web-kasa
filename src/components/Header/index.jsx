import { Link } from 'react-router-dom';
import Logo from '../../assets/images/LOGO.png';

function Header() {
	return (
		<header>
			<img src={Logo} alt="Logo" />
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about">A Propos</Link>
			</nav>
		</header>
	);
}

export default Header;
