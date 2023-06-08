import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './index.css';
import bannerPicture from '../../assets/images/banner_home.png';

function Home() {
	return (
		<main>
			<Banner picture={bannerPicture} alt="Falaises de bord de mer" title="Chez vous, partout et ailleurs" />
			<div className="card-wrapper">
				<Card picture={bannerPicture} title="Ceci est le titre de la location" />
			</div>
		</main>
	);
}

export default Home;
