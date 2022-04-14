import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import YaoM from "./assets/yao.jpeg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const pages = ["Cards", "Carousel", "Table", "Chips"];

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const drawerWidth = 241;

const AppBarComp = () => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
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
							<Link to="/">
								<img
									src={YaoM}
									alt="yao"
									style={{ width: 50, height: 50 }}
								/>
							</Link>
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
								onClick={handleDrawerOpen}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</Box>

						{/* en grande */}
						<Box
							sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						>
							{pages.map((page) => (
								<Button
									key={page}
									component={Link}
									to={`/${page}`}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>

				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
						},
					}}
					variant="temporary"
					anchor="left"
					open={open}
					onClose={handleDrawerClose}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<AgricultureIcon fontSize="large" />
							) : (
								<AirlineSeatFlatIcon />
							)}
						</IconButton>
					</DrawerHeader>

					<Divider />

					<List>
						{pages.map((link, index) => (
							<ListItem
								button
								component={Link}
								to={`/${link}`}
								key={index}
							>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<AirlineSeatFlatIcon />
									) : (
										<AgricultureIcon />
									)}
								</ListItemIcon>

								<ListItemText primary={link} />
							</ListItem>
						))}
					</List>
					<Divider />
				</Drawer>
			</Box>
		</div>
	);
};

export default AppBarComp;
