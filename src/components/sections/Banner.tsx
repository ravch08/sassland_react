import {
	ButtonGradient,
	Elipses,
	Slider1024,
	Slider576,
	Slider768,
	SliderImg,
	SocialIcons,
} from "../utils/helper";

const Banner = () => {
	return (
		<section id="sliders" aria-labelledby="Slider">
			<img src={Elipses} className="elipses" loading="lazy" alt="elipses" />

			<div className="container">
				<div className="slider-wrapper">
					<div className="slider-content">
						<div className="subtitle">
							<span>NEW</span>
							<p>Create your own playlist inside Saasland</p>
						</div>

						<h1>
							Millions of <br /> content at your <br /> fingertips.
						</h1>
						<p>
							Saasland is a free, limitless content-sharing platform. Discover and share awesome
							content with millions of users worldwide.
						</p>

						<ButtonGradient btnText="Download For Free" />

						<span>
							1M+ podcast lovers already <br /> downloaded Saasland
						</span>

						<SocialIcons />
					</div>

					<picture>
						<source media="(max-width:600px)" srcSet={Slider576} />
						<source media="(max-width:800px)" srcSet={Slider768} />
						<source media="(max-width:1100px)" srcSet={Slider1024} />
						<img src={SliderImg} className="w-100 slider-img" alt="slider-img" />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default Banner;
