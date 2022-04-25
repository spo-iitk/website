/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function AboutPage() {
	return (
		<Page
			title="IIT Kanpur"
			description="The Institute has earned a superb academic reputation globally in its continuous endeavour to achieve excellence in undergraduate and postgraduate education and research."
		>
			<SectionTitle>Programs at IITK</SectionTitle>
			<br />
			<br />
			<CustomAutofitGrid>
				<Card>
					<Title>B.Tech</Title>
					<Description>
            The 8-semester long Bachelor's Program is offered in all core programs, providing students with a solid base of general
            education to contribute to industrial development and economic growth by preparing a cadre of engineers and scientists. The
            salient feature of this program is the project offered in the final year of the degree, giving them industrial exposure and
            hands-on experience and fostering creativity.{" "}
					</Description>
				</Card>
				<Card>
					<Title>B.S.</Title>
					<Description>
            The four-year-long bachelor's program deals with different facets of research, introducing both academic and experimental
            knowledge, and aims at developing the basic knowledge of sciences, engineering, and specialisation in the field. The curriculum
            is similar to that of the B.Tech. Program.
					</Description>
				</Card>
				<Card>
					<Title>Minor</Title>
					<Description>
            Students take minors to gain specialization in a specific field of a department, different from the parent department, which
            helps in instilling logical ability and foundation knowledge towards the area. Example: B.Tech in Electrical Engineering with a
            Minor in Management.
					</Description>
				</Card>
				<Card>
					<Title>Dual degree</Title>
					<Description>
            The Dual degree at I.I.T. Kanpur enables students to fetch two degrees by the end of 5 years. A degree is vested in the
            department's branch, while an M. Tech degree will be awarded in the specialization decided at admission.
					</Description>
				</Card>
				<Card>
					<Title>Double Major</Title>
					<Description>
            Double Major at I.I.T. Kanpur is a five-year program for a Bachelor's degree with majors in two departments/disciplines that
            offer B Tech/B.S. degrees. Studying two subjects helps students see each one from a new perspective, transforming them into a
            more desirable candidates. Example: B.Tech in Electrical Engineering with a second major in Computer Science and Engineering.
					</Description>
				</Card>
				<Card>
					<Title>Integrated M.Sc.</Title>
					<Description>
            Integrated M.Sc. comprises of a 10-semester academic curriculum offered in Chemistry, Physics, Mathematics, Scientific
            Computing, and Economics. The program is on par with the B.Tech and Dual Degree programs and is one of its kind in India. It
            equips the undergraduate students with fundamental engineering knowledge, besides inculcating enthusiasm and expertise for
            research in basic sciences, enabling them to excel in diversified environments.
					</Description>
				</Card>
				<Card>
					<Title>M. Tech.</Title>
					<Description>
            It comprises a 4-semester academic curriculum, besides the core engineering branches, M. Tech. Programs are also available in
            interdisciplinary areas such as Nuclear Engineering, Biological Sciences and Bioengineering, Laser Technology, Environmental
            Engineering, Materials Science, and Industrial and Management Engineering. It aims at acquainting the students with the various
            aspects of engineering through several courses, both introductory and in the specialised area, followed by research, leading to
            a thesis on a topic in the area.
					</Description>
				</Card>
				<Card>
					<Title>Ph.D.</Title>
					<Description>
            The ph.D. program is aimed and designed to facilitate students in acquiring proficiency in the chosen area through coursework
            with a creative ability to solve new problems and a capacity to learn continually and interact with multidisciplinary groups,
            followed by doctoral research. It is offered in Sciences, Engineering, Humanities & Social Sciences, and Management.
					</Description>
				</Card>
				<Card>
					<Title>M.Sc.-Ph.D. dual degree program</Title>
					<Description>M.Sc. students of The Department of Physics are allowed to continue for a Ph.D.</Description>
				</Card>
				<Card>
					<Title>M.Sc.</Title>
					<Description>
            For M.Sc. Students with a B.Sc. (Hons.) background are chosen through a rigorous process called J.A.M. It comprises a 4-semester
            academic curriculum offered in Physics, Chemistry, Mathematics, and Statistics. It is aimed to provide students with the
            required scientific knowledge and opens new and ample opportunities in a variety of fields.
					</Description>
				</Card>
				<Card>
					<Title>M.B.A.</Title>
					<Description>
            Admissions for M.B.A. are made through the all-India examinations, JMET. It comprises of a 4-semester academic curriculum. It is
            meticulously structured and integrated with an internship with classroom teaching, case discussions, and hands-on industry
            experience. The program includes compulsory & elective courses and a capstone project in the interest area of the participant.
            Continuous industrial interaction, seminars, and live projects are a part of the curriculum to make students aware of the
            industry expectations and prepare them to be the leaders of tomorrow.
					</Description>
				</Card>
				<Card>
					<Title>Master of Design (M.Des.)</Title>
					<Description>
            Students are selected through the all-India examinations, CEED. It comprises of 4-semester academic curriculum. The program is
            interdisciplinary, emphasizing a balanced theory and practice curriculum. The program has three subgroups: Product Design, User
            Interface Design, and Visual Communication Design. Students are required to conduct a project and prepare a thesis as a part of
            their curriculum. Various workshops are also held to broaden the outlook of students and also in helping them in deciding their
            careers.
					</Description>
				</Card>
			</CustomAutofitGrid>
			<br />
			<hr />
			<br />
			<SectionTitle>Research</SectionTitle>
			<br />
			<br />
			<SectionText>
        I.I.T. Kanpur places a strong emphasis on research and development, and innovation. Faculty members undertake research in the fields
        of their interest. Many postgraduate students and some undergraduate students are involved in these activities, as the curriculum
        provides facilities for the same. While the Institute funds some research, most research activities/ projects are funded by
        sponsoring agencies and industries.
			</SectionText>
			<br />
			<hr />
			<br />
			<SectionTitle>Alumni</SectionTitle>
			<br />
			<br />
			<SectionText>
        I.I.T. Kanpur prides itself on the success of its alumni. After completing their academic years at the Institute, our alumni went on
        to expand their wings. They reached new heights as entrepreneurs, industrialists, academicians, researchers, social cause champions,
        bureaucrats, etc. We have had many notable alumni who have received national and international recognition in their respective
        professional fields. With more than 45000 alumni spanning across the globe, they have been instrumental in strengthening the image
        of I.I.T. Kanpur. The spirit of Giving Back is reflected in every corner of the Institute, be it infrastructure development,
        scholarships, especially to girl students, financial support to various hobby clubs, set-up of different R&D labs and faculty
        chairs, donations to various community development sectors, environment, etc. For more info, visit{" "}
				<a href="https://www.iitk.ac.in/dora/alumni-profile">here.</a>{" "}
			</SectionText>
			<br />
			<hr />
			<br />
			<SectionTitle>Faculty</SectionTitle>
			<br />
			<br />
			<SectionText>
        I.I.T. Kanpur has more than 350 <a href="https://iitk.ac.in/new/iitk-faculty">faculty members</a> with degrees from renowned
        universities worldwide. The Faculty at I.I.T. Kanpur are involved in cutting-edge research both in the industry and within I.I.T.
        Kanpur and hold positions as varied as editors of various international journals, visiting Faculty in many universities, advisors to
        government and industry. The contribution of the Faculty has been recognized frequently and has been honored with the awards such
        as:
				<ul>
					<li>Padma Vibhushan</li>
					<li>Padmashree</li>
					<li>S. S. Bhatnagar (more than ten in number)</li>
					<li>Fellowship of Indian Academy of Engineering</li>
					<li>Fellowship of Indian Academy of Science</li>
					<li>Fellowship of National Academy of Science</li>
					<li>Humboldt and JSPS Fellowships</li>
				</ul>
			</SectionText>
			<br />
			<hr />
			<br />
			<SectionTitle>All Round Development</SectionTitle>
			<br />
			<br />
			<SectionText>
        I.I.T. Kanpur provides an environment that nurtures leaders in addition to sound engineers. Students independently manage several
        club activities, national-level festivals, and administration of hostels and thus emerge as the winner in national-level
        competitions and their corporate life. This provides a platform for students to hone their interpersonal skills and provides a
        holistic education.
			</SectionText>
			<br />
			<hr />
			<br />
			<SectionTitle>Festivals</SectionTitle>
			<br />
			<br />
			<SectionText>
        The National Festivals of I.I.T. Kanpur has a budget of around 1.5 crores, providing a unique opportunity where the students can
        experience management lessons firsthand. Right from the conceptualization stage to the final implementation, the students manage
        everything independently. The organising team interacts and deals with corporate celebrities, hence inculcating managerial and
        interpersonal skills.
				<br />
				<br />
				<h3>
					<Link href="https://techkriti.org/">Techkriti</Link>
				</h3>
        The Global techno-entrepreneurial festival of I.I.T. Kanpur attracts the best talent from worldwide in its competitions. Several
        high-profile dignitaries from science and technology also attend the festival.
				<h3>
					<Link href="https://antaragni.in/">Antaragni</Link>
				</h3>
        In its 55th year, the festival has evolved into the most significant cultural festival in North India, which witnesses more than
        6000 participants. Some of the best-known artists in the country from music, dance, theatre, and arts have been a part of the
        festival. A team of more than 600 students works for around nine months to put up the show.
				<h3>
					<Link href="https://udghosh.org.in/">Udghosh</Link>
				</h3>
        The national-level sports festival of IIT Kanpur sees participation from all corners of the country. The festival provides a
        platform for the participating teams and the organizers to inculcate a sense of teamwork and leadership.
			</SectionText>
		</Page>
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
  text-align: center;
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
const SectionText = styled.div`
  font-size: 1.8rem;
  opacity: 0.9;
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

const Link = styled.a`
  color: rgb(var(--text));
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`
