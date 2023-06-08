import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import bannerPicture from '../../assets/images/banner_home.png';
import './index.css';

function Home() {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch('./logements.json');
				const data = await response.json();
				setHouses(data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	return (
		<main>
			<Banner picture={bannerPicture} alt="Falaises de bord de mer" title="Chez vous, partout et ailleurs" />
			<div className="card-wrapper">
				{houses.map((house) => (
					<Card key={house.id} picture={house.cover} title={house.title} id={house.id} />
				))}
			</div>
		</main>
	);
}

export default Home;
