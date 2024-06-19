import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import BasicCard from "components/BasicCard"
import Container from "components/Container"
import Page from "components/Page"
import Section from "components/Section"
import { media } from "utils/media"

import data from "./data.json"

interface Proforma {
	name: string;
	link: string;
}

const BASE_URL = "https://drive.google.com/file/d/"

const PastInternProformas = () => {
	const Proformas: Array<Proforma> = []
	for (const key in data) {
		Proformas.push({
			name: data[key].name,
			link: `${BASE_URL}${data[key].link}/view`
		})
	}
	return (
		<Page title="Previous Year Intern Proformas">
			<div id="steps">
				<Section title="2023-2024">
					<Container>
						<CustomAutofitGrid>
							{
								Proformas.map((proforma, index) => (
									<BasicCard key={proforma.name} title={proforma.name} linkUrl={proforma.link} description="" />
								))
							}
						</CustomAutofitGrid>
					</Container>
				</Section>
			</div>
		</Page>
	)
}

export default PastInternProformas

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
	--autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
	--autofit-grid-item-size: 100%;
  }
`
