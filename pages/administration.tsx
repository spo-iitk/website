import NextImage from "next/image"
import Link from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const TeamMembers = [
	{
		name: "Kumar Srikanta Nayak",
		position: "Career Development Officer",
		image: "/testimonials/srikanta_2022.jpg",
		email: "ksnayak@iitk.ac.in",
	},
	{
		name: "Garima Singh",
		position: "Junior Superintendent",
		image: "/testimonials/garima_2022.jpg",
		email: "garimasg@iitk.ac.in",
	},
	{
		name: "Praveen Kumar",
		position: "Junior Assistant",
		image: "/testimonials/praveen_2022.jpg",
		email: "pravkmr@iitk.ac.in",
	},
	{
		name: "Amarendra Mohanty",
		position: "Deputy Project Manager",
		image: "/testimonials/amarendra_2022.jpg",
		email: "amaren@iitk.ac.in",
	},
]

export default function OfficeTeam() {
	return (
		<Page title="Administration" description="">
			<DarkerBackgroundContainer>
				<SectionTitle>SPO Chairman</SectionTitle>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Card>
						<NextImage src="/testimonials/chairman.jpeg" width={128} height={128} alt="Chairman SPO" />
						<Title>Prof. Kaustubh Kulkarni</Title>
						<Description>Chairman, Students&apos; Placement Office </Description>
						<Description><Link href="/chairman-message`" passHref>Chairman&apos; Message</Link></Description>
					</Card>
				</div>
				<SectionTitle>SPO Vice Chairman</SectionTitle>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Card>
						<NextImage src="/testimonials/vc.jpg" width={128} height={128} alt="Vice Chairman SPO" />
						<Title>Prof. Raju Gupta</Title>
						<Description>Vice Chairman, Students&apos; Placement Office </Description>
						<Description><Link href="/vice-chairman-message`" passHref>Vice Chairman&apos; Message</Link></Description>
					</Card>
				</div>
				<SectionTitle>Staff Members</SectionTitle>
				<Container>
					<CustomAutofitGrid>
						{TeamMembers.map((member) => (
							<div key={member.name}>
								<Card>
									{member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
									<Title>{member.name}</Title>
									<Description>{member.position}</Description>
									<Description><Link href={`mailto:${member.email}`} passHref>{member.email}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid>
					<Wrapper>
						<h3>Office Contact Details</h3>
						<p><span>Email:</span> <a href="mailto:spooffice@iitk.ac.in">spooffice@iitk.ac.in</a></p>
						<p><span>Desk No. :</span> 0512-259-4433/34</p>
					</Wrapper>
				</Container>
				<br />
			</DarkerBackgroundContainer>
		</Page>
	)
}
const Wrapper = styled.div`
  padding: 2.5rem;
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;
  h3 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
  }
  p {
	font-weight: normal;
	font-size: 1.6rem;
	color: rgba(var(--text), 0.7);
  }
  span {
	opacity: 1;
	color: rgba(var(--text), 1);
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
  max-width: 35rem;
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
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 20rem;
  ${media("<=tablet")} {
	--autofit-grid-item-size: 25rem;
  }
  ${media("<=phone")} {
	--autofit-grid-item-size: 100%;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  & > *:not(:first-child) {
	margin-top: 10rem;
  }
`
