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

const DPC =[
	{
		"name": "Girish Varma C",
		"department": "Aerospace Engineering",
		"phone": "9731334982",
		"email": "girishv24@iitk.ac.in"
	},
	{
		"name": "Dharshan S Hegde",
		"department": "Aerospace Engineering",
		"phone": "8296160569",
		"email": "dharshans24@iitk.ac.in"
	},
	{
		"name": "Akshay Anthwal",
		"department": "Aerospace Engineering",
		"phone": "9873936110",
		"email": "akshaya24@iitk.ac.in"
	},
	{
		"name": "Vinyas D Sagar",
		"department": "Biological Science and Bio-Engineering",
		"phone": "9148883450",
		"email": "vinyasds24@iitk.ac.in"
	},
	{
		"name": "Taneya Gupta",
		"department": "Biological Science and Bio-Engineering",
		"phone": "7505147670",
		"email": "taneyag24@iitk.ac.in"
	},
	{
		"name": "Shravani Sambhus",
		"department": "Civil Engineering",
		"phone": "9420625883",
		"email": "shravanir24@iitk.ac.in"
	},
	{
		"name": "Shaik Kamoosh Baba",
		"department": "Civil Engineering",
		"phone": "7732035488",
		"email": "kamooshsb24@iitk.ac.in"
	},
	{
		"name": "Sumit Gupta",
		"department": "Civil Engineering",
		"phone": "9453587665",
		"email": "sumitgupta24@iitk.ac.in"
	},
	{
		"name": "Kushagra Shukla",
		"department": "Chemical Engineering",
		"phone": "9151289521",
		"email": "kushagras24@iitk.ac.in"
	},
	{
		"name": "Anurag Yadav",
		"department": "Chemical Engineering",
		"phone": "94564447767",
		"email": "anuragy24@iitk.ac.in"
	},
	{
		"name": "Sourabh Patidar",
		"department": "Chemistry",
		"phone": "7049972204",
		"email": "sourabhp24@iitk.ac.in"
	},
	{
		"name": "Asit Biswas",
		"department": "Computer Science and Engineering",
		"phone": "6295904563",
		"email": "asitbiswas24@iitk.ac.in"
	},
	{
		"name": "Jatin Jangir",
		"department": "Computer Science and Engineering",
		"phone": "8094234071",
		"email": "jatinj24@iitk.ac.in"
	},
	{
		"name": "Rubal Gajbhiye",
		"department": "Cognitive Science",
		"phone": "7798597987",
		"email": "rubaldevid24@iitk.ac.in"
	},
	{
		"name": "Ishita Srivastava",
		"department": "Design",
		"phone": "7388504183",
		"email": "sishita24@iitk.ac.in"
	},
	{
		"name": "Ankush Kumar Gagat",
		"department": "Design",
		"phone": "7984825725",
		"email": "ankushg24@iitk.ac.in"
	},
	{
		"name": "Sanjay Singh Shekhawat",
		"department": "Earth Science",
		"phone": "9079999146",
		"email": "sssanjay24@iitk.ac.in"
	},
	{
		"name": "Mohammed Ali Khan",
		"department": "Earth Science",
		"phone": "8737019065",
		"email": "malikhan24@iitk.ac.in"
	},
	{
		"name": "Jayesh Upadhyay",
		"department": "Electrical Engineering",
		"phone": "7600029257",
		"email": "jayeshs24@iitk.ac.in"
	},
	{
		"name": "Aniket Zarekar",
		"department": "Electrical Engineering",
		"phone": "7040865977",
		"email": "aniketkz24@iitk.ac.in"
	},
	{
		"name": "Lakkadi Nivas Reddy",
		"department": "Electrical Engineering",
		"phone": "8465815210",
		"email": "lnreddy24@iitk.ac.in"
	},
	{
		"name": "Aditya Narayan Singh",
		"department": "Economics",
		"phone": "8240807447",
		"email": "adityans24@iitk.ac.in"
	},
	{
		"name": "Vishal Chaudhary",
		"department": "Management Sciences",
		"phone": "8171559411",
		"email": "vishalc24@iitk.ac.in"
	},
	{
		"name": "Rishabh Pandey",
		"department": "Management Sciences",
		"phone": "7985647101",
		"email": "rishabhp24@iitk.ac.in"
	},
	{
		"name": "Yash Gupta",
		"department": "Materials Science and Engineering",
		"phone": "8383065920",
		"email": "yashg24@iitk.ac.in"
	},
	{
		"name": "Kaarthick K",
		"department": "Materials Science and Engineering",
		"phone": "6380661721",
		"email": "kaarthickk24@iitk.ac.in"
	},
	{
		"name": "Shubhanshu",
		"department": "Materials Science Program",
		"phone": "7347762948",
		"email": "kumars24@iitk.ac.in"
	},
	{
		"name": "Kanchan Bharti",
		"department": "Mathematics",
		"phone": "8126732289",
		"email": "kanchanb24@iitk.ac.in"
	},
	{
		"name": "Sunny Raja Prasad",
		"department": "Mathematics and Scientific Computing",
		"phone": "9123263819",
		"email": "sunnyrp21@iitk.ac.in"
	},
	{
		"name": "Chetan Chouhan",
		"department": "Mechanical Engineering",
		"phone": "8319231254",
		"email": "chetanc24@iitk.ac.in"
	},
	{
		"name": "Shubham Chaurasia",
		"department": "Mechanical Engineering",
		"phone": "8317098145",
		"email": "shubhamh24@iitk.ac.in"
	},
	{
		"name": "Vinay asish yedlapalli",
		"department": "Mechanical Engineering",
		"phone": "9618613972",
		"email": "vinaya24@iitk.ac.in"
	},
	{
		"name": "Vishwesh Jha",
		"department": "Photonics Science Engineering and Laser Technology",
		"phone": "8303154867",
		"email": "vishweshj24@iitk.ac.in"
	},
	{
		"name": "Rashi Sharma",
		"department": "Physics",
		"phone": "9307728679",
		"email": "rashis22@iitk.ac.in"
	},
	{
		"name": "Anunnya Gudhenia",
		"department": "Space, Planetary & Astronomical Sciences & Engineering (SPASE)",
		"phone": "8800228836",
		"email": "anunnyag24@iitk.ac.in"
	},
	{
		"name": "Ahammed Ikbal",
		"department": "Statistics",
		"phone": "9614695955",
		"email": "aikbal24@iitk.ac.in"
	},
	{
		"name": "Sujal Yadav",
		"department": "Statistics",
		"phone": "8319820687",
		"email": "sujaly24@iitk.ac.in"
	},
	{
		"name": "Anshul Aswal",
		"department": "Sustainable Energy Engineering",
		"phone": "8865897675",
		"email": "anshula24@iitk.ac.in"
	},
	{
		"name": "Pranshu Vajpayee",
		"department": "Sustainable Energy Engineering",
		"phone": "9352205758",
		"email": "pranshuv24@iitk.ac.in"
	}
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
