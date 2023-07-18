import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import bannerPicture from '../../assets/images/banner_home.png';
import housesData from '../../assets/data/logements.json';
import './index.scss';

function Home() {
	const [houses, setHouses] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const data = housesData;
		setHouses(data);
		setLoading(false);
	}, []);

	return (
		<main>
			<Banner picture={bannerPicture} alt="Falaises de bord de mer" title="Chez vous, partout et ailleurs" />
			{isLoading ? (
				<Loader />
			) : (
				<div className="card-wrapper">
					{houses.map((house) => (
						<Card key={house.id} house={house} />
					))}
				</div>
			)}
		</main>
	);
}

export default Home;
