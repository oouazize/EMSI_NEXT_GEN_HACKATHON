import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Module({ Little, Desc, level, id }) {
	const isCenterElement = id === 1 || (10 - id) % 3 === 0;
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate("/ModuleView");
	};

	const primaryColor = "#FFD910";
	const diamondColor = "#2E2E2E";
	const secondaryColor = "#F5F5F5";

	return (
		<div
			className={`Module`}
			onClick={handleRedirect}
			style={{ backgroundColor: isCenterElement ? primaryColor : diamondColor }}
		>
			<span style={{ color: isCenterElement ? diamondColor : primaryColor }}>
				{Little}
			</span>

			<p style={{ color: isCenterElement ? "#13157D" : "#DFDFDF" }}>{Desc}</p>

			<div className="item level" style={{ backgroundColor: secondaryColor }}>
				<div
					className="level-bar-fill"
					style={{
						backgroundColor: isCenterElement ? diamondColor : primaryColor,
						color: isCenterElement ? secondaryColor : diamondColor,
						width: `${level}%`,
					}}
				></div>
				<p style={{ color: isCenterElement ? secondaryColor : diamondColor }}>
					{level}%
				</p>
			</div>
		</div>
	);
}
