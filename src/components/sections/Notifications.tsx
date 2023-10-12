import { ButtonGradient } from "../utils/helper";

const Notifications = () => {
	return (
		<section id="notification" aria-labelledby="Notification">
			<div className="container">
				<div className="notification-wrapper">
					<div className="content">
						<h2>Let's Get Started</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est labore aspernatur, iure
							deserunt, reprehenderit quasi aliquam eius qui, expedita reiciendis laboriosam
							suscipit.
						</p>
					</div>

					<ButtonGradient btnText="Download For Free" />
				</div>
			</div>
		</section>
	);
};

export default Notifications;
