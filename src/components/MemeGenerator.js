import React, {
	useEffect,
	useState,
} from "react";
import memeImg from "./images/memeimg.png";

export default function MemeGenerator() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "",
		submit: false,
	});

	const [memeData, setMemeData] = useState([]);
	let newUrl;

	function getMemeImage() {
		const memes = memeData.length;
		const randInt = Math.floor(
			Math.random() * memes
		);

		console.log(memeData[randInt]);
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: memeData[randInt].url,
				submit: true,
			};
		});
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
			};
		});
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) =>
				setMemeData(data.data.memes)
			);
	}, []);

	return (
		<div>
			<div className="form">
				<input
					type="text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button
					type="submit"
					name=""
					id=""
					onClick={getMemeImage}
					value=""
				>
					Get new meme image
				</button>

				<div className="meme">
					<img
						src={
							meme.randomImage
								? meme.randomImage
								: memeImg
						}
						alt="Meme"
						className="meme--image"
					/>

					<h2 className="meme--text top">
						{meme.submit && meme.topText}
					</h2>
					<h2 className="meme--text bottom">
						{meme.submit && meme.bottomText}
					</h2>
				</div>
			</div>
		</div>
	);
}
