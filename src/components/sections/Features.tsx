import { featureItems } from "../utils/data.tsx";
import { FeatureItem } from "../utils/helper";

const Features = () => {
	const featureItemsList = featureItems.map((featureItem) => (
		<FeatureItem
			key={featureItem.id}
			svg={featureItem.svg}
			title={featureItem.title}
			description={featureItem.description}
		/>
	));

	return (
		<section id="features" aria-labelledby="Features">
			<div className="container">
				<div className="headings">
					<h2>Features</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam est iusto tempore!
					</p>
				</div>

				<div className="features-wrapper"> {featureItemsList} </div>
			</div>
		</section>
	);
};

export default Features;
