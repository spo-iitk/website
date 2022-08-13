/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import styled from "styled-components"

import Button from "components/Button"
import Container from "components/Container"
import { EnvVars } from "env"

export default function MaintenancePage() {
	return (
		<>
			<Head>
				<title>Under Maintenance | {EnvVars.SITE_NAME}</title>
			</Head>
			<Wrapper>
				<Container>
					<Image src="/maintenance.png" alt="Maintenance" width={400} />
					<Title>Under Maintenance</Title>
					<Description>We apologize for the inconvenience, but we&apos;re performing some maintenance.</Description>
					<Description>You can still contact us at <Link href="mailto:spo@iitk.ac.in">spo@iitk.ac.in</Link>. We&apos;ll be back up soon!</Description>
					<br />
					<a target="_blank" rel="noopener noreferrer" href="https://placement.iitk.ac.in/">
						<Button>
							Recruitment Portal <span>&rarr;</span>
						</Button>
					</a>
					{" "}
					<a target="_blank" rel="noopener noreferrer" href="https://spo.iitk.ac.in/old">
						<Button transparent>
							Old Website <span>&rarr;</span>
						</Button>
					</a>
				</Container>
			</Wrapper>
		</>

	)
}

const Wrapper = styled.div`
  background: rgb(var(--background));
  margin: 0 0 5rem 0;
  text-align: center;
  align-items: center;

`

const Title = styled.h1`
  font-size: 5rem;
`

const Description = styled.div`
  font-size: 2rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;

  & > :first-child{
	  margin-top: 2.5rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  margin-left: 0.5rem;
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
