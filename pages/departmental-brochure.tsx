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
		link: "/assets/Brochures25_26/AE.pdf"
	},
	{
		idx: "2",
		dept: "Biological Sciences & Bioengineering",
		url: "https://www.iitk.ac.in/bsbe/",
		link: "/assets/Brochures25_26/BSBE.pdf"
	},
	{
		idx: "3",
		dept: "Chemical Engineering",
		url: "https://www.iitk.ac.in/che/",
		link: "/assets/Brochures25_26/CHE.pdf"
	},
	{
		idx: "4",
		dept: "Chemistry",
		url: "https://www.iitk.ac.in/chm/",
		link: "/assets/Brochures25_26/CHM.pdf"
	},
	{
		idx: "5",
		dept: "Civil Engineering",
		url: "https://www.iitk.ac.in/ce/",
		link: "/assets/Brochures25_26/CE.pdf"
	},
	{
		idx: "6",
		dept: "Cognitive Science",
		url: "https://www.cgs.iitk.ac.in/",
		link: "/assets/Brochures25_26/CGS.pdf"
	},
	{
		idx: "7",
		dept: "Computer Science & Engineering",
		url: "https://www.cse.iitk.ac.in/",
		link: "/assets/Brochures25_26/CSE.pdf"
	},
	{
		idx: "8",
		dept: "Design",
		url: "https://www.iitk.ac.in/design/",
		link: "/assets/Brochures25_26/MDeS.pdf"
	},
	{
		idx: "9",
		dept: "Earth Sciences",
		url: "https://www.iitk.ac.in/es/",
		link: "/assets/Brochures25_26/ES.pdf"
	},
	{
		idx: "10",
		dept: "Economic Sciences",
		url: "https://www.iitk.ac.in/eco/",
		link: "/assets/Brochures/ECO.pdf"
	},
	{
		idx: "11",
		dept: "Electrical Engineering",
		url: "https://www.iitk.ac.in/ee/",
		link: "/assets/Brochures25_26/EE.pdf"
	},
	{
		idx: "12",
		dept: "Humanities & Social Sciences",
		url: "https://www.iitk.ac.in/hss/",
		link: ""
	},
	{
		idx: "13",
		dept: "Industrial & Management Engineering",
		url: "https://www.iitk.ac.in/ime/",
		link: "/assets/Brochures25_26/IME.pdf"
	},
	{
		idx: "14",
		dept: "MBA Program",
		url: "https://www.iitk.ac.in/ime/mba-course-structure",
		link: "/assets/Brochures25_26/MBA.pdf"
	},
	{
		idx: "15",
		dept: "Materials Science & Engineering",
		url: "https://www.iitk.ac.in/mse",
		link: "/assets/Brochures25_26/MSE.pdf"
	},
	{
		idx: "16",
		dept: "Materials Science Programme",
		url: "https://www.iitk.ac.in/msp/",
		link: "/assets/Brochures25_26/MSP.pdf"
	},
	{
		idx: "17",
		dept: "Mechanical Engineering",
		url: "https://www.iitk.ac.in/me/",
		link: "/assets/Brochures25_26/ME.pdf"
	},
	{
		idx: "18",
		dept: "Mathematics & Scientific Computing",
		url: "https://www.iitk.ac.in/math/",
		link: "/assets/Brochures25_26/MTH.pdf"
	},
	{
		idx: "19",
		dept: "Nuclear Engineering & Technology",
		url: "https://www.iitk.ac.in/net/",
		link: "/assets/IIT_Kanpur_NET_Brochure_2015-16.pdf"
	},
	{
		idx: "20",
		dept: "Photonics Science and Engineering Programme",
		url: "https://www.iitk.ac.in/celp",
		link: "/assets/Brochures25_26/PSE.pdf"
	},
	{
		idx: "21",
		dept: "Physics",
		url: "https://www.iitk.ac.in/phy/",
		link: "/assets/Brochures/PHY.pdf"
	},
	{
		idx: "22",
		dept: "Space Science and Astronomy",
		url: "https://www.iitk.ac.in/space",
		link: "/assets/Brochures25_26/SPASE.pdf"
	},
	{
		idx: "23",
		dept: "Statistics",
		url: "https://www.iitk.ac.in/math/",
		link: "/assets/Brochures25_26/SDS.pdf"
	},
	{
		idx: "24",
		dept: "Statistics and Data Sciences",
		url: "https://www.iitk.ac.in/math/bs-sds",
		link: "/assets/Brochures25_26/SDS.pdf"
	},
	{
		idx: "25",
		dept: "Sustainable Energy Engineering",
		url: "https://www.iitk.ac.in/see/",
		link: "/assets/Brochures25_26/SEE.pdf"
	},
]

export default function departmentalBrochure() {
	return (
		<Page title="Departmental Brochures" description="Click on department to download their brochure." keywords="Brochures, Departments, Department Information, Department Research">
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
