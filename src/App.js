import { Route, Routes } from "react-router-dom";
import "./App.css";

import AppBarComp from "./components/AppBar";

import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Table from "./components/Table";
import Chips from "./components/Chips";

function App() {
	return (
		<div className="App">
			<AppBarComp />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Cards" element={<Card />} />
				<Route path="/Carousel" element={<Carousel />} />
				<Route path="/Table" element={<Table />} />
				<Route path="/Chips" element={<Chips />} />
			</Routes>
		</div>
	);
}

export default App;
