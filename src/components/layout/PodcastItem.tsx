import { Link } from "react-router-dom";
import { PodcastProps } from "../../types/types";

const PodcastItem = (props: PodcastProps) => {
	const screenClass = props.screen2 ? "podcast-screen2" : "d-none";
	const podClassed = props.podclass ? `${props.podclass} podcast-wrapper` : "podcast-wrapper";

	return (
		<div className={podClassed}>
			<figure>
				<img src={props.episode} className="w-100" loading="lazy" alt={props.title} />
				<img src={props.screen1} className="podcast-screen1" loading="lazy" alt="app screen" />
				<img src={props.screen2} className={screenClass} loading="lazy" alt="app screen" />
			</figure>

			<div className="podcast-content">
				<span>{props.subtitle}</span>
				<h3>{props.title}</h3>
				<p>{props.description}</p>

				<ul className="podcast-list">
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
							<path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
						</svg>
						{props.list1}
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
							<path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
						</svg>
						{props.list2}
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
							<path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
						</svg>
						{props.list3}
					</li>
				</ul>

				<Link to="#!" className="btn btn-text">
					{props.btnText}
					<svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 256 512">
						<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default PodcastItem;
