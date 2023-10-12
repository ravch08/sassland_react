import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	Blog,
	Contact,
	Footer,
	Header,
	Home,
	Page404,
	Portfolio,
	Shop,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
