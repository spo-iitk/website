import styled from "styled-components"

import Page from "components/Page"
import { media } from "utils/media"
import FormSection from "views/ContactPage/FormSection"
import InformationSection from "views/ContactPage/InformationSection"

import OfficeTeam from "./office-staff"
import StudentTeam from "./placement-coordinators"

export default function ContactPage() {
	return (
		<Page title="Contact" description="Feel free to reach out to us!">
			{/* <OfficeTeam notNeedTitleAtOfficeStaff /> */}
			{/* <StudentTeam notNeedTitleAtStudentTeam /> */}
			<ContactContainer>
				<InformationSection />
				<FormSection />
			</ContactContainer>
		</Page>
	)
}

const ContactContainer = styled.div`
  display: flex;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`
