/* eslint-disable react/no-unescaped-entities */
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Button from 'components/Button';
import Container from 'components/Container';
import Link from 'components/Link';
import MessageSection from 'components/MessageSection';
import RichText from 'components/RichText';
import SectionTitle from 'components/SectionTitle';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

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
            <p>
              IITK owes a lot to its alumni for all its international reputation and national standing. The students usually come from
              varied educational and cultural backgrounds. The programs are designed to instill innovation, leadership, team work and global
              focus into its participants. Be it the core engineering, research and teaching, consulting and investment banking, IT and
              ITES, or administrative and social sectors, our alumni have excelled in each and every field. They really have made us proud!
            </p>
            <p>
              IITK has an excellent recruitment record. The graduates and post graduates of IITK have been selected by some of the world’s
              leading corporation, besides most of the leading Indian corporation. The exposure provided at this place trains not just for
              technological superiority, but also for an overall understanding of the World. The undergraduate and post graduate programs
              are continuously monitored and frequently revised to incorporate cutting edge technological theories and practice. Latest
              technologies are employed for effective delivery and the curriculum emphasizes practice orientation. Exchange program with
              leading technical institutes around the world expose the students to management thought and practice in different national
              environments and cultures We have to benchmark ourselves on the global scale with the best technical institution.
            </p>
            <p>
              I heartily welcome both the recruiters and our graduating students to come to this platform and get the best out of each
              other. Through this brochure, I offer a special invitation to all organizations and corporations! Do Come to the campus and
              test our budding talents. Who know and expect nothing less than the best and are not afraid of any realistic challenge. l hope
              that firms and our students will create synergies like never before. We will be happy to receive your suggestions to further
              improve the process of recruitment.
            </p>
            <p>
              Let it be my priviledge to welcome you to the world of IIT Kanpur.
              <br />
              <br />
            </p>
            Prof. Abhay Karandikar <br />
            Director <br />
            Indian Institute of Technology <br />
            Kanpur <br />
          </MessageSection>
          <MessageSection imageUrl="/testimonials/chairman.jpeg" title="Chairman's Message" reversed>
            <p>
              I would like to warmly welcome all the current and prospective recruiters to the Student Placement Office (SPO) of IIT Kanpur.
              In this age, demanding continual technology enhancements, the industry requires talented youngsters with outstanding
              analytical skills, open mindset and innovative approach towards problem solving. I am glad to convey that IIT Kanpur is home
              to such bright young minds. Our next batch of students is all set to graduate soon and they are looking for opportunities that
              are appealing to their intellect and would help them realize their full potential.
            </p>
            <p>
              At IIT Kanpur, we make every effort to hone the technical and analytical skills of our students through the rigorous
              coursework that focusses on up-to-date scientific knowledge and state-of-the-art technological know-hows in their respective
              disciplines. The UG curriculum of each department consists of certain compulsory courses on the institute level, core courses
              on the departmental level, departmental electives and open electives. The inclusion of open electives, wherein the students
              can opt for elective courses from any department, adds interdisciplinary component to the curriculum. In addition, each
              student is also required to take certain minimum course-credits in the department of Humanities and Social Sciences which
              greatly enhances their outlook towards the society and its needs. Our PG students, who are admitted at IITK after a very tough
              entrance procedure, undergo rigorous coursework consisting of advanced level courses. As the most essential part of their
              degree, they write their theses under the able supervision of our faculty who themselves are renowned researchers in their
              respective fields.
            </p>
            <p>
              During their stay at IIT Kanpur, our students also participate in myriad of extra-curricular activities, which exposes them to
              and tests their skills in sports, cultural, dramatics, music and, allows students to develop a healthy personality. The
              students also get first-hand experience in organization and management of events through various leadership positions they
              take up during several annual events organized at IIT Kanpur. It is therefore no wonder that a student graduating from IIT
              Kanpur has an all-round personality.
            </p>
            <p>
              SPO office facilitates the recruitment process for the students as well as the employers, by serving as an interface between
              the two. On the SPO portal, students can upload their resumes, which are then verified by a dedicated team of personnel at
              SPO. The employers can announce their job openings and job profiles after registering on the portal. The SPO strives to help
              both the students and employers in matching their interests and interacting with each other, with the ultimate aim of allowing
              well-informed hiring decisions from both sides. I am sure, our team of placement coordinators and dedicated volunteers will
              ensure that the recruitment process becomes a smooth and pleasing experience for both the recruiters and the students. We are
              always eager to improve and open for any suggestions from recruiters in order to make this experience even better. With this,
              I again welcome all the recruiters to IIT Kanpur.
            </p>
            <p>
              You have come to the right place…and you will get what you are looking for! We look forward to welcoming to for the placements
              at IIT Kanpur. Have a happy placement experience.
            </p>
            <br />
            Dr. Kaustubh Kulkarni <br />
            Chairman <br />
            Students' Placement Office <br />
            IIT Kanpur <br />
            Email ID: spochair@iitk.ac.in <br />
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
            <p>
              Our students are not only talented and dream high, but they are also equally capable of achieving this. Believe, as an
              industry, you will get the innovators here at IITK, who will significantly contribute to the newer heights of success.
            </p>
            <p>
              Thanks to all our prestigious recruiters for extending opportunities to our students year on year. SPO of IITK welcomes you to
              join hands for a more profound and mutually beneficial relationship towards nation-building.
            </p>
            <p>Partner and write your success stories with IITK.</p>
            <br />
            Dr. Raju Gupta <br />
            Vice Chairman <br />
            Students' Placement Office <br />
            IIT Kanpur <br />
          </MessageSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Testimonials /> */}
          {/* <Cta />  */}
          {/* <Features /> */}
          <SectionTitle>Our Team</SectionTitle>
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
          </Container>
          <Partners />
          {/* <FeaturesGallery /> */}
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
