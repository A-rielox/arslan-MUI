import React from "react";
import Box from "@mui/material/Box";

import YaoM from "./assets/yao.jpeg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const pages = ["Cards", "Carousel", "Table"];

const AppBarComp = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<Box sx={{ flexGrow: 1, marginBottom: 3 }}>
				<AppBar position="static">
					<Toolbar>
						{/* en grande */}
						<Typography
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							<img
								src={YaoM}
								alt="yao"
								style={{ width: 50, height: 50 }}
							/>
						</Typography>

						{/* en peque */}
						<Box
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						{/* en grande */}
						<Box
							sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default AppBarComp;
