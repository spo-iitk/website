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
		image: "/testimonials/shubham.png",
	},
	{
		name: "Bhairavi Shivajirao Salunke",
		phone: "(+91) 77199 90900",
		mail: "bhairaviss25@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/bhairavi-salunke-b7aa5037a",
		image: "/testimonials/Bhairavi.png",
	},
]
// const SPC = [

// ]
const APC = [
	{ "roll": "240003", "name": "Aadi Jain", "mail": "aadijain24@iitk.ac.in", "program": "BT", "branch": "MSE", "phone": "8800210197" },
	{ "roll": "240055", "name": "Aditya Durgapal", "mail": "adityan24@iitk.ac.in", "program": "BT", "branch": "BSBE", "phone": "9321643883" },
	{ "roll": "240078", "name": "Akash Kumar", "mail": "akashr24@iitk.ac.in", "program": "BT", "branch": "BSBE", "phone": "8935965544" },
	{ "roll": "240181", "name": "Arjun Singla", "mail": "arjuns24@iitk.ac.in", "program": "BT", "branch": "ME", "phone": "8360755662" },
	{ "roll": "240288", "name": "Buddha Bhusan Barua", "mail": "buddhab24@iitk.ac.in", "program": "BS", "branch": "ECO", "phone": "9229701335" },
	{ "roll": "240313", "name": "D Sahasra", "mail": "dsahasra24@iitk.ac.in", "program": "BT", "branch": "EE", "phone": "9110347533" },
	{ "roll": "240445", "name": "Haryashva Gupta", "mail": "haryashvag24@iitk.ac.in", "program": "BT", "branch": "CHE", "phone": "9452141455" },
	{ "roll": "240519", "name": "Karan Chauhan", "mail": "karanc24@iitk.ac.in", "program": "BT", "branch": "CHE", "phone": "7678217530" },
	{ "roll": "240532", "name": "Kaushik Kumar", "mail": "kaushik24@iitk.ac.in", "program": "BT", "branch": "ME", "phone": "8434108608" },
	{ "roll": "240544", "name": "Khushi Sharma", "mail": "khushis24@iitk.ac.in", "program": "BS", "branch": "ES", "phone": "7667723918" },
	{ "roll": "240560", "name": "Krish Mesariya", "mail": "kmesariya24@iitk.ac.in", "program": "BT", "branch": "CSE", "phone": "9727273756" },
	{ "roll": "240592", "name": "Laukik Krishna Joshi", "mail": "krishnaj24@iitk.ac.in", "program": "BS", "branch": "MTH", "phone": "9610714579" },
	{ "roll": "240678", "name": "Naivedya Jain", "mail": "naivedyaj24@iitk.ac.in", "program": "BT", "branch": "ME", "phone": "7027506075" },
	{ "roll": "240736", "name": "Parth Rathi", "mail": "parthr24@iitk.ac.in", "program": "BT", "branch": "EE", "phone": "8251086260" },
	{ "roll": "240809", "name": "Priyanshu Pandey", "mail": "priyanshup24@iitk.ac.in", "program": "BT", "branch": "BSBE", "phone": "9263888165" },
	{ "roll": "240861", "name": "Ria Agrawal", "mail": "riaa24@iitk.ac.in", "program": "BT", "branch": "AE", "phone": "8290441008" },
	{ "roll": "240926", "name": "Sanchit Singla", "mail": "sanchit24@iitk.ac.in", "program": "BT", "branch": "CE", "phone": "9781357659" },
	{ "roll": "240960", "name": "Shantanu Chhonkar", "mail": "shantanu24@iitk.ac.in", "program": "BT", "branch": "ME", "phone": "9520518594" },
	{ "roll": "241060", "name": "Sumit Yadav", "mail": "sumity24@iitk.ac.in", "program": "BS", "branch": "ECO", "phone": "8882035387" },
	{ "roll": "241092", "name": "Tanvi Aggarwal", "mail": "tanvi24@iitk.ac.in", "program": "BT", "branch": "ME", "phone": "7827098491" },
	{ "roll": "241097", "name": "Tejaswinee Rathore", "mail": "tejaswinee24@iitk.ac.in", "program": "BT", "branch": "EE", "phone": "9425094987" },
	{ "roll": "241205", "name": "Yash Vardhan Pratihast", "mail": "yashp24@iitk.ac.in", "program": "BT", "branch": "EE", "phone": "8917524935" }
]

// const DPC =[

// ]
const WEBHEAD = [
	{
		name: "Muragesh Nyamagoud",
		position: "Web Head",
		mail: "muragesh24@iitk.ac.in",
		phone: "(+91) 93534 66456",
		linkedin: "https://www.linkedin.com/in/muragesh-nyamagoud-459166249/",
	},
	{
		name: "Ujjwal Prakash",
		position: "Web Head",
		mail: "ujjwal24@iitk.ac.in",
		phone: "(+91) 77639 80774",
		linkedin: "https://www.linkedin.com/in/ujjwal-prakash-036873336/",
	},
]

const WEBEXEC = [
	{"name": "Raj Choudhary", "position": "Web Executive", "mail": "rajc25@iitk.ac.in", "phone": "(+91) 9461772855"},
	{ "name": "Vanshika Singh", "position": "Web Executive", "mail": "vanshikas25@iitk.ac.in", "phone": "(+91) 9755103696" },
	{ "name": "Shubh Gupta", "position": "Web Executive", "mail": "Shubhgupta25@iitk.ac.in", "phone": "(+91) 9755745600" },
	{ "name": "Vineet Singh", "position": "Web Executive", "mail": "vineets25@iitk.ac.in", "phone": "(+91) 92594 81955" },
]

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
										{member.image && <NextImage src={member.image} width={128} height={170} alt={member.name}  />}
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
										<Link href={"tel:" + member.phone}>(+91) {member.phone}</Link>
									</Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
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
				</Container> 
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
