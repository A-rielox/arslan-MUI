import React from "react";

import { pink } from "@mui/material/colors";

import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import ChildCareIcon from "@mui/icons-material/ChildCare";
/* 
6.36
*/
const Chips = () => {
	const [chipData, setChipData] = React.useState([
		{ key: 0, label: "Angular", color: "red", icon: <FaceIcon /> },
		{ key: 1, label: "jQuery", color: "blue", icon: <AttachMoneyIcon /> },
		{ key: 2, label: "Polymer", color: "green", icon: <AutoFixHighIcon /> },
		{
			key: 3,
			label: "React",
			color: "black",
			icon: <BabyChangingStationIcon sx={{ color: pink[500] }} />,
		},
		{
			key: 4,
			label: "Vue.js",
			color: "success",
			icon: <ChildCareIcon />,
		},
	]);

	const onDelete = (data) => {
		setChipData((chips) => chips.filter((chip) => chip.key !== data.key));
	};

	const onClick = () => {
		console.info("You clicked the Chip.");
	};

	return (
		<Paper
			elevation={3}
			sx={{
				display: "inline-block",
				px: 4,
				py: 2,
			}}
		>
			{chipData.map((data) => {
				return (
					<listItem key={data.key}>
						<Chip
							sx={{ mx: 1 }}
							label={data.label}
							onDelete={() => onDelete(data)}
							icon={data.icon}
							style={{ backgroundColor: data.color }}
						/>
					</listItem>
				);
			})}
		</Paper>
	);
};

export default Chips;
