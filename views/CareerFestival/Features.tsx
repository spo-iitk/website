import React from "react"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import BasicCard from "components/BasicCard"
import Container from "components/Container"
import { media } from "utils/media"

const FEATURES = [
	{
		imageUrl: "/grid-icons/asset-1.svg",
		title: "Brand Awareness",
		description:
			"Companies can showcase their brand and increase visibility among potential candidates through their participation in the career fest.",
	},
	{
		imageUrl: "/grid-icons/asset-2.svg",
		title: "Access to Talent",
		description:
			"The career fest provides an opportunity for companies to connect with talented students from one of the top institutes of engineering and technology education, which can result in finding the right candidate for job or internship opportunities.",
	},
	{
		imageUrl: "/grid-icons/asset-3.svg",
		title: "Networking",
		description:
			"The career fest provides opportunities for companies to network with other participating companies and industry professionals, which can lead to new relationships and collaborations.",
	},
	{
		imageUrl: "/grid-icons/asset-4.svg",
		title: "Market Intelligence",
		description:
			"Companies can gain insights into the industry and the current job market through their participation in the career fest.",
	},
	{
		imageUrl: "/grid-icons/asset-5.svg",
		title: "Cost-Effective Recruitment.",
		description:
			"Participating in a career fest can be more cost-effective than traditional recruitment methods, as companies can meet with multiple potential candidates in one location.",
	},
	{
		imageUrl: "/grid-icons/asset-6.svg",
		title: "Building Relationships",
		description:
			"The career fest provides a platform for companies to build relationships with potential candidates and institutes, which can result in future collaborations and partnerships.",
	},
	{
		imageUrl: "/grid-icons/asset-7.svg",
		title: "Reputation Building",
		description:
			"Companies can enhance their reputation as attractive employers by participating in a career fest and showcasing their brand and culture to potential candidates.",
	},
]

export default function Features() {
	return (
		<Container>
			<CustomAutofitGrid>
				{FEATURES.map((singleFeature, idx) => (
					<BasicCard key={singleFeature.title} {...singleFeature} />
				))}
			</CustomAutofitGrid>
		</Container>
	)
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
