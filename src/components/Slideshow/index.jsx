import './index.css';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';

function Slideshow(props) {
	const { pictures } = props;

	return (
		<div className="slideshow">
			{pictures.map((picture, index) => (
				<img className={index === 0 ? 'slide active' : 'slide'} src={picture} alt="Logement" key={`picture-${index}-${picture}`} />
			))}
			<img className="previous" src={arrowLeft} alt="Précédent" />
			<img className="next" src={arrowRight} alt="Suivant" />
			{pictures.length > 1 && <div className="slide-counter">1/{pictures.length}</div>}
		</div>
	);
}

export default Slideshow;
