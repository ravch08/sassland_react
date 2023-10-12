import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../utils/helper";

const Header = () => {
	const [isSticky, setIsSticky] = useState("");

	const makeSticky = () => {
		const stickyClass = window.scrollY > 250 ? "sticky" : "";
		setIsSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", makeSticky);
		return () => window.removeEventListener("scroll", makeSticky);
	});

	return (
		<header className={isSticky}>
			<div className="container">
				<div className="header-wrapper">
					<Link to="/" className="nav-brand">
						<img src={Logo} width="150" alt="logo" />
					</Link>

					<nav aria-labelledby="Primary Navigation">
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									HOME
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/portfolio" className="nav-link">
									PORTFOLIO
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 320 512"
									>
										<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
									</svg>
								</Link>
								<ul className="dropdown-menu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio Grid
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio Masonry
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio Fluid
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio Details
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<Link to="/blog" className="nav-link">
									BLOG
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 320 512"
									>
										<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
									</svg>
								</Link>
								<ul className="dropdown-menu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Blog Grid
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Blog Masonry
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Blog Fluid
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Single Post
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<Link to="/shop" className="nav-link">
									SHOP
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 320 512"
									>
										<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
									</svg>
								</Link>
								<ul className="dropdown-menu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Product Grid
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Product nav-list
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Wishlist
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Cart
										</Link>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									CONTACT
								</Link>
							</li>
						</ul>
					</nav>

					<Link to="#!" className="btn btn-outline">
						Download For Free
					</Link>

					<div className="hamburger-menu">
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
