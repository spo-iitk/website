import styled from "styled-components"

import Page from "components/Page"
import { media } from "utils/media"
import FormSection from "views/ContactPage/FormSection"
import InformationSection from "views/ContactPage/InformationSection"

const Routes = [
	{
		name: "Contact Placement Coordinators",
		url: "/placement-coordinators"
	}, {
		name: "Contact Administration",
		url: "/administration"
	}
]

export default function ContactPage() {
	return (
		<Page title="Contact" description="Feel free to reach out to us!" routes={Routes} keywords="SPO Team, Placement Coordinators, Management SPO IITK, Administration SPO IITK, Administration Contact, Helpline IITK SPO, Contact SPO IITK, Toll-free IITK SPO">
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
