import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';

function House() {
	const { houseId } = useParams();
	const house = JSON.parse(localStorage.getItem(houseId));

	return (
		<main>
			<Slideshow pictures={house.pictures} />
		</main>
	);
}

export default House;
