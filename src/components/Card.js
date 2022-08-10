import React from "react";
import star from "./images/Star.png";

function Card(props) {
	return (
		<div className="card">
			<img
				src={require(`./images/${props.coverImg}`)}
				className="card--image"
				alt="cover"
			/>
			<div className="card--stats">
				<img
					src={star}
					className="card--star"
					alt="icon"
				/>
				<span>{props.stats.rating}</span>
				<span className="gray">
					({props.stats.reviewCount}) •{" "}
				</span>
				<span className="gray">
					{props.location}
				</span>
			</div>
			<p className="card--title">{props.title}</p>
			<p className="card--price">
				<span className="bold">
					From ${props.price}
				</span>{" "}
				/ person
			</p>
			{props.openSpots ? (
				<span className="icon">ONLINE</span>
			) : (
				<span className="icon">SOLD OUT</span>
			)}
		</div>
	);
}

export default Card;
