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
		"name": "Aditi Singh",
		"image": "/testimonials/PastYearTeamImages/18-19/aditisgh.jpg",
		"mail": "aditisgh@iitk.ac.in",
		"phone": "+91 9461 699 954",
		"linkedin": "https://www.linkedin.com/in/aditi-singh-b82303158/"
	},
	{
		"name": "Asim Katakwar",
		"image": "/testimonials/PastYearTeamImages/18-19/asim.jpg",
		"mail": "asimsr@iitk.ac.in",
		"phone": "+91 9519 206 077",
		"linkedin": "https://www.linkedin.com/in/asim-katakwar-347285115/"
	},
	{
		"name": "Pritesh Kumbhare",
		"image": "/testimonials/PastYearTeamImages/18-19/pritesh.jpg",
		"mail": "pritesh@iitk.ac.in",
		"phone": "+91 7054 117 608",
		"linkedin": "https://www.linkedin.com/in/priteshkumbhare/"
	},
	{
		"name": "Utkarsh Sharma",
		"image": "/testimonials/PastYearTeamImages/18-19/utkarsh.jpg",
		"mail": "sutkars@iitk.ac.in",
		"phone": "+91 8400 848 228",
		"linkedin": "https://www.linkedin.com/in/utkarsh-sharma-026b55158/"
	},
	{
		"name": "Shubhadeep Das",
		"image": "/testimonials/PastYearTeamImages/18-19/shubh.jpg",
		"mail": "shubdas@iitk.ac.in",
		"phone": "+91 9559 024 468",
		"linkedin": "https://www.linkedin.com/in/shubhadeep456/"
	},
	{
		"name": "Santhosh Kumar C",
		"image": "/testimonials/PastYearTeamImages/18-19/santosh.jpg",
		"mail": "csksant@iitk.ac.in",
		"phone": "+91 7418 121 826",
		"linkedin": "https://in.linkedin.com/in/csksanthoshkumar"
	}
]

const APC = [
	{
		"name": "Alok Ranjan",
		"mail": "alokr@iitk.ac.in",
		"phone": "+91 7318020851"
	},
	{
		"name": "Amartya Prusty",
		"mail": "aprusty@iitk.ac.in",
		"phone": "+91 7318016067"
	},
	{
		"name": "Anshu Sogarwal",
		"mail": "anshuwal@iitk.ac.in",
		"phone": "+91 8896607990"
	},
	{
		"name": "Apoorva Singh",
		"mail": "apoorvas@iitk.ac.in",
		"phone": "+91 9415390833"
	},
	{
		"name": "Chitwan Garg",
		"mail": "gchitwan@iitk.ac.in",
		"phone": "+91 7318018951"
	},
	{
		"name": "Kartik Dutt",
		"mail": "kartik@iitk.ac.in",
		"phone": "+91 7318018935"
	},
	{
		"name": "Khushboo Jain",
		"mail": "khushbo@iitk.ac.in",
		"phone": "+91 9654287614"
	},
	{
		"name": "Mohammad Anas",
		"mail": "mdanas@iitk.ac.in",
		"phone": "+91 8090300463"
	},
	{
		"name": "Moulik Jain",
		"mail": "mlkjain@iitk.ac.in",
		"phone": "+91 9981635341"
	},
	{
		"name": "Rahul Chauhan",
		"mail": "rahulzzz@iitk.ac.in",
		"phone": "+91 7318017928"
	},
	{
		"name": "Vaibhav Agarwal",
		"mail": "vaibhavg@iitk.ac.in",
		"phone": "+91 9453620663"
	},
	{
		"name": "Vamsi Krishna Badri",
		"mail": "badriv@iitk.ac.in",
		"phone": "+91 7318016050"
	},
	{
		"name": "Yogesh Kumar",
		"mail": "kumaryog@iitk.ac.in",
		"phone": "+91 9794966036"
	}
]
const ACD = [
	{
		"name": "Akhshaya P",
		"department": "Aerospace Engineering",
		"mail": "akhshaya@iitk.ac.in",
		"phone": "+91 8870113449"
	},
	{
		"name": "Rajat Tripathi",
		"department": "Aerospace Engineering",
		"mail": "rajattri@iitk.ac.in",
		"phone": "+91 7607471549"
	},
	{
		"name": "Sarang S. Bhatuda",
		"department": "Biological Sciences and Bioengineering",
		"mail": "sarangb@iitk.ac.in",
		"phone": "+91 7839984188"
	},
	{
		"name": "Hemant Nagar",
		"department": "Chemical Engineering",
		"mail": "hemantn@iitk.ac.in",
		"phone": "+91 7388727459"
	},
	{
		"name": "Prerna",
		"department": "Chemical Engineering",
		"mail": "prerpd@iitk.ac.in",
		"phone": "+91 9546199381"
	},
	{
		"name": "Mohammad Daud",
		"department": "Civil Engineering",
		"mail": "daud@iitk.ac.in",
		"phone": "+91 9044330669"
	},
	{
		"name": "Pulkit Kamal",
		"department": "Civil Engineering",
		"mail": "pulkitk@iitk.ac.in",
		"phone": "+91 9999479941"
	},
	{
		"name": "Harsh Bhagwani",
		"department": "Computer Science and Engineering",
		"mail": "harshb@iitk.ac.in",
		"phone": "+91 9993344374"
	},
	{
		"name": "Payas Suhas Bahade",
		"department": "Design",
		"mail": "payasb@iitk.ac.in",
		"phone": "+91 8149997805"
	},
	{
		"name": "Pranisha Patel",
		"department": "Design",
		"mail": "pranisha@iitk.ac.in",
		"phone": "+91 7415333239"
	},
	{
		"name": "Siddhartha Deosthale",
		"department": "Earth Sciences",
		"mail": "siddeo@iitk.ac.in",
		"phone": "+91 8958650610"
	},
	{
		"name": "Deepak Panchal",
		"department": "Economics",
		"mail": "deepan@iitk.ac.in",
		"phone": "+91 7054117893"
	},
	{
		"name": "Arnib Alam",
		"department": "Electrical Engineering",
		"mail": "arnib@iitk.ac.in",
		"phone": "+91 9910614191"
	},
	{
		"name": "Parth Shyara",
		"department": "Electrical Engineering",
		"mail": "sparth@iitk.ac.in",
		"phone": "+91 9151621303"
	},
	{
		"name": "Rushil Manglik",
		"department": "Electrical Engineering",
		"mail": "rushilm@iitk.ac.in",
		"phone": "+91 8052501088"
	},
	{
		"name": "Arijit Ganguly",
		"department": "Industrial & Management Engineering",
		"mail": "arijitg@iitk.ac.in",
		"phone": "+91 9038171178"
	},
	{
		"name": "Nimish Dubey",
		"department": "Industrial & Management Engineering",
		"mail": "nimishd@iitk.ac.in",
		"phone": "+91 8600827315"
	},
	{
		"name": "Arvind Shirale",
		"department": "Materials Science Programme",
		"mail": "shirale@iitk.ac.in",
		"phone": "+91 9834381736"
	},
	{
		"name": "Monali Monalisa",
		"department": "Materials Science and Engineering",
		"mail": "monali@iitk.ac.in",
		"phone": "+91 9439861190"
	},
	{
		"name": "Sayantan Chakraborty",
		"department": "Materials Science and Engineering",
		"mail": "sayantc@iitk.ac.in",
		"phone": "+91 9830112979"
	},
	{
		"name": "Ravi",
		"department": "Mathematics & Scientific Computing",
		"mail": "kravi@iitk.ac.in",
		"phone": "+91 7054117169"
	},
	{
		"name": "Akash Kumar Gupta",
		"department": "Mechanical Engineering",
		"mail": "guakash@iitk.ac.in",
		"phone": "+91 9151636051"
	},
	{
		"name": "B Sai Bharat Kumar",
		"department": "Mechanical Engineering",
		"mail": "bsbk0992@gmail.com",
		"phone": "+91 9014114195"
	},
	{
		"name": "Danish Abbas",
		"department": "Mechanical Engineering",
		"mail": "danakalu001@gmail.com",
		"phone": "+91 7317744273"
	},
	{
		"name": "Neeraj Chouhan",
		"department": "Photonics Science and Engineering",
		"mail": "cneeraj@iitk.ac.in",
		"phone": "+91 9784883968"
	},
	{
		"name": "Rahul Singh",
		"department": "Statistics",
		"mail": "rahulstat1995@gmail.com",
		"phone": "+91 8334034890"
	}
]

export default function StudentTeam22() {
	return (
		<Page title="Placement Team 2018-19" >
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
				<SectionTitle>Assistant Coordinators of Departments</SectionTitle>
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
}
`
