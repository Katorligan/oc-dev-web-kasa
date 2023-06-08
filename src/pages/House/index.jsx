import { useParams } from 'react-router-dom';

function House() {
	const { houseId } = useParams();

	return <main>Logement {houseId}</main>;
}

export default House;
