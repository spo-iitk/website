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
		"name": "Aditya Jain",
		"image": "/testimonials/PastYearTeamImages/14-15/aditya.jpg",
		"mail": "adityj[AT]iitk.ac.in",
		"phone": "+91 8960 419 300",
		"linkedin": "https://www.linkedin.com/profile/view?id=157498923"
	},
	{
		"name": "Amanpreet Singh",
		"image": "/testimonials/PastYearTeamImages/14-15/amanpreet.jpg",
		"mail": "amanprs[AT]iitk.ac.in",
		"phone": "+91 9621 249 264",
		"linkedin": "https://www.linkedin.com/profile/view?id=312298778"
	},
	{
		"name": "Parth Vaswani",
		"image": "/testimonials/PastYearTeamImages/14-15/parth.jpg",
		"mail": "vaspar[AT]iitk.ac.in",
		"phone": "+91 9936 375 558",
		"linkedin": "https://www.linkedin.com/profile/view?id=141264083"
	},
	{
		"name": "Shashwat Chandra",
		"image": "/testimonials/PastYearTeamImages/14-15/chandras.jpg",
		"mail": "chandras[AT]iitk.ac.in",
		"phone": "+91 9936 335 650",
		"linkedin": "https://www.linkedin.com/profile/view?id=341972785"
	},
	{
		"name": "Shrey Verma",
		"image": "/testimonials/PastYearTeamImages/14-15/shrey.jpg",
		"mail": "shreyv[AT]iitk.ac.in",
		"phone": "+91 9651 762 826",
		"linkedin": "https://www.linkedin.com/profile/view?id=292873328"
	},
	{
		"name": "Avanindra Kumar Pandeya",
		"image": "/testimonials/PastYearTeamImages/14-15/apandeya.jpg",
		"mail": "apandeya[AT]iitk.ac.in",
		"phone": "+91 8081 245 927",
		"linkedin": "https://www.linkedin.com/profile/view?id=71112726"
	}
]

const Internship_Cordis = [
	{
		"name": "Ayush Aggarwal",
		"mail": "aayushag[AT]iitk.ac.in",
		"phone": "+91 8953440893"
	},
	{
		"name": "Jital Patel",
		"mail": "jital[AT]iitk.ac.in",
		"phone": "+91 8953448627"
	},
	{
		"name": "Parul Agarwal",
		"mail": "parula[AT]iitk.ac.in",
		"phone": "+91 9651116161"
	}
]

const Internship_CoreTeam = [
	{
		"name": "Nimish Garg",
		"mail": "nimishg[AT]iitk.ac.in",
		"phone": "+91 8953441447"
	},
	{
		"name": "Sidhant Khatri",
		"mail": "sidhantk[AT]iitk.ac.in",
		"phone": "+91 9819755096"
	},
	{
		"name": "Divya Pratap Singh",
		"mail": "pratapd[AT]iitk.ac.in",
		"phone": "+91 9761824591"
	},
	{
		"name": "Dhanik Bharatkar",
		"mail": "dhanik[AT]iitk.ac.in",
		"phone": "+91 8953434522"
	},
	{
		"name": "Shishir Mathur",
		"mail": "mshishir[AT]iitk.ac.in",
		"phone": "+91 8953436646"
	},
	{
		"name": "Abhishek Chaurasia",
		"mail": "abhichau[AT]iitk.ac.in",
		"phone": "+91 8574475822"
	},
	{
		"name": "Ashish Jain",
		"mail": "ashishj[AT]iitk.ac.in",
		"phone": "+91 8874342928"
	},
	{
		"name": "Kartik Agarwal",
		"mail": "akartik[AT]iitk.ac.in",
		"phone": "+91 8953431905"
	},
	{
		"name": "Shashank Kamdar",
		"mail": "skamdar[AT]iitk.ac.in",
		"phone": "+91 9651986611"
	}
]

const ACD_IDS = [
	{
		"name": "Raman Kumar",
		"department": "Centre for Lasers Photonics (CELP)",
		"mail": "ramankr[AT]iitk.ac.in",
		"phone": "+91 8765679815"
	},
	{
		"name": "Ashutosh Kumar",
		"department": "Design Programme",
		"mail": "ashuqu[AT]iitk.ac.in",
		"phone": "+91 8174881236"
	},
	{
		"name": "Romil Dipak Desai",
		"department": "Design Programme",
		"mail": "romild[AT]iitk.ac.in",
		"phone": "+91 7208228999"
	},
	{
		"name": "Shankar Prasad Yadav",
		"department": "Environmental Engineering and Management (EEM)",
		"mail": "shankarp[AT]iitk.ac.in",
		"phone": "+91 7753058474"
	},
	{
		"name": "Nikhila B",
		"department": "Material Sciences Program",
		"mail": "nikhila[AT]iitk.ac.in",
		"phone": "+91 8604295638"
	},
	{
		"name": "Rahul Verma",
		"department": "Material Sciences Program",
		"mail": "rahulver[AT]iitk.ac.in",
		"phone": "+91 9455607917"
	},
	{
		"name": "Raja Kama",
		"department": "Nuclear Engineering and Technology",
		"mail": "rajakama[AT]iitk.ac.in",
		"phone": "+91 7754915767"
	}
]

const ACD_SnH = [
	{
		"name": "Ayush Asthana",
		"department": "Chemistry",
		"mail": "asthanaa[AT]iitk.ac.in",
		"phone": "+91 9305259489"
	},
	{
		"name": "Abhishek Shekhawat",
		"department": "Economics",
		"mail": "abhisss[AT]iitk.ac.in",
		"phone": "+91 8960402269"
	},
	{
		"name": "R Jagadeesh",
		"department": "Economics",
		"mail": "jagadees[AT]iitk.ac.in",
		"phone": "+91 8960441949"
	},
	{
		"name": "Arcchit Jain",
		"department": "Mathematics and Scientific Computing",
		"mail": "arcchit[AT]iitk.ac.in",
		"phone": "+91 7607448699"
	},
	{
		"name": "Singh Vivek Krisknakailash",
		"department": "Mathematics and Scientific Computing",
		"mail": "svivek[AT]iitk.ac.in",
		"phone": "+91 9005900761"
	},
	{
		"name": "Ajit Singh Thakur",
		"department": "MBA",
		"mail": "ajitnum[AT]iitk.ac.in",
		"phone": "+91 8090831009"
	},
	{
		"name": "Praanshu Gupta",
		"department": "MBA",
		"mail": "praanshu[AT]iitk.ac.in",
		"phone": "+91 7839261364"
	},
	{
		"name": "Soren Goyal",
		"department": "Physics",
		"mail": "soren[AT]iitk.ac.in",
		"phone": "+91 7607451190"
	},
	{
		"name": "Ranabir De",
		"department": "Statistics",
		"mail": "ranabir[AT]iitk.ac.in",
		"phone": "+91 7753058487"
	}
]

const ACD_Eng = [
	{
		"name": "Himanshu Mishra",
		"department": "Aerospace Engineering",
		"mail": "himanshm[AT]iitk.ac.in",
		"phone": "+91 7754916132"
	},
	{
		"name": "K Samarth",
		"department": "Aerospace Engineering",
		"mail": "ksamarth[AT]iitk.ac.in",
		"phone": "+91 9005888754"
	},
	{
		"name": "Hemant Meharchandani",
		"department": "Biological Sciences and Engineering",
		"mail": "hemantm[AT]iitk.ac.in",
		"phone": "+91 8127013772"
	},
	{
		"name": "Kshitij Agarwal",
		"department": "Biological Sciences and Engineering",
		"mail": "kshitija[AT]iitk.ac.in",
		"phone": "+91 8090601047"
	},
	{
		"name": "Devendra Swami",
		"department": "Civil Engineering",
		"mail": "dswami[AT]iitk.ac.in",
		"phone": "+91 8960409412"
	},
	{
		"name": "Sajal Mittal",
		"department": "Civil Engineering",
		"mail": "sajmit[AT]iitk.ac.in",
		"phone": "+91 9458731173"
	},
	{
		"name": "Shubham Gupta",
		"department": "Civil Engineering",
		"mail": "sggcet[AT]iitk.ac.in",
		"phone": "+91 9458815297"
	},
	{
		"name": "Swatantra Verma",
		"department": "Civil Engineering",
		"mail": "swatantr[AT]iitk.ac.in",
		"phone": "+91 9453405278"
	},
	{
		"name": "Amandeep Gupta",
		"department": "Chemical Enginnering",
		"mail": "amandg[AT]iitk.ac.in",
		"phone": "+91 9005908477"
	},
	{
		"name": "Mohit Nema",
		"department": "Chemical Enginnering",
		"mail": "nmohit[AT]iitk.ac.in",
		"phone": "+91 8090553434"
	},
	{
		"name": "S Laxmicharan",
		"department": "Chemical Engineering",
		"mail": "charan[AT]iitk.ac.in",
		"phone": "+91 7754916164"
	},
	{
		"name": "Shashank Yadav",
		"department": "Chemical Engineering",
		"mail": "yadavsh[AT]iitk.ac.in",
		"phone": "+91 9005807713"
	},
	{
		"name": "Mohit Bhadade",
		"department": "Computer Science and Engineering",
		"mail": "mohitdb[AT]iitk.ac.in",
		"phone": "+91 9420789218"
	},
	{
		"name": "Chirayu Ketankumar Modi",
		"department": "Computer Science and Engineering",
		"mail": "chirayum[AT]iitk.ac.in",
		"phone": "+91 7752846269"
	},
	{
		"name": "Rahul Purohit",
		"department": "Computer Science and Engineering",
		"mail": "rahulpu[AT]iitk.ac.in",
		"phone": "+91 7754915803"
	},
	{
		"name": "Ambar Pakhira",
		"department": "Electrical Engineering",
		"mail": "ambarp[AT]iitk.ac.in",
		"phone": "+91 7275564500"
	},
	{
		"name": "Ankit Jalan",
		"department": "Electrical Engineering",
		"mail": "ajalan[AT]iitk.ac.in",
		"phone": "+91 8960437372"
	},
	{
		"name": "Anurag Prabhakar",
		"department": "Electrical Engineering",
		"mail": "aprabha[AT]iitk.ac.in",
		"phone": "+91 8604155829"
	},
	{
		"name": "Kishankumar Naik",
		"department": "Electrical Engineering",
		"mail": "kishanmn[AT]iitk.ac.in",
		"phone": "+91 8175970881"
	},
	{
		"name": "Mithil Shah",
		"department": "Electrical Engineering",
		"mail": "mithil[AT]iitk.ac.in",
		"phone": "+91 7752894607"
	},
	{
		"name": "Yashaswini N S",
		"department": "Electrical Engineering",
		"mail": "yashuns[AT]iitk.ac.in",
		"phone": "+91 8960015580"
	},
	{
		"name": "Akash Pushkar",
		"department": "Industrial and Management Engineering",
		"mail": "ashpar[AT]iitk.ac.in",
		"phone": "+91 7752894636"
	},
	{
		"name": "Gantala Thulsiram",
		"department": "Mechanical Engineering",
		"mail": "thulasig[AT]iitk.ac.in",
		"phone": "+91 7754915771"
	},
	{
		"name": "Rajat Goel",
		"department": "Mechanical Engineering",
		"mail": "rajatg[AT]iitk.ac.in",
		"phone": "+91 9914150971"
	},
	{
		"name": "Saurabh Pal",
		"department": "Mechanical Engineering",
		"mail": "saurabp[AT]iitk.ac.in",
		"phone": "+91 9453543306"
	},
	{
		"name": "Ishamol L B",
		"department": "Material Sciences and Engineering",
		"mail": "isagnlv[AT]iitk.ac.in",
		"phone": "+91 7754916057"
	},
	{
		"name": "Shirin Meshram",
		"department": "Material Sciences and Engineering",
		"mail": "shirin[AT]iitk.ac.in",
		"phone": "+91 7754916213"
	}
]

export default function StudentTeam22() {
	return (
		<Page title="Placement Team 2014-15" >
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
				<SectionTitle>Internship Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{Internship_Cordis.map((member) => (
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
				<SectionTitle>Internship Core-Team</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{Internship_CoreTeam.map((member) => (
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
					<h1>Inter-disciplinary specializations</h1>
					<br />
					<CustomAutofitGrid4>
						{ACD_IDS.map((member) => (
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
				<Container>
					<h1>Science and Humanities</h1>
					<br />
					<CustomAutofitGrid4>
						{ACD_SnH.map((member) => (
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
				<Container>
					<h1>Engineering</h1>
					<br />
					<CustomAutofitGrid4>
						{ACD_Eng.map((member) => (
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

const CustomBtnGroup = styled.div`
  display: grid;
  font-size: 1.8rem;
  text-decoration: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);

`
