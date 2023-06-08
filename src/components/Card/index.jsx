import './index.css';

function Card(props) {
	const { picture, alt, title } = props;

	return (
		<div className="card">
			<img src={picture} alt={alt} />
			<div className="gradient-bg">{title && <h2>{title}</h2>}</div>
		</div>
	);
}

export default Card;
