/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from "next/link"
import { EmailIcon, FacebookIcon, LinkedinIcon } from "react-share"
import styled from "styled-components"

import Container from "components/Container"
import { media } from "utils/media"

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
	{
		title: "IITK Links",
		items: [
			{ title: "IITK Homepage", href: "https://iitk.ac.in/" },
			{ title: "DoAA", href: "https://iitk.ac.in/doaa/" },
			{ title: "DoSA", href: "https://iitk.ac.in/dosa" },
			{ title: "Students' Gymkhana", href: "https://students.iitk.ac.in/" },
		],
	},
	{
		title: "For Companies",
		items: [
			{ title: "Steps -  Company registration", href: "/companies#steps" },
			{ title: "Recruitment Procedure and Policy", href: "/companies#policy" },
			{ title: "Brochures", href: "/assets/IITK_Recruitment_Brochure_2021-22.pdf" },
			{ title: "Departmental Brochures", href: "/departmental-brochure" },
			{ title: "FAQs", href: "/companies#faqs" },
		],
	},
	{
		title: "For Students",
		items: [
			{ title: "Steps - Students Registration", href: "/" },
			{ title: "Policy", href: "/" },
			{ title: "Preparation Portal", href: "/" },
			{ title: "Insights", href: "/blog" },
			{ title: "FAQs", href: "/students#faqs" },
		],
	},
]

export default function Footer() {
	return (
		<FooterWrapper>
			<Container>
				<ListContainer>
					{footerItems.map((singleItem) => (
						<FooterList key={singleItem.title} {...singleItem} />
					))}
					<div>
						<ListHeader>Contact</ListHeader>
						<ListItemWrapper>
							<span style={{ color: "rgba(var(--textSecondary), 0.75)" }} >
                Students&apos; Placement office <br />
                109, outreach building <br />
                IIT Kanpur, Kanpur-208016 <br />
                Phone no.: +91 512 259 44 33/34 <br />
                Email:
								<NextLink href="mailto:spo@iitk.ac.in" passHref>
									<a>spo@iitk.ac.in</a>
								</NextLink>
								<br />
								<br />
							</span>
							<ListItemWrapper>
								<NextLink href="/placement-coordinators" passHref>
									<a>Contact Placement Coordinators</a>
								</NextLink>
							</ListItemWrapper>
						</ListItemWrapper>
					</div>
				</ListContainer>
				<BottomBar>
					<ShareBar>
						{/* <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink> */}

						<NextLink href="mailto:spo@iitk.ac.in" passHref>
							<a>
								<EmailIcon size={50} round={true} />
							</a>
						</NextLink>

						<NextLink href="https://www.facebook.com/spo.iitkanpur" passHref>
							<a>
								<FacebookIcon size={50} round={true} />
							</a>
						</NextLink>

						<NextLink href="https://www.linkedin.com/in/iitkanpurplacement" passHref>
							<a>
								<LinkedinIcon size={50} round={true} />
							</a>
						</NextLink>
					</ShareBar>
					<Copyright>&copy; Copyright 2022 SPO, IIT Kanpur</Copyright>
				</BottomBar>
			</Container>
		</FooterWrapper>
	)
}

function FooterList({ title, items }: SingleFooterList) {
	return (
		<ListWrapper>
			<ListHeader>{title}</ListHeader>
			{items.map((singleItem) => (
				<ListItem key={singleItem.href} {...singleItem} />
			))}
		</ListWrapper>
	)
}

function ListItem({ title, href }: SingleFooterListItem) {
	return (
		<ListItemWrapper>
			<NextLink href={href} passHref>
				<a>{title}</a>
			</NextLink>
		</ListItemWrapper>
	)
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media("<=tablet")} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media("<=phone")} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`
