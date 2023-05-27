import React from 'react';
import {
	Phone,
	Menu,
} from "@material-ui/icons";
import { IconButton } from '@mui/material';

import { HGap } from "./Gap";
import "./NavBar.css";

const Navbar2 = () => {
	return (
		<nav>
			<div>
				<span className="navbar-logo">SBTOPZZZ</span>
			</div>

			<div className="right">
				<Phone className="navbar-icon" />
				<HGap gap={14} />

				<span className="navbar-text">+91 91084 24029</span>
				<HGap gap={35} />

				<IconButton color="inherit">
					<Menu className="navbar-icon" />
				</IconButton>
			</div>
		</nav>
	);
};

export default Navbar2;
