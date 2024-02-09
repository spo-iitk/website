/* eslint-disable react/no-unescaped-entities */
import NextImage from "next/image"
import Link from "next/link"
import styled from "styled-components"

import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import { media } from "utils/media"

export default function Hero() {
	return (
		<HeroWrapper>
			<Contents>
				<CustomOverTitle>IIT Kanpur</CustomOverTitle>
				<Heading>Students' Placement Office</Heading>
				<Description>
        The Students' Placement Office (SPO), IIT Kanpur is maintained and managed by a dedicated team of office staff and students 
        who are responsible for all areas of IIT Kanpur placements. The SPO team assists recruiters to the best of its ability. We are 
        grateful for the trust placed in us by various organisations, and we hope to continue working with them in the future.
				</Description>
				<CustomButtonGroup>
					<Link href="/placement-coordinators" passHref>
						<Button>
              Contact <span>&rarr;</span>
						</Button>
					</Link>
					<a target="_blank" rel="noopener noreferrer" href="https://placement.iitk.ac.in/">
						<Button transparent>
              Recruitment Portal <span>&rarr;</span>
						</Button>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://phdplacement.iitk.ac.in/">
						<Button transparent>
              Phd Portal <span>&rarr;</span>
						</Button>
					</a>
				</CustomButtonGroup>
			</Contents>
			<ImageContainer>
				<NextImage id = "building" src= "/testimonials/iitkanpur.png"  layout = "fill" objectFit="contain" />
			</ImageContainer>
		</HeroWrapper>
	)
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media("<=desktop")} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media("<=desktop")} {
    max-width: 100%;
  }
`

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`

const ImageContainer = styled.div`
flex: 1;
max-width: 40%;
position: relative;
left : 5rem;
&:before {
  display: block;
  content: '';
  width: 100%;
  padding-top : calc((9 / 16) * 100%);
}

  ${media("<=desktop")} {
    margin-top: 2rem;
    justify-content: center; 
    align-items: center;
    max-width: 100%;
    left: 0;
    width: 100vw;
  }
`

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  text-align: justify;
  ${media("<=desktop")} {
    font-size: 1.5rem;
  }
`

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`

const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`
