import { Banner, Clients, Features, Notifications, Podcasts, Testimonials } from "../utils/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<Clients />
			<Features />
			<Podcasts />
			<Testimonials />
			<Notifications />
		</main>
	);
};

export default Home;
