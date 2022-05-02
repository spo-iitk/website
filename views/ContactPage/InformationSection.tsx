import NextLink from "next/link"
import styled from "styled-components"

import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"

export default function InformationSection() {
	return (
		<Wrapper>
			<h3>Contact Info</h3>
			<p>
				<span>Email:</span> spo@iitk.ac.in
			</p>
			<p>
				<span>Desk No. :</span> 0512-259-4433/34
			</p>
			<CustomButtonGroup>
				<NextLink href="/placement-coordinators" passHref>
					<CustomButton transparent>
						Placement Coordinators
					</CustomButton>
				</NextLink>
				<NextLink href="/administration" passHref>
					<CustomButton transparent>
						Administration
					</CustomButton>
				</NextLink>
			</CustomButtonGroup>
		</Wrapper>
	)
}

const Wrapper = styled.div`
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

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  flex-direction: column;
  width: 80%;
`

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
  text-align: left;
`
