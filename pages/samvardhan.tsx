/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */

import NextLink from "next/link"
import styled from "styled-components"
import { Button } from "tinacms"

import AutofitGrid from "components/AutofitGrid"
import BasicSection from "components/BasicSection"
import ButtonGroup from "components/ButtonGroup"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"
import Cta from "views/CareerFestival/Cta"
import Cta2 from "views/CareerFestival/Cta2"
import Features from "views/CareerFestival/Features"
import FeaturesGallery from "views/CareerFestival/FeaturesGallery"

const Routes = [
	{
		name:"Features",
		url:"/samvardhan#features"
	},
	{
		name:"Why Participate?",
		url:"/samvardhan#why-participate"
	},
	{
		name:"Schedule",
		url:"/samvardhan#schedule"
	},
	{
		name:"Registration",
		url:"/samvardhan#registration"
	},
	{
		name:"Event Details",
		url:"/samvardhan#event-details"
	},
	{
		name:"Policies",
		url:"/samvardhan#policies"
	},
	// {
	// 	name:"Policy for Companies",
	// 	url:"/docs/2021-22/Career Fair Policy for Companies - 2022 - 23.pdf"
	// },
	// {
	// 	name:"Policy for Students",
	// 	url:"/docs/2021-22/Career Fair Policy for Students - 2022 - 23.pdf"
	// },
]

export default function AboutPage() {
	return (
		<>
			<Page
				title="Samvardhan"
				description="The Institute of Technology (IIT) Kanpur is a premier technical institute in India known for its excellent academic programs and talented student body. Students' Placement Office, IIT Kanpur, proposes the first Career Fest to provide students with a unique opportunity to connect with potential employers and explore their career options."
				routes={Routes}
			>
				<FeaturesGallery/>
				<br />
				{/*  */}
				<br />
				<SectionTitle id="why-participate">Why Participate?</SectionTitle>
				<br /><br />
				<Features/>
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
				<br />
				<hr />
				<br />
				<BasicSection imageUrl="/demo-illustration-1.svg" title="8th and 9th April" overTitle="SCHEDULE">
					<SectionText id="schedule">
						The detailed scheduled with be shared soon...
					</SectionText>
				</BasicSection>
				<br />
				<Cta2/>
				<br />

				<br />
				<SectionTitle id="event-details">Event Details</SectionTitle>
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
				<Cta/>
				<br />
			</Page>
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
