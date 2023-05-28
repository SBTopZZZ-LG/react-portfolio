import React from 'react';
import {
	Menu,
} from "@material-ui/icons";
import { IconButton } from '@mui/material';

import "./NavBar.css";

const Navbar2 = () => {
	return (
		<nav>
			<div>
				<span className="navbar-logo">SBTOPZZZ</span>
			</div>

			<div className="right">
				<IconButton color="inherit">
					<Menu className="navbar-icon" />
				</IconButton>
			</div>
		</nav>
	);
};

export default Navbar2;
