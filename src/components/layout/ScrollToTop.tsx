import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [isScroll, setIsScroll] = useState("");

	const scroller = () => {
		const scrollClass = window.scrollY > 250 ? "show" : "";
		setIsScroll(scrollClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", scroller);
		return () => window.removeEventListener("scroll", scroller);
	});

	const scrollTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollTop = `${isScroll} scrollTop`;

	return (
		<div className={scrollTop} onClick={scrollTopHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512">
				<path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
			</svg>
		</div>
	);
};

export default ScrollToTop;
