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
		name: "Aditi Phogat", 
		phone: "(+91) 70155 60038",
		mail: "aditi20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/aditi-phogat-39481020a/",
		image: "/testimonials/aditi.png",
	},
	{ 
		name: "Agrim Pandey", 
		phone: "(+91) 86045 01747", 
		mail: "agrimp20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/agrim-pandey-37176b210/",
		image: "/testimonials/agrim.png",
	},
	{ 
		name: "Nitya Aggarwal", 
		phone: "(+91) 95018 87478", 
		mail: "nityag20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/nitya-aggarwal-13783520b/",
		image: "/testimonials/nitya.png",
	},
	{ 
		name: "Abhay Gupta", 
		phone: "(+91) 8299018350", 
		mail: "abhaygupta22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/abhay-gupta-a62912162/",
		image: "/testimonials/abhay.jpg",
	},
	{ 
		name: "Ravi Patel", 
		phone: "(+91) 83819 55859", 
		mail: "ravip20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/ravi-patel-608178207/",
		image: "/testimonials/ravi.png",
	},
	{ 
		name: "Rishi Malhotra", 
		phone: "(+91) 80768 83009", 
		mail: "rishim20@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/rishi-malhotra-1232871b9/",
		image: "/testimonials/rishi.png",
	},
	{ 
		name: "Subhajit Panday", 
		phone: "(+91) 7098068804", 
		mail: "subhajitp22@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/subhajit-panday-9a59a1145/",
		image: "/testimonials/shubhajit.png",
	},
]
const APC = [
	{ name: "Abhishek Punia", phone: "(+91) 8059770008", mail: "apunia21@iitk.ac.in" },
	{ name: "Ananya Agrawal", phone: "(+91) 7302673032", mail: "ananyaa21@iitk.ac.in" },
	{ name: "Aryan Agarwal", phone: "(+91) 7357842261", mail: "aryana21@iitk.ac.in" },
	{ name: "Avi Gupta", phone: "(+91) 8382851306", mail: "avig21@iitk.ac.in" },
	{ name: "B P Hitesh", phone: "(+91) 9360119151", mail: "bphitesh21@iitk.ac.in" },
	{ name: "Chitwan", phone: "(+91) 9306150072", mail: "chitwan21@iitk.ac.in" },
	{ name: "Deeksha Rawat", phone: "(+91) 7455955643", mail: "deekshar21@iitk.ac.in" },
	{ name: "Gautam Raghuvanshi", phone: "(+91) 8009861147", mail: "gautamr21@iitk.ac.in" },
	{ name: "Jatin Rastogi", phone: "(+91) 8570940447", mail: "jatinr21@iitk.ac.in" },
	{ name: "Karamveer Singh", phone: "(+91) 8791180652", mail: "karamveers21@iitk.ac.in" },
	{ name: "Kriti", phone: "(+91) 7087384058", mail: "kriti21@iitk.ac.in" },
	{ name: "Mohak Singh Rana", phone: "(+91) 7999884586", mail: "mohaksr21@iitk.ac.in" },
	{ name: "Mohd Siraj", phone: "(+91) 6005450524", mail: "siraj21@iitk.ac.in" },
	{ name: "Nishant", phone: "(+91) 7248692807", mail: "nishantp21@iitk.ac.in" },
	{ name: "Raman Malani", phone: "(+91) 9420437795", mail: "ramanm21@iitk.ac.in" },
	{ name: "S. Ashwin", phone: "(+91) 7550071103", mail: "ashwins21@iitk.ac.in" },
	{ name: "Shashank S", phone: "(+91) 7676606660", mail: "shashank21@iitk.ac.in" },
	{ name: "Shashank Singh", phone: "(+91) 9001432031", mail: "sshashank21@iitk.ac.in" },
	{ name: "Shekhar Sharma", phone: "(+91) 7404325956", mail: "shekhars21@iitk.ac.in" },
	{ name: "Shivani", phone: "(+91) 6392179243", mail: "shivani21@iitk.ac.in" },
	{ name: "Siddhant Singhai", phone: "(+91) 9685678711", mail: "ssinghai21@iitk.ac.in" },
	{ name: "Tavishi", phone: "(+91) 9997846712", mail: "tavishis21@iitk.ac.in" },
]
const DPC=[
	{name:"Aishwarya P S",department:"Aerospace Engineering",email:"aishwarya22@iitk.ac.in",phone:"(+91) 8217855489"},
	{name:"Vishal Shah ",department:"Aerospace Engineering",email:"vishalshah22@iitk.ac.in",phone:"(+91) 9737727805"},
	{name:"Gouravmoy Boruah ",department:"Cognitive Science",email:"gouravmoy22@iitk.ac.in",phone:"(+91) 8473889868"},
	{name:"Aditya Choumal ",department:"Chemical Engineering",email:"adityaac22@iitk.ac.in ",phone:"(+91) 7016302404"},
	{name:"Sagnik Saha",department:"Chemical Engineering",email:"sagniksaha22@iitk.ac.in",phone:"(+91) 8620868016"},
	{name:"Hemant Singh Kumaiya",department:"Chemical Engineering",email:"hemantsk22@iitk.ac.in",phone:"(+91) 9760562747"},
	{name:"Mansi Pradip Koshti",department:"Civil Engineering",email:"mansipk22@iitk.ac.in ",phone:"(+91) 9834848951"},
	{name:"Ayush Anand ",department:"Civil Engineering",email:"anand22@iitk.ac.in",phone:"(+91) 7042488245"},
	{name:"Amit Tripathi",department:"Civil Engineering",email:"amitt22@iitk.ac.in ",phone:"(+91) 9993114981"},
	{name:"Sandeep Vissa",department:"Computer Science and Engineering",email:"vsssandeep22@iitk.ac.in ",phone:"(+91) 7904311487"},
	{name:"Shivam Tripathi",department:"Computer Science and Engineering",email:"shivamtr21@iitk.ac.in ",phone:"(+91) 9451400223"},
	{name:"Harsh Jain",department:"Department of Design",email:"harshjain22@iitk.ac.in ",phone:"(+91) 9826598153"},
	{name:"Sanjukta Sen",department:"Department of Design",email:"sanjukta22@iitk.ac.in ",phone:"(+91) 8826198970"},
	{name:"Kinshuk Siyol ",department:"Economics",email:"kinshuks20@iitk.ac.in",phone:"(+91) 9145850807"},
	{name:"Kunal Aggarwal ",department:"Electrical Engineering",email:"kunala@iitk.ac.in",phone:"(+91) 9478300927"},
	{name:"Puneet Shrivastava ",department:"Electrical Engineering",email:"puneets22@iitk.ac.in",phone:"(+91) 8982015929"},
	{name:"Nikhil Dubey",department:"Industrial and Management Engineering",email:"nikhild22@iitk.ac.in",phone:"(+91) 8076452971"},
	{name:"Abhishek Kumar Singh",department:"Industrial and Management Engineering",email:"abhiks22@iitk.ac.in",phone:"(+91) 8638040742"},
	{name:"Shankar Pal ",department:"Industrial and Management Engineering",email:"shankarpal22@iitk.ac.in",phone:"(+91) 9588376074"},
	{name:"Fahad Farid",department:"Mechanical Engineering",email:"fahadf22@iitk.ac.in",phone:"(+91) 8840655972"},
	{name:"Prasad Satish Chavan",department:"Mechanical Engineering",email:"pschavan22@iitk.ac.in",phone:"(+91) 9594373588"},
	{name:"Suhail Sheikh ",department:"Mechanical Engineering",email:"suhails21@iitk.ac.in",phone:"(+91) 9131482835"},
	{name:"Akshada Raykar",department:"Materials Science and Engineering",email:"akshadam22@iitk.ac.in",phone:"(+91) 7016638024"},
	{name:"Pratap Sharma",department:"Materials Science and Engineering",email:"prataps22@iitk.ac.in",phone:"(+91) 8389818681"},
	{name:"Kaushik Roy",department:"Materials Science Programme",email:"kaushikroy22@iitk.ac.in",phone:"(+91) 8240973521"},
	{name:"Aryaman Singhal",department:" Mathematics",email:"aryamans20@iitk.ac.in",phone:"(+91) 9997229000"},
	{name:"Kuldeep",department:"Physics",email:"kuldeep22@iitk.ac.in",phone:"(+91) 6377400403"},
	{name:"Suchismita Bose",department:"Photonics Science and Engineering",email:"sbose21@iitk.ac.in",phone:"(+91) 8637054496"},
	{name:"Aman kundu",department:"Sustainable Energy Engineering",email:"amankundu22@iitk.ac.in",phone:"(+91) 9253222212"},
	{name:"Sparsh Rai",department:"Sustainable Energy Engineering",email:"Sparshrai22@iitk.ac.in",phone:"(+91) 9148550609"},
	{name:"Paulomi Das",department:"Statistics ",email:"paulomid22@iitk.ac.in",phone:"(+91) 9073548873"},
	{name:"Ringan Majumdar",department:"Statistics ",email:"ringanm22@iitk.ac.in",phone:"(+91) 8584009149"},
	{name:"Debjani Das",department:"Biological Sciences & Bioengineering",email:"debjanidas22@iitk.ac.in",phone:"(+91) 9470979009"},
	{name:"Rudra Abhishek",department:"Biological Sciences & Bioengineering",email:"rabhishek22@iitk.ac.in",phone:"(+91) 9348444874"},
	{name:"Dheerajkumar Yadav",department:"Chemistry",email:"dlyadav22@iitk.ac.in",phone:"(+91) 8652867410"},
	{name:"Aman Singh",department:"Chemistry",email:"singhaman20@iitk.ac.in",phone:"(+91) 6307440053"},
	{name:"Vinaj Joshi",department:"Earth Sciences",email:"vinayjoshi22@iitk.ac.in",phone:"(+91) 8057632768"},
	{name:"Ankit Yadav",department:"Earth Sciences",email:"ankity22@iitk.ac.in",phone:"(+91) 9616019284"},
]

const WEBHEAD = [
	{
		name: "Krishnansh Agarwal",
		position: "Web Head",
		mail: "krishnansh21@iitk.ac.in",
		phone: "(+91) 83170 84914",
		linkedin: "https://www.linkedin.com/in/krishnansh-agarwal/"
	},
	{
		name: "Utkarsh Mishra",
		position: "Web Head",
		mail: "utkarshm21@iitk.ac.in",
		phone: "(+91) 93992 15049",
		linkedin: "https://www.linkedin.com/in/utkarsh-mishra-086251228"
	},
]

const WEBEXEC = [
	{
		name: "Ashish Newar",
		position: "Web Executive",
		mail: "nashish22@iitk.ac.in",
		phone: "(+91) 93948 57874"
	},
	{
		name: "Burhanuddin Merchant",
		position: "Web Executive",
		mail: "bmerchant22@iitk.ac.in",
		phone: "(+91) 88159 92866"
	},
	{
		name: "Sagar Arora",
		position: "Web Executive",
		mail: "sagara22@iitk.ac.in",
		phone: "(+91) 63964 36922"
	},
	{
		name: "Yash Chauhan",
		position: "Web Executive",
		mail: "yashc22@iitk.ac.in",
		phone: "(+91) 98370 90171"
	},
]

const PREVTEAM = [
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
				<SectionTitle>Department Placement Coordinator</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{DPC.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.department}</Description>
									<Description><Link href={"mailto:" + member.email}>{member.email}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
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
