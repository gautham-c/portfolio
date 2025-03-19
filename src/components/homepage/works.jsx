import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./fsu.png"
								alt="Florida State University"
								className="work-image"
							/>
							<div className="work-title">Florida State University (Dr. Xian F. Mallory’s Lab)</div>
							<div className="work-subtitle">
								Researcher (October 2024 – Present)
							</div>
						</div>

						<div className="work">
							<img
								src="./zoho.png"
								alt="Zoho Corporation"
								className="work-image"
							/>
							<div className="work-title">Zoho Corporation</div>
							<div className="work-subtitle">
								Project Trainee (May 2022 – May 2023)
							</div>
						</div>

						<div className="work">
							<img
								src="./mt.jpeg"
								alt="MT Digital Labs"
								className="work-image"
							/>
							<div className="work-title">MT Digital Labs</div>
							<div className="work-subtitle">
								Software Engineer Intern (June 2021 – November 2021)
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
