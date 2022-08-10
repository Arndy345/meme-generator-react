import logo from "./images/logo.png";

const Navbar = () => {
	return (
		<nav>
			<img src={logo} alt="logo" />
			<p>My Travel journal.</p>
		</nav>
	);
};

export default Navbar;
