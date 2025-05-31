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
		name: "Anushka Meena",
		phone: "(+91) 70148 82945",
		mail: "anushkam22@iitk.ac.in",
		linkedin:
        "https://www.linkedin.com/in/anushka-m-41a421277/",
		image: "/testimonials/anushka.jpg",
	},
	{
		name: "Manavjeet Singh Bhilwara",
		phone: "(+91) 83830 34574",
		mail: "manavjeetw22@iitk.ac.in",
		linkedin:
        "https://www.linkedin.com/in/manavjeet-singh-a60010133",
		image: "/testimonials/manavjeet.jpg",
	},
	{
		name: "Samyak Jain",
		phone: "(+91) 96675 72400",
		mail: "samyakj22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/samyak-jain-23173b229/",
		image: "/testimonials/samyak.jpg",
	},
	{
		name: "Satvik Pratap Singh",
		phone: "(+91) 87872 91383",
		mail: "satvikp22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/satvik-pratap-singh-5b68a3252/",
		image: "/testimonials/satvik.jpg",
	},
	{
		name: "Atharv Moghe",
		phone: "(+91) 62321 33073",
		mail: "atharvm22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/atharv-moghe-5a5bb0268/",	
		image: "/testimonials/atharv.jpg",
	},
	{
		name: "Ashish Rajeev Nayak",
		phone: "(+91) 84318 26853",
		mail: "ashishr24@iitk.ac.in",
		linkedin: "www.linkedin.com/in/ashish-rajeev-nayak",
		image: "/testimonials/ashish.jpg",
	},
	{
		name: "Utkarsh Mishra",
		phone: "(+91) 94520 19528",
		mail: "utkarshm24@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/umishra05/",
		image: "/testimonials/utkarsh.jpg",
	},
]
const SPC = [
	{
		name: "Shrasti Sahu",
		phone: "(+91) 93017 13749",
		mail: "shrastis22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/shrasti-sahu-2a441a12b/",
		image: "/testimonials/shrasti.jpg",
	},
]
const APC = [
	{
		"name": "Aaditya Rathi",
		"phone": "(+91) 81719 35672",
		"mail": "arathi23@iitk.ac.in"
	},
	{
		"name": "Aryan Deo",
		"phone": "(+91) 98108 56904",
		"mail": "aryandeo23@iitk.ac.in"
	},
	{
		"name": "Chitransh Gangwar",
		"phone": "(+91) 73106 25844",
		"mail": "chitranshg23@iitk.ac.in"
	},
	{
		"name": "Devesh Choudhury",
		"phone": "(+91) 80186 05330",
		"mail": "deveshc23@iitk.ac.in"
	},
	{
		"name": "Keerthi Erpina",
		"phone": "(+91) 81799 57914",
		"mail": "skeerthi23@iitk.ac.in"
	},
	{
		"name": "Harsh Gour",
		"phone": "(+91) 89822 04383",
		"mail": "harshgour23@iitk.ac.in"
	},
	{
		"name": "Harsha Sharma",
		"phone": "(+91) 77177 25885",
		"mail": "harshas23@iitk.ac.in"
	},
	{
		"name": "Khushi Khandelwal",
		"phone": "(+91) 63789 45373",
		"mail": "khushik23@iitk.ac.in"
	},
	{
		"name": "Krish Agarwal",
		"phone": "(+91) 87911 42450",
		"mail": "krisha23@iitk.ac.in"
	},
	{
		"name": "More Kapil Prashant",
		"phone": "(+91) 77680 07680",
		"mail": "mkapil23@iitk.ac.in"
	},
	{
		"name": "Mukund Singhal",
		"phone": "(+91) 63950 10497",
		"mail": "mukunds23@iitk.ac.in"
	},
	{
		"name": "Nikhil",
		"phone": "(+91) 88528 56450",
		"mail": "nikhil23@iitk.ac.in"
	},
	{
		"name": "Piyush Singal",
		"phone": "(+91) 70822 98297",
		"mail": "psingal23@iitk.ac.in"
	},
	{
		"name": "Priyanshi Agarwal",
		"phone": "(+91) 99297 75661",
		"mail": "priyanshi23@iitk.ac.in"
	},
	{
		"name": "Priyanshi Arya",
		"phone": "(+91) 83078 42321",
		"mail": "priyanshia23@iitk.ac.in"
	},
	{
		"name": "Ronav Puri",
		"phone": "(+91) 90547 44485",
		"mail": "ronavgp23@iitk.ac.in"
	},
	{
		"name": "Soumyadip Shyam",
		"phone": "(+91) 89007 61680",
		"mail": "soumadips23@iitk.ac.in"
	},
	{
		"name": "Srujan Bhirud",
		"phone": "(+91) 79917 94512",
		"mail": "srujansb23@iitk.ac.in"
	},
	{
		"name": "Suyash Kapoor",
		"phone": "(+91) 82331 11222",
		"mail": "suyashk23@iitk.ac.in"
	},
	{
		"name": "Vaibhav Itauriya",
		"phone": "(+91) 91251 56329",
		"mail": "vaibhav23@iitk.ac.in"
	},
	{
		"name": "Vatsal Kumar",
		"phone": "(+91) 99735 19220",
		"mail": "vastalk23@iitk.ac.in"
	},
	{
		"name": "Vatsal Mittal",
		"phone": "(+91) 79876 48101",
		"mail": "vastsalm23@iitk.ac.in"
	}
]

const DPC = [
	{ name: "Devang Kishor Saindankar", department: "Aerospace Engineering", email: "devangks23@iitk.ac.in", phone: "(+91) 8208547899" },
	{ name: "Eswar Sai Viswajit Manchalla", department: "Aerospace Engineering", email: "eswarsai23@iitk.ac.in", phone: "(+91) 8919433265" },
	{ name: "M S Bhavani Prasad", department: "Aerospace Engineering", email: "msprasad23@iitk.ac.in", phone: "(+91) 7899320685" },
	{
		name: "Eshaan D Chaudhary",
		department: "Biological Science and Bioengineering",
		email: "eshaandc23@iitk.ac.in",
		phone: "(+91) 9664647318",
	},
	{ name: "Sovan Sahoo", department: "Cognitive Science", email: "sovansahoo23@iitk.ac.in", phone: "(+91) 8455863951" },
	{ name: "Bhumesh Panchal", department: "Chemical Engineering", email: "bhumeshgp23@iitk.ac.in", phone: "(+91) 7359318299" },
	{ name: "Dheeraj Kumar Matania", department: "Chemical Engineering", email: "dheerajkm23@iitk.ac.in", phone: "(+91) 9587222198" },
	{ name: "Ashok Kumar das", department: "Chemistry", email: "ashokkd23@iitk.ac.in", phone: "(+91) 6370730761" },
	{ name: "Anand Sharma", department: "Civil Engineering", email: "anands23@iitk.ac.in", phone: "(+91) 8949588398" },
	{ name: "Pramod Balasaheb Gandugade", department: "Civil Engineering", email: "pramodbg23@iitk.ac.in", phone: "(+91) 8421543404" },
	{ name: "Satyam Agnihotri", department: "Civil Engineering", email: "satyama23@iitk.ac.in", phone: "(+91) 8109610675" },
	{ name: "Prashant Kumar", department: "Computer Science and Engineering", email: "prashantkr23@iitk.ac.in", phone: "(+91) 8416970886" },
	{ name: "Shivam Mishra", department: "Computer Science and Engineering", email: "shivammis23@iitk.ac.in", phone: "(+91) 8889700550" },
	{ name: "Milind Karsoliya", department: "Department of Design", email: "kmilind23@iitk.ac.in", phone: "(+91) 8826946176" },
	{ name: "Vishwaraj Srivastava", department: "Department of Design", email: "vishwaraj22@iitk.ac.in", phone: "(+91) 8528051978" },
	{ name: "Manan Arora", department: "Economics", email: "mananarora23@iitk.ac.in", phone: "(+91) 9319694177" },
	{ name: "Chandrima Upadhyay", department: "Electrical Engineering", email: "chandrima22@iitk.ac.in", phone: "(+91) 8240870059" },
	{ name: "Gautam Jyotishi", department: "Electrical Engineering", email: "gautamj23@iitk.ac.in", phone: "(+91) 8236877655" },
	{ name: "Shivesh Mishra", department: "Electrical Engineering", email: "shiveshm23@iitk.ac.in", phone: "(+91) 7007458407" },
	{ name: "Km Preeti", department: "Earth Sciences", email: "kpreeti23@iitk.ac.in", phone: "(+91) 6307910722" },
	{ name: "Bharat Sharma", department: "Earth Sciences", email: "sbharat23@iitk.ac.in", phone: "(+91) 7060048211" },
	{ name: "Abhinav Pratap Singh", department: "Management Sciences", email: "abhinavp23@iitk.ac.in", phone: "(+91) 8787297312" },
	{ name: "Milind Krishnan", department: "Management Sciences", email: "milindk23@iitk.ac.in", phone: "(+91) 9238763979" },
	{ name: "Dhruvil Panchigar", department: "Mechanical Engineering", email: "dhruvil23@iitk.ac", phone: "(+91) 8511356107" },
	{
		name: "Dontireddy Hari Hara Nandana Reddy",
		department: "Mechanical Engineering",
		email: "hhreddy23@iitk.ac.in",
		phone: "(+91) 8008912489",
	},
	{
		name: "Prajapati Pradyum Girish Chandra",
		department: "Mechanical Engineering",
		email: "pradyumgir23@iitk.ac.in",
		phone: "(+91) 9974822168",
	},
	{ name: "Anmol Singh", department: "Materials Science and Engineering", email: "anmolsingh23@iitk.ac.in", phone: "(+91) 9654412614" },
	{ name: "Lakshmi Dinesh", department: "Materials Science and Engineering", email: "lakshmid23@iitk.ac.in", phone: "(+91) 8547413457" },
	{ name: "Sayan Hazra", department: "Materials Science Programme", email: "sayanhazra23@iitk.ac.in", phone: "(+91) 6296700638" },
	{ name: "Abhinav Mishra", department: "Mathematics", email: "abhinavm23@iitk.ac.in", phone: "(+91) 8948869374" },
	{ name: "Shivang Pandey", department: "Physics", email: "shivangp20@iitk.ac", phone: "(+91) 9532585554" },
	{ name: "Nairit Banerjee", department: "Photonics Science and Engineering", email: "nairitb23@iitk.ac.in", phone: "(+91) 7003492328" },
	{ name: "Shantaprasad Kamat", department: "Statistics", email: "sdkamat23@iitk.ac.in", phone: "(+91) 9822635095" },
	{ name: "Souhardya Mitra", department: "Statistics", email: "smitra23@iitk.ac.in", phone: "(+91) 8768677448" },
	{ name: "Lakshika", department: "Statistics and Data Science", email: "lakshika21@iitk.ac.in", phone: "(+91) 9056211116" },
	{ name: "Suyash Tripati", department: "Sustainable Energy Engineering", email: "suyasht23@iitk.ac.in", phone: "(+91) 9461742114" },
	{ name: "Vaibhav Tripati", department: "Sustainable Energy Engineering", email: "vaibhavt23@iitk.ac.in", phone: "(+91) 7565980166" },
]

const WEBHEAD = [
	{
		name: "Abhimanyu Solanki",
		position: "Web Head",
		mail: "abhimanyus23@iitk.ac.in",
		phone: "(+91) 82181 96261",
		linkedin: "https://www.linkedin.com/in/abhimanyu-solanki-269742233/",
	},
	{
		name: "Akshat",
		position: "Web Head",
		mail: "akshat23@iitk.ac.in",
		phone: "(+91) 93897 33410",
		linkedin: "https://www.linkedin.com/in/23akshat/",
	},
]

const WEBEXEC = [
	{
		name: "Muragesh Nyamagoud",
		position: "Web Executive",
		mail: "muragesh24@iitk.ac.in",
		phone: "(+91) 93534 66456",
	},
	{
		name: "Shivang dixit",
		position: "Web Executive",
		mail: "shivangd24@iitk.ac.in",
		phone: "(+91) 63784 97030",
	},
	{
		name: "Ujjwal Prakash",
		position: "Web Executive",
		mail: "ujjwal24@iitk.ac.in",
		phone: "(+91) 77639 80774",
	},
	{
		name: "Vineesh Dubey",
		position: "Web Executive",
		mail: "vineeshd24@iitk.ac.in",
		phone: "(+91) 63943 27615",
	},
]

const PREVTEAM = [
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
					</CustomAutofitGrid4>
				</Container>
				<SubSectionTitle>Strategy And Planning</SubSectionTitle>
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
				</Container>
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
										<Link href={"tel:" + member.phone}>{member.phone}</Link>
									</Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
				</Container>
				<SectionTitle>Department Placement Coordinators</SectionTitle>
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
