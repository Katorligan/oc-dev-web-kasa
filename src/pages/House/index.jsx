import { useParams } from 'react-router-dom';

function House() {
	const { houseId } = useParams();

	return <div>Logement {houseId}</div>;
}

export default House;
