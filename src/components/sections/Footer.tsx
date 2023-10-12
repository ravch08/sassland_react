import { Link } from "react-router-dom";

import { Logo, ScrollToTop, SocialIcons } from "../utils/helper";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-wrapper">
					<Link to="/" className="ftr-logo">
						<img src={Logo} alt="logo" />
					</Link>

					<nav className="ftr-nav" aria-labelledby="Footer Navigation">
						<Link to="#!">HOME</Link>
						<Link to="#!">PRODUCTS</Link>
						<Link to="#!">CUSTOMERS</Link>
						<Link to="#!">PRICING</Link>
						<Link to="#!">CONTACT</Link>
					</nav>

					<div className="footbar">
						<SocialIcons />
						<p>
							©2022{" "}
							<Link to="/">
								<em>SAASLAND</em>
							</Link>
							. All rights reserved
						</p>
					</div>
				</div>
			</div>
			<ScrollToTop />
		</footer>
	);
};

export default Footer;
