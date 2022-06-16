import Head from "next/head"
import { PropsWithChildren } from "react"
import styled from "styled-components"

import { EnvVars } from "env"
import { media } from "utils/media"

import AutofitGrid from "./AutofitGrid"
import Button from "./Button"
import Container from "./Container"
import SectionTitle from "./SectionTitle"

export interface PageProps {
	title: string;
	description?: string;
	keywords?:string;
	notNeedTitle?: boolean;
	routes?: RouteType[];
}

interface RouteType {
	name: string;
	url: string;
}

export default function Page({ title, description, keywords,routes, children, notNeedTitle }: PropsWithChildren<PageProps>) {
	return (
		<>
			{!notNeedTitle &&
				<Head>
					<title>
						{title} | {EnvVars.SITE_NAME}
					</title>
					<meta name="description" content={description} />
					<meta
						name="keywords"
						content={keywords +" ,Placement, IIT Placement, Engineering placement, Internship, Technical Placement"}
					/>
				</Head>
			}
			<Wrapper>
				{!notNeedTitle &&
					<HeaderContainer>
						<Container>
							<Title>{title}</Title>
							{description && <Description>{description}</Description>}
							<NavContainer>
								<CustomAutofitGrid>
									{routes?.map((nav) => {
										return (
											<CustomButton key={nav.url} href={nav.url}>{nav.name}</CustomButton>
										)
									})}
								</CustomAutofitGrid>
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
	margin-top: 5rem;
	align-items: center;
	justify-content: center;

	${media("<=tablet")} {
		display:none;
	}
	
`
const CustomButton = styled(Button)`
	color: rgb(var(--primary));
	background-color: rgb(var(--secondary));
	font-size:1.45rem;
`

const CustomAutofitGrid = styled(AutofitGrid)`
	--autofit-grid-item-size: 17rem;
`
