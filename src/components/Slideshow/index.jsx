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
			{pictures.length > 1 && (
				<div className="slideshow-interaction-wrapper">
					<img className="previous" src={arrowLeft} alt="Précédent" />
					<img className="next" src={arrowRight} alt="Suivant" />
					<div className="slide-counter">1/{pictures.length}</div>
				</div>
			)}
		</div>
	);
}

export default Slideshow;
