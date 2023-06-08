import { Link } from 'react-router-dom';
import './index.css';

function Card(props) {
	const { picture, title, id } = props;

	return (
		<Link to={`/house/${id}`} className="card">
			<img src={picture} alt={title} />
			<div className="gradient-bg">{title && <h2>{title}</h2>}</div>
		</Link>
	);
}

export default Card;
