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
		"name": "Sanket Gaggar",
		"image": "/testimonials/PastYearTeamImages/20-21/Sanket.jpg",
		"mail": "gsanket[AT]iitk.ac.in",
		"phone": "91-7021414681",
		"linkedin": "http://linkedin.com/in/sanket-gaggar-853865160/"
	},
	{
		"name": "Himanshu Pandey",
		"image": "/testimonials/PastYearTeamImages/20-21/Himanshu.jpg",
		"mail": "hpandey[AT]iitk.ac.in",
		"phone": "91-9123438377",
		"linkedin": "https://www.linkedin.com/in/himanshu-pandey-b25985164/"
	},
	{
		"name": "Raj Gohil",
		"image": "/testimonials/PastYearTeamImages/20-21/Raj.png",
		"mail": "rgohil[AT]iitk.ac.in",
		"phone": "91-9172495348",
		"linkedin": "https://www.linkedin.com/in/rajgohil12/"
	},
	{
		"name": "Rishu Katiyar",
		"image": "/testimonials/PastYearTeamImages/20-21/Rishu.png",
		"mail": "rishu[AT]iitk.ac.in",
		"phone": "91-7355964094",
		"linkedin": "https://www.linkedin.com/in/rishu-katiyar-aa72ab1a2/"
	},
	{
		"name": "Vedanth Venkatakrishnan",
		"image": "/testimonials/PastYearTeamImages/20-21/Vedanth.png",
		"mail": "vedanthv[AT]iitk.ac.in",
		"phone": "91-9198995614",
		"linkedin": "https://www.linkedin.com/in/vedanth-venkatakrishnan-053436149/"
	},
	{
		"name": "Bhavesh Loungani",
		"image": "/testimonials/PastYearTeamImages/20-21/Bhavesh.jpg",
		"mail": "bhaveshl[AT]iitk.ac.in",
		"phone": "91-9079721746",
		"linkedin": "https://www.linkedin.com/in/bhavesh-loungani-9079721746/"
	}
]

const APC = [
	{
		"name": "Akarsh Mittal",
		"mail": "akarshm[AT]iitk.ac.in",
		"phone": "+91 9828383799"
	},
	{
		"name": "Akhilesh Sharma",
		"mail": "akhilsh[AT]iitk.ac.in",
		"phone": "+91 9773873557"
	},
	{
		"name": "Amisha Shahdeo",
		"mail": "ashahdeo[AT]iitk.ac.in",
		"phone": "+91 8809405690"
	},
	{
		"name": "Dhruv Bansal",
		"mail": "dhruvb[AT]iitk.ac.in",
		"phone": "+91 8146614614"
	},
	{
		"name": "Earth Sugandhi",
		"mail": "earth[AT]iitk.ac.in",
		"phone": "+91 9559084255"
	},
	{
		"name": "Harsh Ghadiyali",
		"mail": "harshmg[AT]iitk.ac.in",
		"phone": "+91 8058164984"
	},
	{
		"name": "Harshit Jain",
		"mail": "harshja[AT]iitk.ac.in",
		"phone": "+91 7042567977"
	},
	{
		"name": "Hinisha Bansal",
		"mail": "hinisha[AT]iitk.ac.in",
		"phone": "+91 9460449843"
	},
	{
		"name": "Neha Aggarwal",
		"mail": "nehaag[AT]iitk.ac.in",
		"phone": "+91 8607057039"
	},
	{
		"name": "Ravi Kumar Saini",
		"mail": "ravirks[AT]iitk.ac.in",
		"phone": "+91 6377325652"
	},
	{
		"name": "Ronit Tyagi",
		"mail": "ronit[AT]iitk.ac.in",
		"phone": "+91 9559084165"
	},
	{
		"name": "Shikhar Saroj Verma",
		"mail": "sshikhar[AT]iitk.ac.in",
		"phone": "+91 8948150836"
	},
	{
		"name": "Shreya Chauhan",
		"mail": "shreyac[AT]iitk.ac.in",
		"phone": "+91 8949784034"
	},
	{
		"name": "Shubham Bhagat",
		"mail": "sbhagat[AT]iitk.ac.in",
		"phone": "+91 6387302924"
	},
	{
		"name": "Siddharth Porwal",
		"mail": "sporwal[AT]iitk.ac.in",
		"phone": "+91 6387198153"
	},
	{
		"name": "Utkarsh Verma",
		"mail": "utverma[AT]iitk.ac.in",
		"phone": "+91 6388500292"
	},
	{
		"name": "Yash Porwal",
		"mail": "pyash[AT]iitk.ac.in",
		"phone": "+91 8299657958"
	}
]
const ACD = [
	{
		"name": "Saba Ul Haque",
		"department": "Aerospace Engineering",
		"mail": "saba[AT]iitk.ac.in",
		"phone": "+91 8506837079"
	},
	{
		"name": "Subrat Kumar",
		"department": "Aerospace Engineering",
		"mail": "ksubrat[AT]iitk.ac.in",
		"phone": "+91 8749898294"
	},
	{
		"name": "Shashank Kumar",
		"department": "Aerospace Engineering",
		"mail": "shashku[AT]iitk.ac.in",
		"phone": "+91 9559001246"
	},
	{
		"name": "Yasaswi Nath",
		"department": "Chemical Engineering",
		"mail": "yasaswi[AT]iitk.ac.in",
		"phone": "+91 9348900984"
	},
	{
		"name": "Harshit Verma",
		"department": "Chemical Engineering",
		"mail": "vharshit[AT]iitk.ac.in",
		"phone": "+91 8765658364"
	},
	{
		"name": "Abhishek Agrawal",
		"department": "Chemistry",
		"mail": "abhiagr[AT]iitk.ac.in",
		"phone": "+91 8654875884"
	},
	{
		"name": "Kunal Agrawal",
		"department": "Chemistry",
		"mail": "kunalg[AT]iitk.ac.in",
		"phone": "+91 7737616764"
	},
	{
		"name": "Shivani Srivastava",
		"department": "Civil Engineering",
		"mail": "shivsri[AT]iitk.ac.in",
		"phone": "+91 7987147254"
	},
	{
		"name": "Debjit Paul",
		"department": "Civil Engineering",
		"mail": "pdebjit[AT]iitk.ac.in",
		"phone": "+91 7908217376"
	},
	{
		"name": "Snehil Saluja",
		"department": "Civil Engineering",
		"mail": "snehil[AT]iitk.ac.in",
		"phone": "+91 9169948260"
	},
	{
		"name": "Tushar Shandhilya",
		"department": "Computer Science and Engineering",
		"mail": "stushar[AT]cse.iitk.ac.in",
		"phone": "+91 7017047602"
	},
	{
		"name": "Ritesh Kumar",
		"department": "Computer Science and Engineering",
		"mail": "riteshkr[AT]iitk.ac.in",
		"phone": "+91 9198999487"
	},
	{
		"name": "Soumyajyoti Halder",
		"department": "Design",
		"mail": "sjay[AT]iitk.ac.in",
		"phone": "+91 9096669023"
	},
	{
		"name": "Alina Rodrigues",
		"department": "Design",
		"mail": "alinar[AT]iitk.ac.in",
		"phone": "+91 7012818274"
	},
	{
		"name": "Harshajit Borah",
		"department": "Earth Sciences",
		"mail": "hborah[AT]iitk.ac.in",
		"phone": "+91 8404015261"
	},
	{
		"name": "Surabhi Jain",
		"department": "Electrical Engineering",
		"mail": "jsurabhi[AT]iitk.ac.in",
		"phone": "+91 9619711646"
	},
	{
		"name": "Himanshu Jha",
		"department": "Electrical Engineering",
		"mail": "himanjha[AT]iitk.ac.in",
		"phone": "+91 9818688532"
	},
	{
		"name": "Ashish Ubana",
		"department": "Industrial and Management Engineering",
		"mail": "ubana[AT]iitk.ac.in",
		"phone": "+91 8005885207"
	},
	{
		"name": "Achal Raj Goyal",
		"department": "Industrial and Management Engineering",
		"mail": "achalraj[AT]iitk.ac.in",
		"phone": "+91 7000953266"
	},
	{
		"name": "Prinitha K.S.",
		"department": "Material Science Programme",
		"mail": "prinitha[AT]iitk.ac.in",
		"phone": "+91 8220847417"
	},
	{
		"name": "Azmeera koteshwar Rao",
		"department": "Material Science and Engineering",
		"mail": "kotesha[AT]iitk.ac.in",
		"phone": "+91 8179860875"
	},
	{
		"name": "Kotte Vamshi Krishna",
		"department": "Material Science and Engineering",
		"mail": "vamshi[AT]iitk.ac.in",
		"phone": "+91 9705586767"
	},
	{
		"name": "Vishweshwar Tyagi",
		"department": "Mathematics and Scientific Computing",
		"mail": "tyagi[AT]iitk.ac.in",
		"phone": "+91 8383827614"
	},
	{
		"name": "Aditya Singh",
		"department": "Mechanical Engineering",
		"mail": "adisingh[AT]iitk.ac.in",
		"phone": "+91 7678638709"
	},
	{
		"name": "Ajay Kumar Yadav",
		"department": "Mechanical Engineering",
		"mail": "ajaykr[AT]iitk.ac.in",
		"phone": "+91 9413536011"
	},
	{
		"name": "A Sri Harsha",
		"department": "Mechanical Engineering",
		"mail": "aharsha[AT]iitk.ac.in",
		"phone": "+91 7893730770"
	},
	{
		"name": "Lakshay Thukral",
		"department": "Photonics Science and Engineering",
		"mail": "thukral[AT]iitk.ac.in",
		"phone": "+91 7393988334"
	},
	{
		"name": "Nitika Verma",
		"department": "Statistics",
		"mail": "nitikave[AT]iitk.ac.in",
		"phone": "+91 8447287725"
	},
	{
		"name": "Sahil Saini",
		"department": "Statistics",
		"mail": "sahilss[AT]iitk.ac.in",
		"phone": "+91 9318338806"
	}
]

const WEBHEAD = [
	{
		"name": "Atin Vikram Singh",
		"position": "Web Head",
		"mail": "atinsingh25[AT]gmail.com",
		"phone": "+91 9452179249"
	}
]

const WEBEXEC = [
	{
		"name": "Ketan Chaturvedi",
		"position": "Web Executive",
		"mail": "ketanchaturvedi.24[AT]gmail.com",
		"phone": "+91 6386730160"
	},
	{
		"name": "Shubh Agrawal",
		"position": "Web Executive",
		"mail": "shubh1012agrawal[AT]gmail.com",
		"phone": "+91 7838667354"
	}
]

export default function StudentTeam22() {
	return (
		<Page title="Placement Team 2020-21" >
			<DarkerBackgroundContainer>
				<br />
				<Container>
					<SectionTitle>Overall Placement Coordinators</SectionTitle>
					<br />
					<br />
					<CustomAutofitGrid3>
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
					</CustomAutofitGrid3>
					<br />
				</Container>
				<SectionTitle>Assistant Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{APC.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container>
				<SectionTitle>Department Placement Coordinator</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{ACD.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.department}</Description>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
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
									{/* {<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>} */}
								</Card>
							</div>
						))}
					</CustomAutofitGrid2>
					<br />
					<CustomAutofitGrid2>
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
					</CustomAutofitGrid2>
				</Container>
				<br />
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
