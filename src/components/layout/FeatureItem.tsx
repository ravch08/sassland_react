import { FeatureProps } from "../../types/types";

const FeatureItem = (props: FeatureProps) => {
	return (
		<div className="feature-item">
			<figure>{props.svg}</figure>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
};

export default FeatureItem;
