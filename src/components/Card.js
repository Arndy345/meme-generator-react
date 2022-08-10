import icon from "./images/location.png";

const Card = (props) => {
	return (
		<div className="card modifier">
			<img
				src={props.imageUrl}
				className="card--image"
				alt="cover"
			/>
			<div className="card--stats">
				<h2>{props.title}</h2>
				<>
					<h3>{`${props.startDate} - ${props.endDate}`}</h3>
				</>
				<p>{props.description}</p>
				<div className="card-top">
					<a
						href={props.googleMapsUrl}
						target="_blank"
						rel="noreferrer"
					>
						<img src={icon} alt="location-icon" />
					</a>

					<span>{props.location}</span>
					<a
						href={props.googleMapsUrl}
						target="_blank"
						rel="noreferrer"
					>
						View on Google Maps
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
