import { testimonialItems } from "../utils/data.tsx";
import { TestimonialItem } from "../utils/helper";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
	const testimonialItemsList = testimonialItems.map((testimonialItem) => (
		<SwiperSlide key={testimonialItem.id}>
			<TestimonialItem
				quote={testimonialItem.quote}
				imgSrc={testimonialItem.imgSrc}
				author={testimonialItem.author}
				designation={testimonialItem.designation}
			/>
		</SwiperSlide>
	));

	return (
		<section id="testimonial" aria-labelledby="Testimonials">
			<div className="container">
				<div className="headings">
					<h2>People love Saasland Podcast</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea blanditiis asperiores
						voluptate.
					</p>
				</div>

				<Swiper
					loop={true}
					speed={1500}
					spaceBetween={30}
					slidesPerView={1}
					grabCursor={true}
					centeredSlides={true}
					id="swiper-testimonial"
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
				>
					{testimonialItemsList}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
