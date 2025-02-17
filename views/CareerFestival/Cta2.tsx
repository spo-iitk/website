import NextLink from "next/link"
import React from "react"
import styled from "styled-components"

import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function Cta() {
	return (
		<CtaWrapper>
			<Container>
				<Stack>
					{/* <OverTitle>Lorem ipsum dolor sit amet</OverTitle> */}
					<SectionTitle id="registration">Register with us to conduct events in Career Festival</SectionTitle>
					<Description>
          Fill out the online form or share the filled doc with us at <a href="mailto:spo@iitk.ac.in">spo@iitk.ac.in</a>
					</Description>
					<ButtonGroup>
						<NextLink href="https://docs.google.com/forms/d/e/1FAIpQLScnmO0WUWhNH16_VG_oODZ6qf7XyHu3YuHilxLM-pMC3OjpKg/viewform?usp=sf_link" passHref>
							<Button>
                Online Form Link <span>&rarr;</span>
							</Button>
						</NextLink>
						<NextLink href="https://docs.google.com/document/d/1YFfLPlAzhr1o5p7ySwJ4BGDZjlpUhAGvmmYHD_GXvYI/edit?usp=sharing" passHref>
							<OutlinedButton transparent>
                Doc link <span>&rarr;</span>
							</OutlinedButton>
						</NextLink>
					</ButtonGroup>
				</Stack>
			</Container>
		</CtaWrapper>
	)
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media("<=tablet")} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`
