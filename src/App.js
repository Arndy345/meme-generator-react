import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
	const card = data.map((item) => {
		// let image = `../images/${item.coverImg}`;
		// console.log(image);
		return <Card key={item.id} {...item} />;
	});
	return (
		<div className="App">
			<Navbar />

			<Hero />
			<section className="cards-list">
				{card}
			</section>
		</div>
	);
}

export default App;
