import { Link } from "react-router-dom";
import { ClientProps } from "../../types/types";

const ClientsItem = (props: ClientProps) => {
	return (
		<Link to="#!">
			<img src={props.imgSrc} className="w-100 top" loading="lazy" alt="clients" />
			<img src={props.imgSrc} className="w-100 bottom" loading="lazy" alt="clients" />
		</Link>
	);
};

export default ClientsItem;
