import styled from "styled-components"

import Page from "components/Page"
const deptBrochure = [
	{
		idx: "1",
		dept: "Aerospace Engineering",
		link: "/assets/Brochure_AE.pdf"
	},
	{
		idx: "2",
		dept: "Biological Science & Engineering",
		link: "/assets/Brochure_BSBE.pdf"
	},
	{
		idx: "3",
		dept: "Chemical Engineering",
		link: "/assets/Brochure_CHE.pdf"
	},
	{
		idx: "4",
		dept: "Chemistry",
		link: "/assets/Brochure_CHM.pdf"
	},
	{
		idx: "5",
		dept: "Civil Engineering",
		link: "/assets/Brochure_CE.pdf"
	},
	{
		idx: "6",
		dept: "Cognitive Science",
		link: "/assets/Brochure_CGS.pdf"
	},
	{
		idx: "7",
		dept: "Computer Sci. & Engineering",
		link: "/assets/Brochure_CSE.pdf"
	},
	{
		idx: "8",
		dept: "Design Programme",
		link: "/assets/Brochure_Design.pdf"
	},
	{
		idx: "9",
		dept: "Earth Sciences",
		link: "/assets/Brochure_ES.pdf"
	},
	{
		idx: "10",
		dept: "Economics",
		link: "/assets/Brochure_ECO.pdf"
	},
	{
		idx: "11",
		dept: "Electrical Engineering",
		link: "/assets/Brochure_EE.pdf"
	},
	{
		idx: "12",
		dept: "Industrial Management Engineering",
		link: "/assets/Brochure_IME.pdf"
	},
	{
		idx: "13",
		dept: "MBA Program",
		link: "/assets/Brochure_MBA.pdf"
	},
	{
		idx: "14",
		dept: "Material Sciences & Engineering",
		link: "/assets/Brochure_MSE.pdf"
	},
	{
		idx: "15",
		dept: "Materials Science Programme",
		link: "/assets/Brochure_MATERIAL_SCIENCE.pdf"
	},
	{
		idx: "16",
		dept: "Mechanical Engineering",
		link: "/assets/Brochure_ME.pdf"
	},
	{
		idx: "17",
		dept: "Mathematics & Scientific Computing",
		link: "/assets/Brochure_MTH.pdf"
	},
	{
		idx: "18",
		dept: "Nuclear Eng. & Technology",
		link: "/assets/IIT_Kanpur_NET_Brochure_2015-16.pdf"
	},
	{
		idx: "19",
		dept: "Photonics Science & Engineering Programme",
		link: "/assets/Brochure_PSE.pdf"
	},
	{
		idx: "20",
		dept: "Statistics",
		link: "/assets/Brochure_STATS.pdf"
	},
]
export default function departmentalBrochure() {
	return (
		
		<Page title="Departmental Brochures" description="Click on department to download their brochure.">
			<ul>
				{deptBrochure.map(brochure => {
					return (
						<CustomLi key={brochure.idx}>
							<a href={brochure.link} style={{ textDecoration: "none" }}>{brochure.dept}</a>
						</CustomLi>
					)
				})}
			</ul>
		</Page>
	)
}

const CustomLi = styled.li`
	list-style-type: "➡ ";
	font-size: 20px;
`
