import React from "react";
import photo from "./images/photo-grid.svg";

function Hero() {
	return (
		<section className="hero-section modifier">
			<div className="">
				<img src={photo} alt="photo-grid" />
			</div>
			<div>
				<h2>Online Experiences</h2>
				<p>
					Join unique interactive activities led
					by one-of-a-kind hosts—all without
					leaving home.
				</p>
			</div>
		</section>
	);
}

export default Hero;
