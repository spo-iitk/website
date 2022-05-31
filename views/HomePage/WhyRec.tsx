import Link from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import Section from "components/Section"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function WhyRec(){
	return(
		<Section title = "" >
			<SectionTitle>Why Recruit from IIT Kanpur ?</SectionTitle>
			<br />
			<br />
			<Container>
				<CustomAutofitGrid3>
					<Link href= "/about#academics"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<Title>Academics</Title>
							<Description>Providing a rigorous and world-class academic experience with the help 
                                        of distinguished faculty, amazing peer groups and carefully designed coursework.
							</Description>
						</Card>
					</Link>
					<Link href= "/about"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<Title>Ranking</Title>
							<Description>IIT Kanpur is ranked 4th among engineering colleges in India by the National Institutional Ranking 
                                      Framework (NIRF) in 2021, and 5th overall.
							</Description>
						</Card>
					</Link>
					<Link href= "/about#alumni"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<Title>Alumni</Title>
							<Description>The alumni of IIT Kanpur have undoubtedly made their mark on the Global professional fronts. Most of them occupy leading positions in corporate, academia & the government.</Description>
						</Card>
					</Link>
					<Link href= "/about#research"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<Title>Research and Development</Title>
							<Description>Access to the latest and pioneering advances in technology with the aim of acclimating students 
                                        to the innovations in the scientific community.
							</Description>
						</Card>
					</Link>
					<Link href= "/about#all-round-development"  passHref>
						<Card style={{ cursor: "pointer" }}>
							<Title>All-Round Development</Title>
							<Description>Promoting the all-around development of students through a myriad of cultural and sports activities, 
                                        fests, competitions and exhibitions.
							</Description>
						</Card>
					</Link>
				</CustomAutofitGrid3>
			</Container>
		</Section>

	)
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const CustomAutofitGrid3 = styled(AutofitGrid)`
--autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const Title = styled.div`
  font-weight: bold;
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
    margin-top: 1.5rem;
  }
`
const Description = styled.div`
  font-size: 1.47rem;
  opacity: 0.6;
`
