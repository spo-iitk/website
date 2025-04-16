import Link from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import Page from "components/Page"
import { media } from "utils/media"

const deptBrochure = [
	{
		idx: "1",
		dept: "Aerospace Engineering",
		url: "https://www.iitk.ac.in/aero/",
		link: "/assets/Brochures/2024-25_PhD Brochure_Aerospace Engg.pdf"
	},
	{
		idx: "2",
		dept: "Biological Sciences & Bioengineering",
		url: "https://www.iitk.ac.in/bsbe/",
		link: "/assets/Brochures/2024-25_PhD_brochure_BioScience & BioEngineering.pdf"
	},
	{
		idx: "3",
		dept: "Chemical Engineering",
		url: "https://www.iitk.ac.in/che/",
		link: "/assets/Brochures/2024-25_PhD Brochure_ Chemical Engg.pdf"
	},
	{
		idx: "4",
		dept: "Civil Engineering",
		url: "https://www.iitk.ac.in/ce/",
		link: "/assets/Brochures/2024-25_PhD_Brochure_Civil Engg.pdf"
	},
	{
		idx: "5",
		dept: "Economic Sciences",
		url: "https://www.iitk.ac.in/eco/",
		link: "/assets/Brochures/2024-25_Ph.D. Brochure_Economics.pdf"
	},
	{
		idx: "6",
		dept: "Electrical Engineering",
		url: "https://www.iitk.ac.in/ee/",
		link: "/assets/Brochures/2024-25_Ph.D Brochure_Electrical Engineering.pdf"
	},
	{
		idx: "7",
		dept: "Humanities & Social Sciences",
		url: "https://www.iitk.ac.in/hss/",
		link: "/assets/Brochures/2024-25_PhD_Brochure_Humanities & Social Science.pdf"
	},
	{
		idx: "8",
		dept: "Materials Science & Engineering",
		url: "https://www.iitk.ac.in/mse",
		link: "/assets/Brochures/2024-25_PhD_Brochure_Material Science Engg.pdf"
	},
	{
		idx: "9",
		dept: "Materials Science Programme",
		url: "https://www.iitk.ac.in/msp/",
		link: "/assets/Brochures/2024-25_PhD_brochure_Material Science Program.pdf"
	},
	{
		idx: "10",
		dept: "Mechanical Engineering",
		url: "https://www.iitk.ac.in/me/",
		link: "/assets/Brochures/2024-25_PhD Brochure_Mechanical Engg.pdf"
	},
	{
		idx: "11",
		dept: "Physics",
		url: "https://www.iitk.ac.in/phy/",
		link: "/assets/Brochures/2024-25_PhD Brochure_Physics.pdf"
	},
]

export default function phddepartmentalBrochure() {
	return (
		<Page title="PHD Departmental Brochures" description="Click on department to download their brochure." keywords="Brochures, Departments, Department Information, Department Research">
			<Container>
				<CustomAutofitGrid>
					{deptBrochure.map((dept) => (
						<Card key={dept.idx}>
							<Title>{dept.dept}</Title>
							{dept.url &&
								<Link href={dept.url} passHref>
									<Description>Visit Department Homepage</Description>
								</Link>}
							{dept.link &&
								<Link href={dept.link} passHref>
									<Description>Download Brochure</Description>
								</Link>}
						</Card>
					))}
				</CustomAutofitGrid>
			</Container>
		</Page>
	)
}

const CustomAutofitGrid = styled(AutofitGrid)`
padding: 1.5rem;
--autofit-grid-item-size: 30rem;
  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }
  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  opacity: 0.6;
  cursor: pointer;
`
