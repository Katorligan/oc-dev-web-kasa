import Banner from '../../components/Banner';
import bannerPicture from '../../assets/images/banner_home.png';

function Home() {
	return (
		<div>
			<Banner picture={bannerPicture} alt="Falaises de bord de mer" title="Chez vous, partout et ailleurs" />
		</div>
	);
}

export default Home;
