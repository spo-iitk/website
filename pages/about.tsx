/* eslint-disable react/no-unescaped-entities */

import Head from "next/head"
import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const Routes = [
	{
		name: "About IITK",
		url: "/about#about"
	},
	{
		name: "Academics",
		url: "/about#academics"
	},
	{
		name: "Research",
		url: "/about#research"
	},
	{
		name: "Alumni",
		url: "/about#alumni"
	},
	{
		name: "Faculty",
		url: "/about#faculty"
	},
	{
		name: "Students' Life and Activities",
		url: "/about#activities"
	},
]

export default function AboutPage() {
	return (
		<>
			<Page
				title="IIT Kanpur"
				description="The Institute has earned a superb academic reputation globally in its continuous endeavour to achieve excellence in undergraduate and postgraduate education and research."
				routes={Routes}
			>
				<SectionTitle id="about">About IIT Kanpur</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
						Indian Institute of Technology Kanpur is one of the premier institutions established by the Government of India in 1959. The aim of the Institute is to provide meaningful education, conduct original research of the highest standard and provide leadership in technological innovation. Consistently ranked amongst the top 5 engineering institutes in India over past several decades, IIT Kanpur offers courses in sciences, engineering, humanities and management. The students get the best of opportunities in the form of highly advanced courses, eminent faculty members, well-equipped laboratories, library, hostels and state of the art facilities to excel in research and development. The selection procedures for students at undergraduate, postgraduate and PhD levels are highly stringent so that IIT gets the best brains of India. Highly scientific and innovative technology is used for teaching and conducting research activities. Every year IIT Kanpur is enriched by the laurels brought by its faculty members and the students in the form of research publications, sponsored projects, fellowships and industrial consultancies. Many of our alumni are leaders in academia and industry around the globe. The sprawling IIT Kanpur campus is located in the industrial city of Kanpur, only a few hours away from New Delhi, the Capital of India.
					</SectionText>
					<ImageContainer>
						<NextImage src="/AboutPageImg/AboutIITK.jpg" alt="IITK" layout="fill" objectFit="contain" />
					</ImageContainer>
				</TextWrapper>
				<br />
				<hr />
				<br />
				<SectionTitle id="academics">Academics at IIT Kanpur</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
						Academics at IIT Kanpur empowers the students with scientific temperament and knowledge in diverse disciplines of science, engineering, management, and humanities and social sciences. The pedagogy at IIT Kanpur teaches the students to take an approach led by critical thinking to solve technologically challenging problems. The globally acclaimed education prepares the students for rewarding and exciting careers. The excellent education has enabled the alumni to succeed in diverse fields.
					</SectionText>
					<ImageContainer>
						<NextImage src="/AboutPageImg/students.jpg" alt="IITK" layout="fill" objectFit="contain" />
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<CustomAutofitGrid>
					<Card>
						<Title>B.Tech / B.S.</Title>
						<Description>
							Admission: Joint Entrance Exam (JEE) Advanced <br />
							Duration: 4 years <br />
							Internships(voluntary): Upto 5 internships of 1-3 months <br />
							Includes a core programme common to all students; provides a foundation in introductory Mathematics, Physics, Chemistry, Engineering Sciences, Technical Arts and Humanities and Social Sciences. and professionally trains the students in their individual disciplines.{" "}
						</Description>
					</Card>
					<Card>
						<Title>Minor</Title>
						<Description>
							Our B.Tech/B.S. students can take 3 or 4 courses to gain specialization in a specific field of a department, other than their parent departments to get a minor. <br />
							Eg: BS in Mathematics and Scientific Computing with a minor in Economics.
						</Description>
					</Card>
					<Card>
						<Title>Bachelor-Master Dual Degree</Title>
						<Description>
							Our B.Tech/B.S. students can choose to convert to a dual degree (with Masters in the parent or any other department) till the end of 7th semester.Two degrees (BTech/BS+MTech/MS) are awarded at the end of 5-year coursework.No student is initially admitted in a dual degree program because we believe it is too early for them to decide their specializations.We want them to get a flavour of the department before they make such a crucial choice. <br />
							Eg: BS in Mathematics and Scientific Computing with MS in Economics.
						</Description>
					</Card>
					<Card>
						<Title>Double Major</Title>
						<Description>
							Our B.Tech/B.S. students can major in 2 departments, meaning a B Tech/BS degree in parent department along with a second major in department of their choice, in duration of 5 years. This requires the student to complete all department core courses of their second major. <br />
							Eg: BS in Mathematics and Scientific Computing with second major in Economics.
						</Description>
					</Card>
					<Card>
						<Title>M.Sc.</Title>
						<Description>
							Admission: Joint Admission Test for M.Sc.(JAM)  <br />
							Duration: 2 years <br />
							Eligibility: Student with B.Sc.(Hons.) <br />
							Offered in Physics, Chemistry, Mathematics and Statistics. M.Sc. students of The Department of Physics are allowed to continue for a Ph.D.
						</Description>
					</Card>
					<Card>
						<Title>M.Tech. / M.S.(R)</Title>
						<Description>
							Admission: Graduate Aptitude Test in Engineering(GATE) <br />
							Duration: 2 years <br />
							Acquaints the students with the various aspects of engineering through several courses, both introductory and in the specialized area followed by research, leading to a thesis on a topic in their area of specialization.
						</Description>
					</Card>
					<Card>
						<Title>Ph.D.</Title>
						<Description>
							The ph.D. program is aimed and designed to facilitate students in acquiring proficiency in the chosen area through coursework
							with a creative ability to solve new problems and a capacity to learn continually and interact with multidisciplinary groups,
							followed by doctoral research. PhD programm is offered in all disciplines of Sciences, Engineering, Humanities & Social Sciences, and Management.
						</Description>
					</Card>
					<Card>
						<Title>M.B.A.</Title>
						<Description>
							Admission: Joint Management Entrance Test(JMET) <br />
							Duration: 2 years <br />
							Carefully structured and integrated with classroom teaching, case discussions, hands-on industry experience with internship and project work. Continuous industrial interaction, seminars and live projects are a part of the curriculum.
						</Description>
					</Card>
					<Card>
						<Title>Master of Design (M.Des.)</Title>
						<Description>
							Admission: Common Entrance Exam for Design(CEED) <br />
							Duration: 2 years <br />
							The programme is interdisciplinary in nature with a strong emphasis on a balanced curriculum of theory and practice. The programme has three sub-groups: Product Design, User Interface Design and Visual Communication Design. Students are required to conduct a project and prepare a thesis as a part of their curriculum. Various workshops are also held to broaden the outlook of students and also in helping them in deciding their career.
						</Description>
					</Card>
				</CustomAutofitGrid>
				<br />
				<hr />
				<br />
				<SectionTitle id="research">Research and Development</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
						IIT Kanpur has always been among the pioneers in new research fields. The institute has coped with the changing times and requirements of R&D by enhancing its interaction with industries, working on projects that aim to advance the existing technologies and expanding the scope of the research work beyond patents and publications.<br />
						Our labs are equipped with industry grade equipments. Our lecture halls incorporate excellent audio-visual aids. We accommodate a great team of professors and professionals pushing frontiers in science and technology. They carry the banners of our excellent research quality standards.
						<ul>
							<li>FlexE</li>
							<li>NWTF</li>
							<li>SBERTC</li>
							<li>Flight Lab</li>
							<li>Tinkering Labs</li>
							<li>Centre for Mechatronics</li>
							<li>Centre for Cyber security</li>
							<li>Thematic Unit of Excellence</li>
							<li>Engine Research Laboratory</li>
							<li>Centre for Laser Technology</li>
							<li>Real Time Digital Simulation Centre</li>
							<li>Advanced Centre for Materials Science</li>
							<li>Advance Centre for Electronic Systems</li>
							<li>SAMTEL Centre for Display Technology</li>
							<li>BSNL-IITK Telecom Centre of Excellence</li>
						</ul>
					</SectionText>
					<ImageContainer>{ /* eslint-disable-line no-mixed-spaces-and-tabs */}
						<NextImage src="/AboutPageImg/Research.jpg" alt="Research" layout="fill" objectFit="contain" />
					</ImageContainer>
				</TextWrapper>
				<br />
				<hr />
				<br />
				<SectionTitle id="alumni">Alumni</SectionTitle>
				<br />
				<br />
				<ImageContainerCenter30>
					<NextImage src="/AboutPageImg/alumni.png" alt="alumni" layout="fill" objectFit="contain" />
				</ImageContainerCenter30>
				<SectionText>
					IIT Kanpur's rising global stature is credited to its distinguished alumni whose achievements in many different fields continue to make us proud. Our well-established alumni network is a matter of pride for us. It includes India's stalwarts in all imaginable fields: academia, technology, banking, entrepreneurship, public services, music and social service. IIT Kanpur recognizes the achievements and contributions of its alumni by conferring the Distinguished Alumnus Award (DAA) to honour individuals who have made a mark in their fields (Academic Excellence, Professional Excellence, Entrepreneurship and Management, Humanitarian Service). Our alumni too have generously given back to the institute. Their endowments have funded scholarships, departmental buildings, parks and other infrastructural improvements.With more than 45000 alumni spanning across the globe, they have been instrumental in strengthening the image of IIT Kanpur. <br />
					We have had many notable alumni who have received national and international recognitions in their respective professional fields.
					Some of the most notable alumni that IIT Kanpur boasts of are :
					<ol>
						<li>N.R. Narayana Murthy - Founder of Infosys</li>
						<li>Pradeep S. Sindhu - Founder, Vice Chairman & CTO - Juniper Networks</li>
						<li>Dr Ashok Jhunjhunwala - Padma Shri & Professor of Electrical Engg at IIT Madras</li>
						<li>Dr Ashoke Sen - FRS & Padma Shri, Famous String Theorist</li>
						<li>Subir Bose - Managing Director - Berger Paints</li>
						<li>Mahesh Behari Lal - Chairman & MD, Hindustan Petroleum Corporation Ltd.</li>
						<li>Satish Kumar Kaura - Chairman - MD Samtel Colour Limited</li>
						<li>Vijay Mahajan - Former Dean of the Indian School of Business</li>
						<li>Duvvuri Subbarao - 22nd Governor of Reserve Bank of India</li>
						<li>Pawan Kumar Goenka - Chief Operating Officer(COO) of Mahindra & Mahindra Ltd.</li>
						<li>Late Professor Rajiv Motwani (Stanford University) - Backed the founders of Google & Paypal</li>
						<li>Manindra Agarwal, Nitin Saxena & Neeraj Kayal - Gave the first deterministic primality-proving algorithm famously known as AKS Primality Test. Authors received the 2006 Godel Prize & the 2006 Fulkerson Prize for this result</li>
						<li>Prof. Arvind - JOHNSON Professor , MIT, USA</li>
						<li>Rajeev Chawla - Secretary of E-governance, Govt. of Karnataka</li>
					</ol>
				</SectionText>
				<br />
				<hr />
				<br />
				<SectionTitle id="faculty">Faculty</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
						IIT Kanpur has more than 413 <a href="https://iitk.ac.in/new/iitk-faculty">faculty members</a> with degrees from renowned
						universities worldwide. The Faculty at IIT Kanpur are involved in cutting-edge research both in the industry and within IIT
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
					<ImageContainer>{ /* eslint-disable-line no-mixed-spaces-and-tabs */}
						<NextImage src="/AboutPageImg/faculty.png" alt="Faculty" layout="fill" objectFit="contain" />
					</ImageContainer>
				</TextWrapper>
				<br />
				<hr />
				<br />
				<SectionTitle id="activities">Students' Life and Activities</SectionTitle>
				<br />
				<br />
				<SectionText>
					Our campus community is a close-knit group that helps students learn, collaborate and flourish. Numerous student clubs and hobby groups allow students to develop skills in science and technology, showcase their talents in cultural, sports, films and media, and entrepreneurial events, and work towards numerous social initiatives. This plethora of activities guarantees that our students develop into all-round and responsible individuals. Additionally, IIT Kanpur is renowned for its inter-college students' festivals namely, Antaragni, Techkriti and Udghosh, which allow students across Indian colleges to display their talents, while constantly pushing our limits in efficient managerial skills and strategies.
				</SectionText>
				<br />
				<CustomAutofitGrid>
					<Card>
						<Title>Science & Technology</Title>
						<NextImage src="/AboutPageImg/Logos/snt.jpeg" width="128" height="128" alt="SnT logo" />
						<Description>
							Our Science and Technology Council connects student activity to the broader technological forum. We Invest in our students right from the first year, guiding them through workshops and events, and developing their technical skills. In this process, we also plan and implement projects that address modern challenges in science and technology.{" "}
						</Description>
					</Card>
					<Card>
						<Title>Games & Sports</Title>
						<NextImage src="/AboutPageImg/Logos/games.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							Our Games and Sports Council has always been in front for the all-round development of our people, by constant persuasion of professional coaches. We strive for nurturing the spirit of sportsmanship amongst our students, for building their self-confidence and to emerge as winners. We have facilities of international standards to create an amazing atmosphere for sports and consequently our students have created a streak of winning the last three Inter HT Sports Meets. The council regularly organises competitive and non-competitive events for promoting sports.{" "}
						</Description>
					</Card>
					<Card>
						<Title>Media and Culture</Title>
						<NextImage src="/AboutPageImg/Logos/mnc.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							Our Media and Cultural Council keeps busy throughout the year, On an annual calendar punctuated by scores of workshops and classes, the Council marks its platforms to pursue various cultural endeavours. The students train themselves to perform before audiences and to understand and appreciate different cultural elements and trends. The Council also promotes competitions with other prime colleges in inter collegiate cultural festivals. {" "}
						</Description>
					</Card>
					<Card>
						<Title>Entrepreneurial Activities</Title>
						<NextImage src="/AboutPageImg/Logos/ecell.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							IIT Kanpur works hard towards imbibing an entrepreneurial drive among its students. The institute along with the students run E-Cell and conduct activities. These activities include technical & non-technical workshops,hackathons, lectures and hangouts with eminent entrepreneurs. On campus incubation centres, regular alumni mentorship and a reliable pipeline for funding make the institute a thriving entrepreneurial center. {" "}
						</Description>
					</Card>
					<Card>
						<Title>Vox Populi</Title>
						<NextImage src="/AboutPageImg/Logos/vox.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							It was envisioned as an advisory board which would give advice and help to different publications and editorials in the institute. Through this forum, editors can channelize their thoughts, bring up more ideas and publicize their work. It tends to serve as a common platform where people share ideas to improve and streamline their publications. {" "}
						</Description>
					</Card>
				</CustomAutofitGrid>
				<br />
				<br />
				<SectionTitle2>Festivals at IITK</SectionTitle2>
				<br />
				<CustomAutofitGrid3>
					<Card>
						<Title>Techkriti</Title>
						<NextImage src="/AboutPageImg/Logos/techkriti.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							IITK has a unique intellectual mix.IIT Kanpur's annual Technical & Entrepreneurial Techkriti, was first organized in 1955. Today, it is one of the Largest of its kind in Asia, attracting competitors from all corners of India and from various places around the world. Apart from the cut-throat competition of exotic softwares, erudite electronic gizmos and robust robots,we have had guest lectures and talks that include names such as Marshall Strabala, Jeff Lieberman, Dr. Richard Stallman, Dr. APJ Abdul Kalam Alvin E Roth' and Wing Commander Rakesh Sharma among others. {" "}
						</Description>
					</Card>
					<Card>
						<Title>Antaragni</Title>
						<NextImage src="/AboutPageImg/Logos/antaragni.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							"Unleash the Fire Within". Antaragni was born in 1966 as the Cult fest (a generic name for the first and only event of its kind then). The festival is in its 54th edition and has became a permanent fixture in the cultural calendars af all the premier colleges of India. Antaragni's multihued competitions are contested by the leading teams Of these colleges. Our shows cover the traditional arts with the modern reimaginatians, the Indian roots with the foreign influences, and the glamorous lifestyle with the socially relevant themes. The issues we raise resonate in the panel discussions in this four-day long festival. {" "}
						</Description>
					</Card>
					<Card>
						<Title>Udghosh</Title>
						<NextImage src="/AboutPageImg/Logos/udghosh.jpeg" width="128" height="128" alt="GnS logo" />
						<Description>
							This is the annual sports meet of IIT Kanpur. It is an exhibition of sporting fervour, and success in the meet has been ratified by the success of many of its winners higher up in the sporting hierarchy. It offers a common platform for the students of numerous educational institutions from all over the country to exhibit and hone their skills in the sport arena. It attracts huge participation under its banner from across the country. The institute has, in all four sprawling well-maintained grounds. This includes two cricket grounds, one for football, and one for Hockey, volley courts, two basketball courts, complete with night-lights and seating facility.{" "}
						</Description>
					</Card>
				</CustomAutofitGrid3>
				<br />
				<br />
				<SectionTitle2>Student Innovation at IIT Kanpur</SectionTitle2>
				<br />
				<SectionText>
					IIT Kanpur has a rich history of unparalleled excellence in the field of research and entrepreneurship. The { /* eslint-disable-line no-mixed-spaces-and-tabs */}entrepreneurial skill of this institute is among the highest in the country, our very own SIDBI Innovation and Incubation Centre has won national awards for its commendable performance. Startups incubated here have also won various awards, and a very high percentage of them have matured. In addition to this, students from this institute have built their own nanosatellite Jugnu, built their own planetarium, and represented India in multiple international conferences like those of ACM and ASME. ITT Kanpur has been made a key resource centre to provide guidance for water sustainability; it has its own airstrip, flight laboratory, and wind-tunnel facility; the National Information Centre for Earthquake Engineering is located here; and opportunities like these give students a chance to excel in their chosen areas of research, how much ever diverse it may be.
				</SectionText>
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
    display:block;
  }
`

const SectionText = styled.div`
  flex: 1;
  font-size: 1.8rem;
  text-align: justify;
  opacity: 0.9;
  margin:20px 30px auto auto;
  ${media("<=tablet")} {
	margin:20px auto auto auto;
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

  & > :first-child{
	  border-style: solid;
	  border-radius:0.6rem;
  }
  ${media("<=tablet")} {
	max-width: 100%;
    display:block;
	height:30rem;
	width:auto;
	margin-top:20px;
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
