import Head from "next/head"
import { PropsWithChildren } from "react"
import styled from "styled-components"

import { EnvVars } from "env"
import { media } from "utils/media"

import Container from "./Container"
import SectionTitle from "./SectionTitle"

import Button from "./Button"
import Link from "./Link"




export interface PageProps {
	title: string;
	description?: string;
	notNeedTitle?: boolean;
	nav1:string;
	nav2:string;
	nav3:string;
	nav1href:string;
	nav2href:string;
	nav3href:string;
}

export default function Page({ title, description,nav1, nav2, nav3,nav1href,nav2href,nav3href, children, notNeedTitle }: PropsWithChildren<PageProps>) {
	return (
		<>
			{!notNeedTitle &&
				<Head>
					<title>
						{title} | {EnvVars.SITE_NAME}
					</title>
					<meta name="description" content={description} />
				</Head>
			}
			<Wrapper>
				{!notNeedTitle &&
					<HeaderContainer>
						<Container>
							<Title>{title}</Title>
							{description && <Description>{description}</Description>}
							<NavContainer>
								<Utton><Link href={nav1href}>{nav1}</Link></Utton>
								<Utton><Link href={nav2href}>{nav2}</Link></Utton>
								<Utton><Link href={nav3href}>{nav3}</Link></Utton>
							</NavContainer>
						</Container>
					</HeaderContainer>
				}
				<Container>
					<ChildrenWrapper>{children}</ChildrenWrapper>
				</Container>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	background: rgb(var(--background));
`

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(var(--secondary));
	min-height: 40rem;
`

const Title = styled(SectionTitle)`
	color: rgb(var(--textSecondary));
	margin-bottom: 2rem;
`

const Description = styled.div`
	font-size: 1.8rem;
	color: rgba(var(--textSecondary), 0.8);
	text-align: center;
	max-width: 60%;
	margin: auto;

	${media("<=tablet")} {
		max-width: 100%;
	}
`

const ChildrenWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 10rem;
`

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	${media("<=tablet")}{
		display:none;
	}	
`

const Utton = styled(Button)`
	margin-right: 5rem;
	margin-top: 5rem;
	color: rgb(var(--textSecondary));
	background-color: rgb(var(--secondary));
	font-size:1.8rem;
`