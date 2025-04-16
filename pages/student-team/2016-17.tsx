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
		"name": "Aditya Agarwal",
		"image": "/testimonials/PastYearTeamImages/16-17/Aditya.jpg",
		"mail": "agaditya[AT]iitk.ac.in",
		"phone": "+91 7668 801 363",
		"linkedin": "https://in.linkedin.com/in/aditya-agarwal-537a14a7"
	},
	{
		"name": "Manish Yadav",
		"image": "/testimonials/PastYearTeamImages/16-17/Manish.jpg",
		"mail": "ymanish[AT]iitk.ac.in",
		"phone": "+91 7755 047 998",
		"linkedin": "https://www.linkedin.com/in/manish-yadav-191370a2"
	},
	{
		"name": "Riya Gupta",
		"image": "/testimonials/PastYearTeamImages/16-17/Riya.jpg",
		"mail": "riyag[AT]iitk.ac.in",
		"phone": "+91 8756 624 468",
		"linkedin": "https://www.linkedin.com/in/riya-gupta-b4ba08a7"
	},
	{
		"name": "Roopal Singh",
		"image": "/testimonials/PastYearTeamImages/16-17/Roopal.jpg",
		"mail": "roopal[AT]iitk.ac.in",
		"phone": "+91 7408 223 870",
		"linkedin": "https://www.linkedin.com/in/roopal-singh-0047b2a2"
	},
	{
		"name": "Ashish Bharti",
		"image": "/testimonials/PastYearTeamImages/16-17/Ashish.jpg",
		"mail": "ashisb[AT]iitk.ac.in",
		"phone": "+91 9873 594 459",
		"linkedin": "https://www.linkedin.com/in/ashish-ashishbharti0701-91797b92"
	},
	{
		"name": "Ayushi Gupta",
		"image": "/testimonials/PastYearTeamImages/16-17/Ayushi.jpg",
		"mail": "ayushi[AT]iitk.ac.in",
		"phone": "+91 7408 228 486",
		"linkedin": "https://www.linkedin.com/in/ayushi-gupta-bb9714a1"
	}
]

const APC = [
	{
		"name": "Akshay Wadhwani",
		"mail": "akshayw[AT]iitk.ac.in",
		"phone": "+91 8604926396"
	},
	{
		"name": "Aman Jaiswal",
		"mail": "amanj[AT]iitk.ac.in",
		"phone": "+91 9005527376"
	},
	{
		"name": "Prashant Singhla",
		"mail": "singhla[AT]iitk.ac.in",
		"phone": "+91 7755057628"
	},
	{
		"name": "Subham Kumar",
		"mail": "subham[AT]iitk.ac.in",
		"phone": "+91 8960620584"
	},
	{
		"name": "Aryaman",
		"mail": "aryaman[AT]iitk.ac.in",
		"phone": "+91 7755047977"
	},
	{
		"name": "Ashish Sharma",
		"mail": "asharma[AT]iitk.ac.in",
		"phone": "+91 8960742797"
	},
	{
		"name": "Harshit Omar",
		"mail": "homar[AT]iitk.ac.in",
		"phone": "+91 8687007388"
	},
	{
		"name": "Ishika Soni",
		"mail": "ishika[AT]iitk.ac.in",
		"phone": "+91 9412493646"
	},
	{
		"name": "Prasoon Bajpai",
		"mail": "bprasoon[AT]iitk.ac.in",
		"phone": "+91 8009937687"
	},
	{
		"name": "Shashwat Pandey",
		"mail": "spandey[AT]iitk.ac.in",
		"phone": "+91 7388798973"
	},
	{
		"name": "Siddharth Lal",
		"mail": "sidlal[AT]iitk.ac.in",
		"phone": "+91 7755057801"
	},
	{
		"name": "Vibhor Kumar",
		"mail": "vibhorkm[AT]iitk.ac.in",
		"phone": "+91 9506281281"
	}
]
const ACD = [
	{
		"name": "Pawan Shetty",
		"department": "Aerospace Engineering",
		"mail": "pshetty[AT]iitk.ac.in",
		"phone": "+91 7388715901"
	},
	{
		"name": "Manish Chaudhary",
		"department": "Aerospace Engineering",
		"mail": "cmanish[AT]iitk.ac.in",
		"phone": "+91 9550576129"
	},
	{
		"name": "Shaharukh Khan",
		"department": "Aerospace Engineering",
		"mail": "shahrukh[AT]iitk.ac.in",
		"phone": "+91 7275564486"
	},
	{
		"name": "Virender",
		"department": "Biological Sciences and Bio-Engineering",
		"mail": "virender[AT]iitk.ac.in",
		"phone": "+91 9554785466"
	},
	{
		"name": "Durga Kant Gupta",
		"department": "Biological Sciences and Bioengineering",
		"mail": "durgak[AT]iitk.ac.in",
		"phone": "+91 9044994891"
	},
	{
		"name": "Shubham Thakur",
		"department": "Chemical Engineering",
		"mail": "skthakur[AT]iitk.ac.in",
		"phone": "+91 8953603254"
	},
	{
		"name": "Manoj Dahiya",
		"department": "Chemical Engineering",
		"mail": "manojkd[AT]iitk.ac.in",
		"phone": "+91 7754916018"
	},
	{
		"name": "Jacob Varun Dev",
		"department": "Chemical Engineering",
		"mail": "jacobvar[AT]iitk.ac.in",
		"phone": "+91 9400184101"
	},
	{
		"name": "Garima",
		"department": "Chemical Engineering",
		"mail": "sgarima[AT]iitk.ac.in",
		"phone": "+91 7754916089"
	},
	{
		"name": "Devansh Sharma",
		"department": "Chemistry",
		"mail": "dsharma[AT]iitk.ac.in",
		"phone": "+91 7753058613"
	},
	{
		"name": "Urvashi Jain",
		"department": "Civil Engineering",
		"mail": "urvashij[AT]iitk.ac.in",
		"phone": "+91 8090690006"
	},
	{
		"name": "Salik Naqueeb Abbasi",
		"department": "Civil Engineering",
		"mail": "snabbasi[AT]iitk.ac.in",
		"phone": "+91 7755839795"
	},
	{
		"name": "Rajendra",
		"department": "Computer Science and Engineering",
		"mail": "rjndr[AT]iitk.ac.in",
		"phone": "+91 9566817080"
	},
	{
		"name": "Rakshit Sharma",
		"department": "Computer Science and Engineering",
		"mail": "raksh[AT]iitk.ac.in",
		"phone": "+91 9660762447"
	},
	{
		"name": "Gautham T R",
		"department": "Design",
		"mail": "gauth[AT]iitk.ac.in",
		"phone": "+91 7760596131"
	},
	{
		"name": "Debangana Roy",
		"department": "Design",
		"mail": "dero[AT]iitk.ac.in",
		"phone": "+91 9681796669"
	},
	{
		"name": "Rimali Mitra",
		"department": "Earth Sciences",
		"mail": "rimali[AT]iitk.ac.in",
		"phone": "+91 8604796605"
	},
	{
		"name": "Nimisha Gupta",
		"department": "Economics",
		"mail": "nimishag[AT]iitk.ac.in",
		"phone": "+91 7752846568"
	},
	{
		"name": "Vikash Kumar",
		"department": "Electrical Engineering",
		"mail": "vkash[AT]iitk.ac.in",
		"phone": "+91 - 9643156151"
	},
	{
		"name": "Samruddha Shahasane",
		"department": "Electrical Engineering",
		"mail": "samruddh[AT]iitk.ac.in",
		"phone": "+91 8743049501"
	},
	{
		"name": "Somashekar Swamy N",
		"department": "Electrical Engineering",
		"mail": "nsswamy[AT]iitk.ac.in",
		"phone": "+91 8904829459"
	},
	{
		"name": "Akshay Mamdapure",
		"department": "Environmental Engineering and Management",
		"mail": "mamdapur[AT]iitk.ac.in",
		"phone": "+91 9552152890"
	},
	{
		"name": "Prashant Kumar Garg",
		"department": "Indusrial Managment and Enginnering",
		"mail": "gargp[AT]iitk.ac.in",
		"phone": "+91 8768744151"
	},
	{
		"name": "Tanvi Keswani",
		"department": "Indusrial Managment and Enginnering",
		"mail": "tanvik[AT]iitk.ac.in",
		"phone": "+91 8094294093"
	},
	{
		"name": "Parmanand Nagdev",
		"department": "MBA",
		"mail": "nagdev[AT]iitk.ac.in",
		"phone": "+91 7869848341"
	},
	{
		"name": "Shreyansh Singh",
		"department": "MBA",
		"mail": "shresing[AT]iitk.ac.in",
		"phone": "+91 9790860113"
	},
	{
		"name": "Lokendra Singh Dangi",
		"department": "Laser and Photonics Department",
		"mail": "lsdangi[AT]iitk.ac.in",
		"phone": "+91 7054461610"
	},
	{
		"name": "Shashwat Singh",
		"department": "Material Sciences and Engineering",
		"mail": "shwat[AT]iitk.ac.in",
		"phone": "+91 9560773271"
	},
	{
		"name": "Akshay Raj Singh",
		"department": "Material Sciences and Engineering",
		"mail": "srakshay[AT]iitk.ac.in",
		"phone": "+91 7752894593"
	},
	{
		"name": "Tushar Telmasre",
		"department": "Material Sciences and Engineering",
		"mail": "telmasre[AT]iitk.ac.in",
		"phone": "+91 9766715577"
	},
	{
		"name": "Nisarg Shah",
		"department": "Material Sciences and Engineering",
		"mail": "nisarg[AT]iitk.ac.in",
		"phone": "+91 7275627735"
	},
	{
		"name": "Nisha Sarda",
		"department": "Material Science Program",
		"mail": "snisha[AT]iitk.ac.in",
		"phone": "+91 8387074096"
	},
	{
		"name": "Shivanshu Pandey",
		"department": "Material Science Program",
		"mail": "shivpan[AT]iitk.ac.in",
		"phone": "+91 7860328390"
	},
	{
		"name": "Pranay Tarafdar",
		"department": "Mathematics and Statistics",
		"mail": "pratar[AT]iitk.ac.in",
		"phone": "+91 9454798414"
	},
	{
		"name": "Jatin Gupta",
		"department": "Mechanical Engineering",
		"mail": "jgupta[AT]iitk.ac.in",
		"phone": "+91 9452770160"
	},
	{
		"name": "Shubham Gajbhiye",
		"department": "Mechanical Engineering",
		"mail": "shubhug[AT]iitk.ac.in",
		"phone": "+91 8175989793"
	},
	{
		"name": "Ambuj Shah",
		"department": "Mechanical Engineering",
		"mail": "ambujsh[AT]iitk.ac.in",
		"phone": "+91 8962347271"
	},
	{
		"name": "Sudhanshu Tandon",
		"department": "Mechanical Engineering",
		"mail": "standon[AT]iitk.ac.in",
		"phone": "+91 8953349765"
	},
	{
		"name": "Javed Akhtar",
		"department": "Mathematics and Scientific Computing",
		"mail": "akjaved[AT]iitk.ac.in",
		"phone": "+91 7607318788"
	},
	{
		"name": "Ravi Ankit Purty",
		"department": "Nuclear Engineering Technology",
		"mail": "purty[AT]iitk.ac.in",
		"phone": "+91 9454798408"
	}
]

export default function StudentTeam22() {
	return (
		<Page title="Placement Team 2016-17" >
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

/* const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
	--autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
	--autofit-grid-item-size: 100%;
  }
`; */

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
