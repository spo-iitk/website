/* eslint-disable react/no-unescaped-entities */

import NextLink from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const Routes = [
	{
		name: "Policy for Companies",
		url: "/docs/2021-22/Career Fair Policy for Companies - 2022 - 23.pdf",
	},
	{
		name: "Policy for Students",
		url: "/docs/2021-22/Career Fair Policy for Students - 2022 - 23.pdf",
	},
]

export default function AboutPage() {
	return (
		<>
			<Page
				title="Career Festival"
				description="The Institute of Technology (IIT) Kanpur is a premier technical institute in India known for its excellent academic programs and talented student body. Students' Placement Office, IIT Kanpur, proposes the first Career Fest to provide students with a unique opportunity to connect with potential employers and explore their career options."
				routes={Routes}
			>
				<SectionTitle id="academics">Objectives</SectionTitle>
				<br />
				<br />
				<CustomAutofitGrid>
					<Card>
						<Title>To provide students with a platform to connect with potential employers and explore job opportunities.</Title>
					</Card>
					<Card>
						<Title>To showcase the talent and skills of the student body to companies and organisations.</Title>
					</Card>
					<Card>
						<Title>To provide companies with an opportunity to connect with IIT Kanpur students and build their brands.</Title>
					</Card>
					<Card>
						<Title>To promote the IIT Kanpur brand and increase visibility among potential employers.</Title>
					</Card>
				</CustomAutofitGrid>
				<br />
				{/*  */}
				<br />
				<SectionTitle id="about">Mission</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
            The mission of the Career Festival at IIT Kanpur is to provide a platform for students to connect with leading companies and
            organisations and to explore career opportunities in various industries.
					</SectionText>
				</TextWrapper>
				<br />
				{/*  */}
				<br />
				<SectionTitle id="about">Vision</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
            The vision of the Career Festival is to foster a dynamic and engaging environment where students can network with professionals,
            gain insights into different industries, and find meaningful and fulfilling career paths. The festival aims to be a hub of
            innovation, creativity, and collaboration, where students, companies, and academia come together to create opportunities for
            growth and development.
					</SectionText>
				</TextWrapper>
				<br />
				{/*  */}
				<br />
				<SectionTitle id="research">Target Participants</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
            The target participants for the Career Fest of IIT Kanpur are:
						<ul>
							<li>Students of IIT Kanpur</li>
							<li>Companies and organisations interested in recruiting IIT Kanpur students</li>
							<li>Industry professionals and experts</li>
						</ul>
					</SectionText>
				</TextWrapper>
				{/* <br />
				
				<br />
				<SectionTitle id="alumni">Schedule</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
                    The first Career Fest of IIT Kanpur will be held from the 8th to the 9th of April. The tentative schedule for the two-day event is as follows:
						<ul style={{listStyleType:"none"}}>
							<li><strong>Day 1:</strong></li>
							<ul>
								<li>9:00AM  : Set up for participating companies.</li>
								<li>10:00AM : Opening ceremony and welcome address.</li>
								<li>10:30AM : Career fest begins, and companies meet with students.</li>
								<li>8:00PM  : Closing of Day 1.</li>
							</ul>
							<br />
							<li><strong>Day 2:</strong></li>
							<ul>
								<li>9:00AM  : Career fest continues.</li>
								<li>4:00PM  : Closing ceremony and award presentation.</li>
								<li>6:00PM  : Tear-down and departure for participating companies.</li>
							</ul>
						</ul>
					</SectionText>
				</TextWrapper> */}
				<br />

				<br />
				<SectionTitle id="faculty">Event Details</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
            The career fest of IIT Kanpur can include a variety of events and activities, including:
						<ul>
							<li>
								<b>Panel Discussions: </b>Panel discussions can be a valuable component of the career fest of IIT Kanpur, offering
                opportunities for companies and industry professionals to share their insights and knowledge with students. Panel
                discussions can be organised around the following topics:
							</li>
							<ul>
								<li>
									<b>Industry Trends: </b>Panelists can discuss the latest trends and innovations in the industry and share their
                  perspectives on the future of the field.
								</li>
								<li>
									<b>Career Paths: </b>Panelists can discuss their career paths and advise and guide students on pursuing their career
                  goals.
								</li>
								<li>
									<b>Skills and Knowledge: </b>Panelists can discuss the skills and knowledge most in demand in the industry and offer tips
                  and advice on developing and showcasing these skills.
								</li>
								<li>
									<b>Company Culture: </b>Panelists can discuss the company culture and work environment and offer insights into what makes
                  their company a great place to work.
								</li>
								<li>
									<b>Hiring and Recruitment: </b>Panelists can discuss the hiring and recruitment process and offer advice and guidance on
                  how to stand out as a candidate.
								</li>
							</ul>
							<br />
							<li>
								<b>Workshops and Seminars: </b>Workshops and seminars can be an integral part of the career fest of IIT Kanpur, providing
                opportunities for companies and industry professionals to share their knowledge and skills with students. Some of the
                workshops and seminars that can be organised during the career fest include:
							</li>
							<ul>
								<li>
									<b>Resume Writing: </b>Companies can conduct workshops on how to write effective resumes and cover letters and offer
                  advice on how to stand out as a candidate.
								</li>
								<li>
									<b>Interview Skills: </b>Companies can conduct seminars on preparing for job interviews and offer tips on making a
                  positive impression during the interview.
								</li>
								<li>
									<b>Networking Skills: </b>Companies can conduct workshops on how to network effectively and offer advice on how to make
                  meaningful connections with potential employers and industry professionals.
								</li>
								<li>
									<b>Career Development: </b>Companies can conduct seminars on developing and advancing their career and offer advice on
                  pursuing their goals and aspirations.
								</li>
								<li>
									<b>Industry Trends: </b>Companies can conduct workshops on the latest trends and innovations in the industry and offer
                  insights into what the future holds.
								</li>
							</ul>
							<br />
							<li>
								<b>Virtual Industry Tours/Tech Demonstrations: </b>In today's digital age, virtual industry tours and tech demonstrations
                can be an effective way for companies to participate in the career fest of IIT Kanpur. Companies can showcase their products
                and technology through hands-on demonstrations. Some of the virtual events that can be organised include:
							</li>
							<ul>
								<li>
									<b>Virtual Industry Tours: </b>Companies can conduct virtual tours of their facilities, showcasing their products and
                  services and providing insight into their operations and culture.
								</li>
								<li>
									<b>Virtual Tech Demonstrations: </b>Companies can conduct virtual demonstrations of their products and technology,
                  showcasing their capabilities and offering hands-on experience to students.
								</li>
							</ul>
							<br />
							<li>
								<b>Hackathons and Competitions: </b>In addition to the events and activities listed above, hackathons and competitions can
                be included in the career fest of IIT Kanpur as well, including:
							</li>
							<ul>
								<li>
									<b>Hackathons: </b>Companies can sponsor or participate in hackathons, where students can work together to solve
                  real-world problems and showcase their coding and problem-solving skills.
								</li>
								<li>
									<b>Innovation Competitions: </b>Companies can participate in innovation competitions, where students can showcase their
                  creative and entrepreneurial ideas.
								</li>
								<li>
									<b>Technical Competitions: </b>Companies can participate in technical competitions, where students can showcase their
                  technical skills and knowledge in areas such as programming, design, and data analysis.
								</li>
								<li>
									<b>Product Demos: </b>Companies can participate in product demos, where students can showcase their prototypes and
                  innovative products.
								</li>
								<li>
									<b>Case Competitions: </b>Companies can participate in case competitions, where students can work together to analyse and
                  solve business problems.
								</li>
								<li>
									<b>Gaming Competitions: </b>Companies can participate in gaming competitions, where students can showcase their gaming
                  skills and compete against each other.
								</li>
							</ul>
							<br />
							<li>
								<b>Career Fair: </b>The career fair is the central component of the IIT Kanpur career fest, providing companies with an
                opportunity to connect with students and discuss job and internship opportunities. The career fair can be organised as
                follows:
							</li>
							<ul>
								<li>
									<b>Recruitment Meetings: </b>Companies can meet with students one-on-one to discuss job and internship opportunities,
                  conduct on-site interviews, and provide information on the hiring process.
								</li>
								<li>
									<b>Resume Collection: </b>Companies can collect resumes from students, providing an opportunity to review the
                  qualifications and potential of IIT Kanpur's talent.
								</li>
							</ul>
							<br />
							<li>
								<b>Networking Receptions: </b>Companies can participate in networking receptions to meet and connect with other industry
                professionals and potential candidates.
							</li>
							<br />
							<li>
								<b>Keynote Speakers: </b>Companies can provide keynote speeches and share their insights on current industry trends and the
                future of the field.
							</li>
						</ul>
					</SectionText>
				</TextWrapper>
				<br />

				<br />
				<SectionTitle>Why participate in Career fest</SectionTitle>
				<Container>
					<TextWrapper>
						<SectionText>
              The First Career Fest of IIT Kanpur will provide numerous benefits for participating companies, including:
						</SectionText>
					</TextWrapper>
					<br />
					<CustomAutofitGrid3>
						<Card>
							<Title>Brand Awareness</Title>
							<Description>
                Companies can showcase their brand and increase visibility among potential candidates through their participation in the
                career fest.
							</Description>
						</Card>
						<Card>
							<Title>Access to Talent</Title>
							<Description>
                The career fest provides an opportunity for companies to connect with talented students from one of the top institutes of
                engineering and technology education, which can result in finding the right candidate for job or internship opportunities.
							</Description>
						</Card>
						<Card>
							<Title>Networking</Title>
							<Description>
                The career fest provides opportunities for companies to network with other participating companies and industry
                professionals, which can lead to new relationships and collaborations.
							</Description>
						</Card>
						<Card>
							<Title>Market Intelligence</Title>
							<Description>
                Companies can gain insights into the industry and the current job market through their participation in the career fest.
							</Description>
						</Card>
						<Card>
							<Title>Cost-Effective Recruitment</Title>
							<Description>
                Participating in a career fest can be more cost-effective than traditional recruitment methods, as companies can meet with
                multiple potential candidates in one location.
							</Description>
						</Card>
						<Card>
							<Title>Building Relationships</Title>
							<Description>
                The career fest provides a platform for companies to build relationships with potential candidates and institutes, which can
                result in future collaborations and partnerships.
							</Description>
						</Card>
						<Card>
							<Title>Reputation Building</Title>
							<Description>
                Companies can enhance their reputation as attractive employers by participating in a career fest and showcasing their brand
                and culture to potential candidates.
							</Description>
						</Card>
					</CustomAutofitGrid3>
				</Container>
			</Page>
			<CtaWrapper>
				<Container>
					<Stack>
						<OverTitle>Registration</OverTitle>
						<SectionTitle>Register with us to conduct events in Career Festival</SectionTitle>
						<Description>Fill out the online form or share the filled doc with us at <a href="mailto:spo@iitk.ac.in" style={{textDecoration: "none", color: "inherit"}}>spo@iitk.ac.in</a></Description>
						<ButtonGroup>
							<Link href="https://docs.google.com/forms/d/e/1FAIpQLScnmO0WUWhNH16_VG_oODZ6qf7XyHu3YuHilxLM-pMC3OjpKg/viewform?usp=sf_link">
								<Button>
                    Google Form <span>&rarr;</span>
								</Button>
							</Link>
							<Link href="https://docs.google.com/document/d/1YFfLPlAzhr1o5p7ySwJ4BGDZjlpUhAGvmmYHD_GXvYI/edit?usp=sharing">
								<OutlinedButton transparent>
                    Word Document <span>&rarr;</span>
								</OutlinedButton>
							</Link>
						</ButtonGroup>
					</Stack>
				</Container>
				<Container style={{marginBottom: 25, color: "rgb(var(--textSecondary))", textAlign: "center", padding: 10}}>
          Page last updated on March 2023
				</Container>
			</CtaWrapper>
		</>
	)
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justified;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  font-size: 1.47rem;
  opacity: 0.6;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media("<=tablet")} {
    display: block;
  }
`

const SectionText = styled.div`
  flex: 1;
  font-size: 1.8rem;
  text-align: justify;
  opacity: 0.9;
  margin: 20px 30px auto auto;
  ${media("<=tablet")} {
    margin: 20px auto auto auto;
  }
`
const SectionTitle2 = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const CustomAutofitGrid3 = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const ImageContainer = styled.div`
  max-width: 40%;
  flex: 1;
  position: relative;
  padding: 2px;

  & > :first-child {
    border-style: solid;
    border-radius: 0.6rem;
  }
  ${media("<=tablet")} {
    max-width: 100%;
    display: block;
    height: 30rem;
    width: auto;
    margin-top: 20px;
  }
`
const ImageContainerCenter30 = styled.div`
  height: 30rem;
  align: center;
  position: relative;
`
const Link = styled.a`
  color: rgb(var(--text));
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
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
