import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import LinkedinIcon from "components/LinkedinIcon"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import SubSectionTitle from "components/SubSectionTitle"
import { media } from "utils/media"

const TeamMembers = [
	{
		name: "Piyush Singal",
		phone: "(+91) 70822 98297",
		mail: "psingal23@iitk.ac.in",
		linkedin: "https://linkedin.com/in/piyush-singal-b9a6b6233",
		image: "/testimonials/Piyush.png",
	},
	{
		name: "Devesh Choudhury",
		phone: "(+91) 80186 05330",
		mail: "deveshc23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/devesh-choudhury-769572280/",
		image: "/testimonials/devesh.png",
	},
	{
		name: "Soumyadip Shyam",
		phone: "(+91) 89007 61680",
		mail: "soumadips23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/soumyadipshyam/",
		image: "/testimonials/Soumyadip.png",
	},
	{
		name: "Vaibhav Itauriya",
		phone: "(+91) 91251 56329",
		mail: "vaibhav23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/vaibhav-itauriya/",
		image: "/testimonials/Vaibhav.png",
	},
	{
		name: "Harsh Gour",
		phone: "(+91) 89822 04383",
		mail: "harshgour23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/harsh-gour-bab4542a3/",
		image: "/testimonials/Harsh.png",
	},
	{
		name: "Kalva Mahendhar Yadav",
		phone: "(+91) 63030 58242",
		mail: "mahendharyk25@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/mahendhar-yadav-kalva-46a6881b8",
		image: "/testimonials/Mahendhar.png",
	},
	{
		name: "Shubham Kumar Mishra",
		phone: "(+91) 79839 35040",
		mail: "shubhamkm25@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/shubham-kumar-mishra-601b82170/",
		image: "/testimonials/Shubham.png",
	},
	{
		name: "Bhairavi Shivajirao Salunke",
		phone: "(+91) 77199 90900",
		mail: "bhairaviss25@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/bhairavi-salunke-b7aa5037a",
		image: "/testimonials/Bhairavi.png",
	},
];
// const SPC = [

// ]
const APC = [
	{ "roll": "240003", "name": "Aadi Jain", "mail": "aadijain24@iitk.ac.in", "program": "BT", "branch": "MSE" },
	{ "roll": "240055", "name": "Aditya Durgapal", "mail": "adityan24@iitk.ac.in", "program": "BT", "branch": "BSBE" },
	{ "roll": "240078", "name": "Akash Kumar", "mail": "akashr24@iitk.ac.in", "program": "BT", "branch": "BSBE" },
	{ "roll": "240181", "name": "Arjun Singla", "mail": "arjuns24@iitk.ac.in", "program": "BT", "branch": "ME" },
	{ "roll": "240288", "name": "Buddha Bhusan Barua", "mail": "buddhab24@iitk.ac.in", "program": "BS", "branch": "ECO" },
	{ "roll": "240313", "name": "D Sahasra", "mail": "dsahasra24@iitk.ac.in", "program": "BT", "branch": "EE" },
	{ "roll": "240445", "name": "Haryashva Gupta", "mail": "haryashvag24@iitk.ac.in", "program": "BT", "branch": "CHE" },
	{ "roll": "240519", "name": "Karan Chauhan", "mail": "karanc24@iitk.ac.in", "program": "BT", "branch": "CHE" },
	{ "roll": "240532", "name": "Kaushik Kumar", "mail": "kaushik24@iitk.ac.in", "program": "BT", "branch": "ME" },
	{ "roll": "240544", "name": "Khushi Sharma", "mail": "khushis24@iitk.ac.in", "program": "BS", "branch": "ES" },
	{ "roll": "240560", "name": "Krish Mesariya", "mail": "kmesariya24@iitk.ac.in", "program": "BT", "branch": "CSE" },
	{ "roll": "240592", "name": "Laukik Krishna Joshi", "mail": "krishnaj24@iitk.ac.in", "program": "BS", "branch": "MTH" },
	{ "roll": "240678", "name": "Naivedya Jain", "mail": "naivedyaj24@iitk.ac.in", "program": "BT", "branch": "ME" },
	{ "roll": "240736", "name": "Parth Rathi", "mail": "parthr24@iitk.ac.in", "program": "BT", "branch": "EE" },
	{ "roll": "240809", "name": "Priyanshu Pandey", "mail": "priyanshup24@iitk.ac.in", "program": "BT", "branch": "BSBE" },
	{ "roll": "240861", "name": "Ria Agrawal", "mail": "riaa24@iitk.ac.in", "program": "BT", "branch": "AE" },
	{ "roll": "240926", "name": "Sanchit Singla", "mail": "sanchit24@iitk.ac.in", "program": "BT", "branch": "CE" },
	{ "roll": "240960", "name": "Shantanu Chhonkar", "mail": "shantanu24@iitk.ac.in", "program": "BT", "branch": "ME" },
	{ "roll": "241060", "name": "Sumit Yadav", "mail": "sumity24@iitk.ac.in", "program": "BS", "branch": "ECO" },
	{ "roll": "241092", "name": "Tanvi Aggarwal", "mail": "tanvi24@iitk.ac.in", "program": "BT", "branch": "ME" },
	{ "roll": "241097", "name": "Tejaswinee Rathore", "mail": "tejaswinee24@iitk.ac.in", "program": "BT", "branch": "EE" },
	{ "roll": "241205", "name": "Yash Vardhan Pratihast", "mail": "yashp24@iitk.ac.in", "program": "BT", "branch": "EE" }
]

// const DPC =[

// ]
// const WEBHEAD = [

// ]

// const WEBEXEC = [

// ]

const PREVTEAM = [
	"2025-26",
	"2024-25",
	"2023-24",
	"2022-23",
	"2021-22",
	"2020-21",
	"2019-20",
	"2018-19",
	"2017-18",
	"2016-17",
	"2015-16",
	"2014-15",
	"2013-14",
]

export interface StudentTeamProps {
  notNeedTitleAtStudentTeam?: boolean;
}

export default function StudentTeam({ notNeedTitleAtStudentTeam }: StudentTeamProps) {
	return (
		<Page
			title="IITK Placement Coordinators"
			description="Feel free to reach out to us at spo@iitk.ac.in"
			keywords="SPO Team IITK, Placement Coordinators IITK, Web Team IITK, Old Team SPO IITK"
			notNeedTitle={notNeedTitleAtStudentTeam}
		>
			<DarkerBackgroundContainer>
				<SectionTitle>Overall Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
						{TeamMembers.map((member, i) => {
							return (
								<div key={member.name} style={{ width: "29em" }}>
									<Card>
										{member.image && <NextImage src={member.image} width={128} height={156} alt={member.name}  />}
										<Title>{member.name}</Title>
										<Description>
											<Link href={"mailto:" + member.mail}>{member.mail}</Link>
										</Description>
										<Description>
											<Link href={"tel:" + member.phone}>{member.phone}</Link>
										</Description>
										<small>
											<a href={member.linkedin} target="_blank" rel="noreferrer">
												<LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} />
											</a>
										</small>
									</Card>
								</div>
							)
						})}
					</CustomAutofitGrid4>
					<br/>
				</Container>
				{/* <SubSectionTitle>Strategy And Planning</SubSectionTitle>
				<Container style={{}}>
					<CustomAutofitGrid style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{SPC.map((member, i) => {
							return (
								<div key={member.name} style={{ width: "29em" }}>
									<Card style={{background:"rgb(252,252,252)"}}>
										{member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
										<Title>{member.name}</Title>
										<Description>
											<Link href={"mailto:" + member.mail}>{member.mail}</Link>
										</Description>
										<Description>
											<Link href={"tel:" + member.phone}>{member.phone}</Link>
										</Description>
										<small>
											<a href={member.linkedin} target="_blank" rel="noreferrer">
												<LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} />
											</a>
										</small>
									</Card>
								</div>
							)
						})}
					</CustomAutofitGrid>
					<br />
					
				</Container> */}
				<br/>
				<SectionTitle>Assistant Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid3 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{APC.map((member) => (
							<div key={member.name} style={{ width: "35em" }}>
								<Card>
									<Title>{member.name}</Title>
									<Description>
										<Link href={"mailto:" + member.mail}>{member.mail}</Link>
									</Description>
									<Description>
										{/* <Link href={"tel:" + member.phone}>{member.phone}</Link> */}
									</Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
				</Container>
				{/* <SectionTitle>Department Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{DPC.map((member) => (
							<div key={member.name} style={{ width: "35em" }}>
								<Card style={{ height: "11em" }}>
									<Title>{member.name}</Title>
									<Description>{member.department}</Description>
									<Description>
										<Link href={"mailto:" + member.email}>{member.email}</Link>
									</Description>
									<Description>
										<Link href={"tel:" + member.phone}>{member.phone}</Link>
									</Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container>
				<SectionTitle>Web Team</SectionTitle>
				<Container>
					<CustomAutofitGrid2>
						{WEBHEAD.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.position}</Description>
									<Description>
										<Link href={"mailto:" + member.mail}>{member.mail}</Link>
									</Description>
									<Description>
										<Link href={"tel:" + member.phone}>{member.phone}</Link>
									</Description>
									{
										<small>
											<a href={member.linkedin} target="_blank" rel="noreferrer">
												<LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} />
											</a>
										</small>
									}
								</Card>
							</div>
						))}
					</CustomAutofitGrid2>
					<br />
					<CustomAutofitGrid4>
						{WEBEXEC.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.position}</Description>
									<Description>
										<Link href={"mailto:" + member.mail}>{member.mail}</Link>
									</Description>
									<Description>
										<Link href={"tel:" + member.phone}>{member.phone}</Link>
									</Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container> */}
				<SectionTitle>Previous Teams</SectionTitle>
				<Container>
					<CustomAutofitGrid>
						{PREVTEAM.map((year) => (
							<Link href={`/student-team/${year}`} key={year}>
								<Card>
									<Title>Team {year}</Title>
								</Card>
							</Link>
						))}
					</CustomAutofitGrid>
				</Container>
			</DarkerBackgroundContainer>
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
  opacity: 0.6;
`

const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
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

const CustomAutofitGrid4 = styled(AutofitGrid)`
  --autofit-grid-item-size: 25rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 20rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 15rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 50%;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:nth-child(n + 5) {
    margin-top: 5rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`
