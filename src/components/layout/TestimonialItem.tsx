import { TestimonialProps } from "../../types/types";

const TestimonialItem = (props: TestimonialProps) => {
	return (
		<div className="testimonial-item">
			<figure>
				<img src={props.imgSrc} alt={props.author} />
			</figure>
			<p>“{props.quote}”</p>

			<span>{props.author}</span>
			<small>{props.designation}</small>
		</div>
	);
};

export default TestimonialItem;
