import starActive from '../../assets/images/star_active.png';
import starInactive from '../../assets/images/star_inactive.png';
import './index.css';

function Rating(props) {
	const { rating } = props;
	const ratingsNumber = [1, 2, 3, 4, 5];

	return <div className="rating-wrapper">{ratingsNumber.map((number) => (number <= rating ? <img src={starActive} alt="Star active" /> : <img src={starInactive} alt="Star inactive" />))}</div>;
}

export default Rating;
