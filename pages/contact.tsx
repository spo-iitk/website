import styled from "styled-components"

import Button from "components/Button"
import Page from "components/Page"
import { media } from "utils/media"
import FormSection from "views/ContactPage/FormSection"
import InformationSection from "views/ContactPage/InformationSection"

import OfficeTeam from "./office-staff"
import StudentTeam from "./placement-coordinators"

export default function ContactPage() {
	return (
		<Page title="Contact" description="Feel free to reach out to us!">
			<Container>
				{/* <OfficeTeam notNeedTitleAtOfficeStaff /> */}
				{/* <StudentTeam notNeedTitleAtStudentTeam /> */}
				<Button href="/placement-coordinators">Contact Placement Cordinators</Button>
				<Button href="/placement-coordinators">Get directions</Button>
			</Container>
			<ContactContainer>
				<InformationSection />
				<FormSection />
			</ContactContainer>
		</Page>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-bottom: 5rem;
	width: 100%;

	${media("<=tablet")} {
    	flex-direction: column;
  	}
`

const ContactContainer = styled.div`
  display: flex;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`
