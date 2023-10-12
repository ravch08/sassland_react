import { podcastItems } from "../utils/data.tsx";
import { Episode2, PodcastItem, Screen4, Screen5 } from "../utils/helper";

const Podcasts = () => {
	const podcastItemsList = podcastItems.map((podcastItem) => (
		<PodcastItem
			key={podcastItem.id}
			title={podcastItem.title}
			list1={podcastItem.list1}
			list2={podcastItem.list2}
			list3={podcastItem.list3}
			episode={podcastItem.episode}
			screen1={podcastItem.screen1}
			screen2={podcastItem.screen2}
			btnText={podcastItem.btnText}
			subtitle={podcastItem.subtitle}
			description={podcastItem.description}
			podclass={(podcastItems.indexOf(podcastItem) + 1) % 2 === 0 ? "flex-reverse" : ""}
		/>
	));

	return (
		<section id="podcast" aria-labelledby="Podcast">
			<div className="container">
				<div className="headings">
					<h2>Where the podcast begins</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam est iusto tempore!
					</p>
				</div>

				{podcastItemsList}

				<div className="podcast-wrapper">
					<figure>
						<img src={Episode2} className="w-100" loading="lazy" alt="Podcast Episode" />
						<img src={Screen4} className="podcast-screen4" loading="lazy" alt="app screen" />
						<img src={Screen5} className="podcast-screen5" loading="lazy" alt="app screen" />
					</figure>

					<div className="podcast-content">
						<span>PLAYER</span>
						<h3>Powerful Controller</h3>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>

						<div className="podcast-points">
							<h4>Equalizer</h4>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
							<h4>Volume</h4>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
						</div>

						<a href="#" className="btn btn-text">
							Learn More
							<svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 256 512">
								<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Podcasts;
