import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
	const card = data.map((item) => {
		return <Card key="" {...item} />;
	});
	return (
		<div className="App">
			<Navbar />
			<section className="cards-list">
				{card}
			</section>
		</div>
	);
}

export default App;
