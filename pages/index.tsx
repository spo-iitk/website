/* eslint-disable react/no-unescaped-entities */
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
// import BasicSection from 'components/BasicSection';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from 'components/Button';
import Container from 'components/Container';
import Home from 'components/Home';
// import Link from 'components/Link';
import MessageSection from 'components/MessageSection';
import RichText from 'components/RichText';
import SectionTitle from 'components/SectionTitle';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
// import Cta from 'views/HomePage/Cta';
// import Features from 'views/HomePage/Features';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Hero from 'views/HomePage/Hero';
import NewsIIT from 'views/HomePage/NewsIIT';
import Partners from 'views/HomePage/Partners';
import WhyRec from 'views/HomePage/WhyRec';
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
          content="Students' Placement Office at IIT Kanpur has been providing world-class recruitment services to organizations worldwide for over three decades now. 
					IIT Kanpur was in fact the first institute of the IIT fraternity to have a dedicated Placement Office. The Office is responsible for over 1000 jobs and 500 summer internships annually."
        />
        <meta
          name="keywords"
          content="Student's Placement Office, SPO IITK, Placement IITK, Recruitment IITK, Preparation Portal, Resources"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Home />
          <WhyRec />
          <Swiper
            spaceBetween={30}
            navigation
            pagination={{
              clickable: true,
            }}
            loop
            autoplay={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <MessageSection imageUrl="/testimonials/dir.jpg" title="Director's Message">
                <p>
                  Since its advent, IIT Kanpur has had the vision to provide quality technical education and act as a rostrum for scientific
                  research, as well as a mission to develop human potential to the greatest degree. In accordance with this vision, IIT
                  Kanpur has maintained an exemplary record of academic contribution for achieving excellence in teaching, research, and
                  governance. A sincere effort has now begun to restore the vantage position of IITK as the top technological Institute in
                  India. The students of IITK are a cherry-picked group. They have been chosen through a process that makes IITK one of the
                  toughest institutes to get an admission.
                </p>
                <br />
                <Button href="/director-message">Read More</Button>
              </MessageSection>
            </SwiperSlide>
            <SwiperSlide>
              <MessageSection imageUrl="/testimonials/chairperson2026.jpeg" title="Chairperson's Message">
                <p>
                  Indian Institute of Technology Kanpur (IITK), established in 1959, is one of the premier institutions established by the
                  Government of India. IITK aims to create, disseminate, and translate knowledge in science, engineering and allied
                  disciplines that serve the society. IITK has set a benchmark through its outstanding academic programs, quality education,
                  and cutting-edge multidisciplinary research. We at IITK prioritize the 360-degree development of students to meet global
                  standards. Our education system goes over and beyond the classroom lectures. We strongly agree with the overall growth of
                  the students that ensures all our students are ready to meet the new challenges in life. In this regard, Students'
                  Placement Office(SPO) takes utmost care to groom students according to the needs of the industry.
                </p>
                <br />
                <Button href="/chairman-message">Read More</Button>
              </MessageSection>
            </SwiperSlide>
            <SwiperSlide>
              <MessageSection imageUrl="/testimonials/vc2026.jpeg" title="Vice Chairperson's Message">
                <p>
                  Indian Institute of Technology Kanpur (IITK), since its inception in 1959, has remained at the forefront of academic
                  excellence, research, and innovation. As one of India’s leading technical institutions, IITK is dedicated to nurturing
                  knowledge, fostering creativity, and developing solutions that address real-world challenges across science, engineering,
                  and allied domains. At IIT Kanpur, we emphasize holistic education that goes far beyond conventional academics. Our
                  students are trained to think critically, innovate responsibly, and adapt confidently in an ever-evolving global
                  landscape. Equal importance is given to technical proficiency, professional skills, and personal growth, ensuring that our
                  graduates are well-prepared to excel in diverse environments. The Students’ Placement Office (SPO) plays a vital role in
                  bridging the gap between academia and industry. Through continuous interaction with industry partners, focused skill
                  development initiatives, and structured placement processes, SPO ensures that students are aligned with current and future
                  industry requirements. Our students possess not only strong academic foundations but also the drive, discipline, and
                  vision to create meaningful impact. Industry partners will find at IITK a talented pool of individuals ready to
                  contribute, innovate, and grow alongside their organizations. We extend our sincere gratitude to our valued recruiters for
                  their unwavering support and collaboration over the years. The Students’ Placement Office, IIT Kanpur, looks forward to
                  strengthening these partnerships and building long-term relationships that contribute to shared success and
                  nation-building. Join hands with IIT Kanpur and be a part of shaping the future.
                </p>
                <br />
                <Button href="vice-chairman-message">Read More</Button>
              </MessageSection>
            </SwiperSlide>
          </Swiper>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <NewsIIT />
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
  );
}

const TeamContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
