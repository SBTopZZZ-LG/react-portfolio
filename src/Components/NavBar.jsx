import React, { useEffect, useState } from 'react';
import {
	Menu,
	Close,
} from "@material-ui/icons";
import { IconButton } from '@mui/material';
import ToggleIcon from "material-ui-toggle-icon";

import "./NavBar.css";

const Navbar2 = ({
	onMenuClick = undefined,
}) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showShadow, setShowShadow] = useState(false);

	function handleScroll(ev) {
		setShowShadow(window.scrollY > 5);
	}

	useEffect(() => {
		if (window.scrollY > 5)
			setShowShadow(true);

		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (onMenuClick !== undefined)
			onMenuClick(showMenu);

		if (showMenu)
			window.scrollTo(0, 0);
	}, [onMenuClick, showMenu]);

	return (
		<nav className={`sticky ${showShadow && "shadow"}`}>
			<div>
				<span className="navbar-logo prevent-select">SBTOPZZZ</span>
			</div>

			<div className="right">
				<IconButton color="inherit" onClick={() => setShowMenu(!showMenu)}>
					<ToggleIcon
						on={showMenu}
						offIcon={<Menu className="navbar-icon" />}
						onIcon={<Close className="navbar-icon" />}
					/>
				</IconButton>
			</div>
		</nav>
	);
};

export default Navbar2;
