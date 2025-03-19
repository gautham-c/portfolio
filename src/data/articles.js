import React from "react";

function article_1() {
	return {
		date: "May 2023",
		title: "Survey on Dehazing of Multispectral Images",
		description:
			"An in-depth study on dehazing techniques for multispectral images, focusing on contrastive learning and image clarity improvement.",
		keywords: ["Dehazing", "Multispectral Images", "Contrastive Learning", "Springer"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.article-image {
					align-self: center;
					border-radius: 10px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						This research explores advanced dehazing techniques for multispectral images, leveraging contrastive learning
						to enhance visibility and image clarity.
					</div>
					<a href="https://link.springer.com/chapter/10.1007/978-981-99-6906-7_35" target="_blank" rel="noopener noreferrer">
						Read the full article on Springer
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "January 2024",
		title: "Dehazing of Multispectral Images Using Contrastive Learning in CycleGAN",
		description:
			"Exploring the application of CycleGAN with contrastive learning to enhance visibility in multispectral imaging.",
		keywords: ["CycleGAN", "Contrastive Learning", "Multispectral Imaging", "Springer"],
		style: ``,
		body: (
			<React.Fragment>
				<h1>Overview</h1>
				<p>
					This research presents a novel approach integrating CycleGAN and contrastive learning to refine multispectral image clarity, improving visibility under adverse conditions.
				</p>
				<a href="https://link.springer.com/chapter/10.1007/978-981-99-6906-7_35" target="_blank" rel="noopener noreferrer">
					Read the full article on Springer
				</a>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
