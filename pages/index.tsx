/* eslint-disable react/no-unescaped-entities */
import { InferGetStaticPropsType } from "next"
import Head from "next/head"
import styled from "styled-components"

// import BasicSection from 'components/BasicSection';
import Button from "components/Button"
import Container from "components/Container"
// import Link from 'components/Link';
import MessageSection from "components/MessageSection"
import RichText from "components/RichText"
import SectionTitle from "components/SectionTitle"
import { EnvVars } from "env"
import { getAllPosts } from "utils/postsFetcher"
// import Cta from 'views/HomePage/Cta';
// import Features from 'views/HomePage/Features';
import Hero from "views/HomePage/Hero"
import Partners from "views/HomePage/Partners"
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';
// import { useState } from 'react';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>{EnvVars.SITE_NAME}</title>
				<meta
					name="description"
					content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
				/>
			</Head>
			<HomepageWrapper>
				<WhiteBackgroundContainer>
					<Hero />
					<MessageSection imageUrl="/testimonials/director.jpg" title="Director's Message">
						<p>
              Since the advent of this great institution, IIT Kanpur has vision to provide quality technical education and act as a rostrum
              for scientific research, and a mission to develop human potential to its greatest degree. In accordance with this vision IIT
              Kanpur has maintained an exemplary record of academic contribution for achieving excellence in teaching, research and
              governance. A sincere effort has now begun to restore the vantage position of IITK as the top technological Institute in
              India, The students of IITK are a cherry picked group. They have been chosen through a process that makes IITK one of the
              toughest institutes to get an admission.
						</p>
						<br />
						<Button href="/director-message">Read More</Button>
					</MessageSection>
					<MessageSection imageUrl="/testimonials/chairman.jpeg" title="Chairman's Message" reversed>
						<p>
              I would like to warmly welcome all the current and prospective recruiters to the Student Placement Office (SPO) of IIT Kanpur.
              In this age, demanding continual technology enhancements, the industry requires talented youngsters with outstanding
              analytical skills, open mindset and innovative approach towards problem solving. I am glad to convey that IIT Kanpur is home
              to such bright young minds. Our next batch of students is all set to graduate soon and they are looking for opportunities that
              are appealing to their intellect and would help them realize their full potential.
						</p>
						<br />
						<Button href="/chairman-message">Read More</Button>
					</MessageSection>
					<MessageSection imageUrl="/testimonials/vc.jpg" title="Vice Chairman's Message">
						<p>
              Indian Institute of Technology Kanpur (IITK), established in 1959, is one of the premier institutions established by the
              Government of India. IITK aims to create, disseminate, and translate knowledge in science, engineering and allied disciplines
              that serve the society. IITK has set a benchmark through its outstanding academic programs, quality education, and
              cutting-edge multidisciplinary research. We at IITK prioritize the 360-degree development of students to meet global
              standards. Our education system goes over and beyond the classroom lectures. We strongly agree with the overall growth of the
              students that ensures all our students are ready to meet the new challenges in life. In this regard, Students' Placement
              Office (SPO) takes utmost care to groom students according to the needs of the industry.
						</p>
						<br />
						<Button href="vice-chairman-message">Read More</Button>
					</MessageSection>
				</WhiteBackgroundContainer>
				<DarkerBackgroundContainer>
					{/* <Testimonials /> */}
					{/* <Cta />  */}
					{/* <Features /> */}
					{/* <SectionTitle>Our Team</SectionTitle>
          <Container>
            <RichText>Our team description</RichText>
            <TeamContainer>
              <div>
                <Button href="/office-team">Office team</Button>
              </div>
              <div>
                <Button href="/student-team">Student team</Button>
              </div>
            </TeamContainer>
          </Container> */}
					<Partners />
					{/* <ScrollableBlogPosts posts={posts} /> */}
				</DarkerBackgroundContainer>
			</HomepageWrapper>
		</>
	)
}

const TeamContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllPosts(),
		},
	}
}
