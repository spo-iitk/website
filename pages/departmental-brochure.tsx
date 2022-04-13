import Section from 'components/Section';
import styled from 'styled-components';
const deptBrochure = [
	{
		idx: "1",
		dept: "Aerospace Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_AE.pdf"
	},
	{
		idx: "2",
		dept: "Biological Science & Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_BSBE.pdf"
	},
	{
		idx: "3",
		dept: "Chemical Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_CHE.pdf"
	},
	{
		idx: "4",
		dept: "Chemistry",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_CHM.pdf"
	},
	{
		idx: "5",
		dept: "Civil Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_CE.pdf"
	},
	{
		idx: "6",
		dept: "Cognitive Science",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_CGS.pdf"
	},
	{
		idx: "7",
		dept: "Computer Sci. & Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_CSE.pdf"
	},
	{
		idx: "8",
		dept: "Design Programme",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_Design.pdf"
	},
	{
		idx: "9",
		dept: "Earth Sciences",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_ES.pdf"
	},
	{
		idx: "10",
		dept: "Economics",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_ECO.pdf"
	},
	{
		idx: "11",
		dept: "Electrical Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_EE.pdf"
	},
	{
		idx: "12",
		dept: "Industrial Management Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_IME.pdf"
	},
	{
		idx: "13",
		dept: "MBA Program",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_MBA.pdf"
	},
	{
		idx: "14",
		dept: "Material Sciences & Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_MSE.pdf"
	},
	{
		idx: "15",
		dept: "Materials Science Programme",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_MATERIAL_SCIENCE.pdf"
	},
	{
		idx: "16",
		dept: "Mechanical Engineering",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_ME.pdf"
	},
	{
		idx: "17",
		dept: "Mathematics & Scientific Computing",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_MTH.pdf"
	},
	{
		idx: "18",
		dept: "Nuclear Eng. & Technology",
		link: "https://spo.iitk.ac.in/assets/docs/IIT_Kanpur_NET_Brochure_2015-16.pdf"
	},
	{
		idx: "19",
		dept: "Photonics Science & Engineering Programme",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_PSE.pdf"
	},
	{
		idx: "20",
		dept: "Statistics",
		link: "https://spo.iitk.ac.in/assets/docs/2021-22/Brochure_STATS.pdf"
	},
]
export default function departmentalBrochure() {
	return (
		
		<Section title="Departmental Brochures">
			<p>Click on department to download their brochure.</p>
			<ul>
				{deptBrochure.map(brochure => {
					return (
					<CustomLi key={brochure.idx}>
						<a href={brochure.link} style={{ textDecoration: "none" }}>{brochure.dept}</a>
					</CustomLi>
					)
				})}
			</ul>
		</Section>
	);
}

const CustomLi = styled.li`
	list-style-type: "➡ "; 
`;