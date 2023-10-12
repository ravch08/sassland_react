import { clientsItems } from "../utils/data.tsx";
import { ClientsItem } from "../utils/helper";

const Clients = () => {
	const clientsitemList = clientsItems.map((client) => (
		<ClientsItem key={client.id} imgSrc={client.imgSrc} />
	));

	return (
		<section id="clients" aria-labelledby="Clients">
			<div className="container">
				<div className="clients-wrapper"> {clientsitemList} </div>
			</div>
		</section>
	);
};

export default Clients;
