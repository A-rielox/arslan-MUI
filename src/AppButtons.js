import "./App.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import AddLocationIcon from "@mui/icons-material/AddLocation";
import AnchorIcon from "@mui/icons-material/Anchor";

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";

// cambiando estilos con sx
const BoxComponent = () => {
	return (
		<Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
			<Button>Save</Button>
		</Box>
	);
};

// cambiando estilos con styled
const StyledButton = styled(Button)({
	fontSize: 25,
	padding: 20,
	borderRadius: 30,
	backgroundColor: "#660080",
	textTransform: "capitalize",
	"&:hover": {
		backgroundColor: "#dcb5e6",
		color: "#660080",
	},
});

function App() {
	const handleClick = () => {
		console.info("You clicked the Chip.");
	};

	return (
		<div className="App">
			<Box sx={{ p: 2, border: "1px dashed grey" }}>
				<Button>
					<AddLocationIcon /> &nbsp; Super Boton
				</Button>
			</Box>
			<br />
			<br />
			<br />
			<Stack
				direction="row"
				spacing={2}
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Button
					color="secondary"
					endIcon={<AddLocationIcon />}
					sx={{ p: 2, border: "1px dashed grey" }}
				>
					Super Boton
				</Button>

				<BoxComponent />
			</Stack>

			<IconButton aria-label="ancla" color="success" size="large">
				<AnchorIcon fontSize="large" />
			</IconButton>

			<StyledButton variant="contained">styled</StyledButton>

			{/*  */}
			{/*  */}
			{/*  */}
			<Stack direction="row" spacing={1}>
				<Chip label="primary" color="primary" />
				<Chip
					label="success ship"
					color="success"
					variant="outlined"
					onClick={handleClick}
					icon={<FaceIcon />}
				/>
			</Stack>
		</div>
	);
}

export default App;
