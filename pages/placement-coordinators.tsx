import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import LinkedinIcon from "components/LinkedinIcon"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const TeamMembers = [
	{
		name: "Abhinav D Singh",
		image: "/testimonials/Abhinav.jpg",
		phone: "(+91) 78920 16240",
		mail: "abhids@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/abhinav-d-singh-iitk/"

	},
	{
		name: "Sunay Chhajed",
		image: "/testimonials/Sunay.jpg",
		phone: "(+91) 72258 24183",
		mail: "sunay@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/sunay-chhajed/"
	},
	{
		name: "Gyanendra Kumar",
		image: "/testimonials/Gyanendra.jpg",
		phone: "(+91) 73012 76032",
		mail: "krgyan@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/gyanendra-kumar-iitk/"
	},
	{
		name: "Abhishek Kumar",
		image: "/testimonials/Abhishek.jpg",
		phone: "(+91) 98726 86648",
		mail: "krabhishek20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/abhisjust4u"
	},
	{
		name: "Pragati Singh",
		image: "/testimonials/Pragati.jpg",
		phone: "(+91) 83030 65597",
		mail: "spragati@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/spragati/"
	},
	{
		name: "Vishwaraj Singh",
		image: "/testimonials/Vishwaraj.jpg",
		phone: "(+91) 98775 79129",
		mail: "vrsingh@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/vishwaraj-singh-visraj/"
	},
	{
		name: "Akhila Mudupu",
		image: "/testimonials/Akhila.jpg",
		phone: "(+91) 90149 21208",
		mail: "akhilam21@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/akhila-mudupu-9b3890217"
	},
]
const APC = [
	{ name: "Aditi Phogat", phone: "(+91) 70155 60038", mail: "aditi20@iitk.ac.in" },
	{ name: "Afraz Jamal", phone: "(+91) 82399 97985", mail: "afrazj20@iitk.ac.in" },
	{ name: "Agrim Pandey", phone: "(+91) 86045 01747", mail: "agrimp20@iitk.ac.in" },
	{ name: "Ananya Agrawal", phone: "(+91) 82094 64287", mail: "ananya20@iitk.ac.in" },
	{ name: "Ashutosh Sharma", phone: "(+91) 94254 21164", mail: "ashutoshs20@iitk.ac.in" },
	{ name: "Kashishpreet Kaur", phone: "(+91) 79739 83785", mail: "kkaur20@iitk.ac.in" },
	{ name: "Kavya Jalan", phone: "(+91) 69008 05432", mail: "kavyajalan20@iitk.ac.in" },
	{ name: "Khushbu Kumawat", phone: "(+91) 91662 21076", mail: "khushbuk20@iitk.ac.in" },
	{ name: "Khushi Gautam", phone: "(+91) 63070 88928", mail: "khushig20@iitk.ac.in" },
	{ name: "Nitya Aggarwal", phone: "(+91) 95018 87478", mail: "nityag20@iitk.ac.in" },
	{ name: "Payal Singh", phone: "(+91) 83065 79903", mail: "payalk20@iitk.ac.in" },
	{ name: "Pulkit Dhamija", phone: "(+91) 70820 39486", mail: "pulkitd20@iitk.ac.in" },
	{ name: "Ravi Patel", phone: "(+91) 83819 55859", mail: "ravip20@iitk.ac.in" },
	{ name: "Riktesh Singh", phone: "(+91) 96961 70669", mail: "rikteshs20@iitk.ac.in" },
	{ name: "Rishabh Yadav", phone: "(+91) 88279 92444", mail: "rishabhy20@iitk.ac.in" },
	{ name: "Rishi Malhotra", phone: "(+91) 80768 83009", mail: "rishim20@iitk.ac.in" },
	{ name: "Sathwika", phone: "(+91) 62813 29383", mail: "sathwikach20@iitk.ac.in" },
	{ name: "Shivangi Singh", phone: "(+91) 81758 88052", mail: "shivangis20@iitk.ac.in" },
	{ name: "Suraj Kumawat", phone: "(+91) 70235 88839", mail: "skumawat20@iitk.ac.in" },
	{ name: "Upen Mishra", phone: "(+91) 78519 28910", mail: "upen20@iitk.ac.in" },
	{ name: "Vandana Basrani", phone: "(+91) 88904 06081", mail: "vandanab20@iitk.ac.in" },
]
const DPC = [
	{
		name: "Nishant Raj",
		department: "Aerospace Engineering",
		phone: "(+91) 82951 50352",
		email: "nishantr21@iitk.ac.in"
	},
	{
		name: "Peram Akhil Kumar",
		department: "Aerospace Engineering",
		phone: "(+91) 94906 39831",
		email: "pakhil21@iitk.ac.in"
	},
	{
		name: "Ajay Kumar",
		department: "Civil Engineering",
		phone: "(+91) 85068 01940",
		email: "ajaysk21@iitk.ac.in"
	},
	{
		name: "Diksha Yadav",
		department: "Cognitive Science",
		phone: "(+91) 88009 53879",
		email: "dikshay21@iitk.ac.in"
	},
	{
		name: "Alok Sahu",
		department: "Chemical Engineering",
		phone: "(+91) 94549 82210",
		email: "aloks21@iitk.ac.in"
	},

	{
		name: "Mihirkumar Patel",
		department: "Chemical Engineering",
		phone: "(+91) 99740 70504",
		email: "mmpatel21@iitk.ac.in"
	},

	{
		name: "Siddhartha U",
		department: "Chemical Engineering",
		phone: "(+91) 95850 95117",
		email: "siddhartha21@iitk.ac.in"
	},
	{
		name: "Abhishek Sahu ",
		department: "Computer Science and Engineering",
		phone: "(+91) 70773 40317",
		email: "abhisheks21@iitk.ac.in"
	},
	{
		name: "Abhishek Kumar Saini",
		department: "Computer Science and Engineering",
		phone: "(+91) 87910 70321",
		email: "abhik20@iitk.ac.in"
	},
	{
		name: "Rohit Kakkar",
		department: "Department of Design",
		phone: "(+91) 79850 80996",
		email: "rohitk21@iitk.ac.in"
	},
	{
		name: "Shreyansh Sunil",
		department: "Department of Design",
		phone: "(+91) 94543 60632",
		email: "shreyansh21@iitk.ac.in"
	},
	{
		name: "Shivani Jha ",
		department: "Economics",
		phone: "(+91) 84292 31864",
		email: "shivanij@iitk.ac.in"
	},
	{
		name: "Roshan kumar",
		department: "Electrical Engineering",
		phone: "(+91) 91798 33136",
		email: "kroshan20@iitk.ac.in"
	},
	{
		name: "Reetu Hota",
		department: "Electrical Engineering",
		phone: "(+91) 86372 72561",
		email: "reetuh21@iitk.ac.in"
	},
	{
		name: "Apoorva Dixit",
		department: "Electrical Engineering",
		phone: "(+91) 70548 63359",
		email: "apoorvad20@iitk.ac.in "
	},
	{
		name: "Hammad Zubair ",
		department: "Earth Sciences",
		phone: "(+91) 82669 85229",
		email: "hammadz21@iitk.ac.in"
	},
	{
		name: "Meet Saiya",
		department: "Civil Engineering",
		phone: "(+91) 83840 54004",
		email: "meets21@iitk.ac.in"
	},
	{
		name: "Shivam Saini",
		department: "Industrial and Managemenet Engineering",
		phone: "(+91) 84499 79988",
		email: "shivams21@iitk.ac.in"
	},
	{
		name: "Vikas Gill",
		department: "Industrial and Management Engineering",
		phone: "(+91) 98736 48500",
		email: "vikasgill21@iitk.ac.in"
	},
	{
		name: "Vishnu Mehta",
		department: "Industrial and Management Engineering",
		phone: "(+91) 74269 05975",
		email: "vishnum21@iitk.ac.in"
	},
	{
		name: "Sheshmani Maurya",
		department: "Mathematics",
		phone: "(+91) 87379 38859",
		email: "sheshmani21@iitk.ac.in"
	},
	{
		name: "Sachin Sharma",
		department: "Mechanical Engineering",
		phone: "(+91) 87651 15892",
		email: "sachins21@iitk.ac.in"
	},
	{
		name: "Shubham Sahu",
		department: "Mechanical Engineering",
		phone: "(+91) 73898 08435",
		email: "skumars21@iitk.ac.in"
	},
	{
		name: "Akshay Manjarekar ",
		department: "Mechanical Engineering",
		phone: "(+91) 78758 62677",
		email: "akshaym21@iitk.ac.in"
	},
	{
		name: "Ankit Singh",
		department: "Material Sciences and Engineering",
		phone: "(+91) 91133 40982",
		email: "ankits21@iitk.ac.in"
	},
	{
		name: "Nandni Sinha",
		department: "Material Sciences and Engineering",
		phone: "(+91) 91708 52304",
		email: "snandni@iitk.ac.in"
	},
	{
		name: "Manoj kumar Virigineni",
		department: "Material Sciences and Engineering",
		phone: "(+91) 79955 33979",
		email: "manojkv21@iitk.ac.in"
	},
	{
		name: "Viren S Ram",
		department: "Photonics Science and Engineering",
		phone: "(+91) 82796 86175",
		email: "virenr21@iitk.ac.in"
	},
	{
		name: "Gosu Satish Kumar Reddy",
		department: "Sustainable Energy Engineering",
		phone: "(+91) 79969 98373",
		email: "skreddy21@iitk.ac.in"
	},
	{
		name: "Mohammad Hashim",
		department: "Sustainable Energy Engineering",
		phone: "(+91) 87506 87660",
		email: "mhashim21@iitk.ac.in"
	},
	{
		name: "Shagun Bansal",
		department: "Statistics ",
		phone: "(+91) 98132 93763",
		email: "shagunb21@iitk.ac.in"
	},
	{
		name: "Neha Gupta",
		department: "Statistics ",
		phone: "(+91) 74089 37974",
		email: "nehag21@iitk.ac.in"
	},
]

const WEBHEAD = [
	{
		name: "Harshit Raj",
		position: "Web Head",
		phone: "(+91) 79922 71701",
		mail: "harshitr20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/1-Harshit/"
	},
	{
		name: "Abhishek Shree",
		position: "Web Head",
		phone: "(+91) 99559 60224",
		mail: "shreea20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/abhishekshree/"
	},
]

const WEBEXEC = [
	{
		name: "Aditya Bangar",
		position: "Web Executive",
		mail: "adityavb21@iitk.ac.in",
		phone: "(+91) 77438 08044"
	},
	{
		name: "Krishnansh Agarwal",
		position: "Web Executive",
		mail: "krishnansh21@iitk.ac.in",
		phone: "(+91) 83170 84914"
	},
	{
		name: "Tejas Ahuja",
		position: "Web Executive",
		mail: "tejasahuja21@iitk.ac.in",
		phone: "(+91) 87007 94886"
	},
	{
		name: "Utkarsh Mishra",
		position: "Web Executive",
		mail: "utkarshm21@iitk.ac.in",
		phone: "(+91) 93992 15049"
	},
]

const PREVTEAM = [
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
		<Page title="IITK Placement Coordinators" description="Feel free to reach out to us at spo@iitk.ac.in" keywords="SPO Team IITK, Placement Coordinators IITK, Web Team IITK, Old Team SPO IITK" notNeedTitle={notNeedTitleAtStudentTeam}>
			<DarkerBackgroundContainer>
				<SectionTitle>Overall Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{TeamMembers.map((member, i) => {
							return (
								<div key={member.name}>
									<Card>
										{member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
										<Title>{member.name}</Title>
										<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
										<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
										<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>
									</Card>
								</div>
							)
						}
						)}
					</CustomAutofitGrid4>
					<br />
				</Container>
				<SectionTitle>Assistant Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid3>
						{APC.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
				</Container>
				<SectionTitle>Department Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid3>
						{DPC.map((member)=>(
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.department}</Description>
									<Description><Link href={"mailto:" + member.email}>{member.email}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
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
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
									{<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>}
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
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
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
		</Page >
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

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`
