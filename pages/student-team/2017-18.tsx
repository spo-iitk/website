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
		"name": "Akshay Wadhwani",
		"image": "/testimonials/PastYearTeamImages/17-18/akshay.jpg",
		"mail": "akshayw[AT]iitk.ac.in",
		"phone": "+91 8604 926 396",
		"linkedin": "https://www.linkedin.com/in/akshay-wadhwani-534650b6/"
	},
	{
		"name": "Aryaman",
		"image": "/testimonials/PastYearTeamImages/17-18/aryaman.jpg",
		"mail": "aryaman[AT]iitk.ac.in",
		"phone": "+91 7755 047 977",
		"linkedin": "https://www.linkedin.com/in/aryaman-singh-788b70ba/"
	},
	{
		"name": "Harshit Omar",
		"image": "/testimonials/PastYearTeamImages/17-18/harshit.jpg",
		"mail": "homar[AT]iitk.ac.in",
		"phone": "+91 8687 007 388",
		"linkedin": "https://www.linkedin.com/in/harshit-omar-574bb3b2/"
	},
	{
		"name": "Subham Kumar",
		"image": "/testimonials/PastYearTeamImages/17-18/subham.jpg",
		"mail": "subham[AT]iitk.ac.in",
		"phone": "+91 8960 620 584",
		"linkedin": "https://www.linkedin.com/in/subham-kumar-44a913aa/"
	}
]

const APC = [
	{
		"name": "Abhigyan Rai",
		"mail": "agrai[AT]iitk.ac.in",
		"phone": "+91 7839000857"
	},
	{
		"name": "Abhinay Kumar",
		"mail": "kabhinay[AT]iitk.ac.in",
		"phone": "+91 8756751942"
	},
	{
		"name": "Abhishek Khetan",
		"mail": "abkhetan[AT]iitk.ac.in",
		"phone": "+91 7275005259"
	},
	{
		"name": "Akash Gupta",
		"mail": "akashgup[AT]iitk.ac.in",
		"phone": "+91 7054114645"
	},
	{
		"name": "Atul",
		"mail": "gatul[AT]iitk.ac.in",
		"phone": "+91 8604315705"
	},
	{
		"name": "Chaitanya Dhawan",
		"mail": "cdhawan[AT]iitk.ac.in",
		"phone": "+91 7388712897"
	},
	{
		"name": "Jai Jain",
		"mail": "jaij[AT]iitk.ac.in",
		"phone": "+91 9453995992"
	},
	{
		"name": "Prachi Agarwal",
		"mail": "prachia[AT]iitk.ac.in",
		"phone": "+91 8769161585"
	},
	{
		"name": "Sagar Goyal",
		"mail": "sagarg[AT]iitk.ac.in",
		"phone": ""
	},
	{
		"name": "Shubhi Agrawal",
		"mail": "agshubhi[AT]iitk.ac.in",
		"phone": "+91 9044038982"
	},
	{
		"name": "Utkarsh Sharma",
		"mail": "sutkars[AT]iitk.ac.in",
		"phone": "+91 8400848228"
	},
	{
		"name": "Vishal dixit",
		"mail": "dvishal[AT]iitk.ac.in",
		"phone": "+91 7388833940"
	}
]
const ACD = [

	{
		"name": "Shrikant Sharma",
		"department": "Aerospace Engineering",
		"mail": "shrikant[AT]iitk.ac.in",
		"phone": "+91 7696017244"
	},
	{
		"name": "Pooja Nema",
		"department": "Aerospace Engineering",
		"mail": "poojan[AT]iitk.ac.in",
		"phone": "+91 9840016807"
	},
	{
		"name": "Garima Suri",
		"department": "Civil Engineering",
		"mail": "gsuri[AT]iitk.ac.in",
		"phone": "+91 7696262838"
	},
	{
		"name": "Ayushman Bhatt",
		"department": "Civil Engineering",
		"mail": "abhatt[AT]iitk.ac.in",
		"phone": "+91 9951407647"
	},
	{
		"name": "Vineet Kumar",
		"department": "Chemical Engineering",
		"mail": "vineetk[AT]iitk.ac.in",
		"phone": "+91 7318019196"
	},
	{
		"name": "Alok Kumar",
		"department": "Chemical Engineering",
		"mail": "kumalok[AT]iitk.ac.in",
		"phone": "+91 8825398730"
	},
	{
		"name": "Alok E",
		"department": "Design",
		"mail": "ealok[AT]iitk.ac.in",
		"phone": "+91 9035420522"
	},
	{
		"name": "Soumya Kundu",
		"department": "Design",
		"mail": "soumyak[AT]iitk.ac.in",
		"phone": "+91 9163733093"
	},
	{
		"name": "Rishabh Gupta",
		"department": "Economics",
		"mail": "rishabhg[AT]iitk.ac.in",
		"phone": "+91 8604635556"
	},
	{
		"name": "Swapnil Goyal",
		"department": "Economics",
		"mail": "sgoyal[AT]iitk.ac.in",
		"phone": "+91 8604924765"
	},
	{
		"name": "Amit Kumar Sharma",
		"department": "Electrical Engineering",
		"mail": "aksharma[AT]iitk.ac.in",
		"phone": "+91 7318020889"
	},
	{
		"name": "Suryanshu Sinha",
		"department": "Industrial & Management Engineering",
		"mail": "suri[AT]iitk.ac.in",
		"phone": "+91 7028026165"
	},
	{
		"name": "Ayush Tiwari",
		"department": "Industrial & Management Engineering",
		"mail": "ayush[AT]iitk.ac.in",
		"phone": "+91 8604510110"
	},
	{
		"name": "Nishant",
		"department": "Mechanical Engineering",
		"mail": "anishant[AT]iitk.ac.in",
		"phone": "+91 9650347996"
	},
	{
		"name": "Romil Kadia",
		"department": "Mechanical Engineering",
		"mail": "romil[AT]iitk.ac.in",
		"phone": "+91 9429120451"
	},
	{
		"name": "Ashish Kumar Gupta",
		"department": "Material Science & Engineering",
		"mail": "ashigup[AT]iitk.ac.in",
		"phone": "+91 8004968993"
	},
	{
		"name": "Sankalp Tiwari",
		"department": "Material Science Program",
		"mail": "tsankalp[AT]iitk.ac.in",
		"phone": "+91 7351548433"
	},
	{
		"name": "Debabrata Ghosh",
		"department": "Mathematics & Scientific Computing",
		"mail": "drtghosh[AT]iitk.ac.in",
		"phone": "+91 7752894614"
	},
	{
		"name": "Tushar Tiwari",
		"department": "Mathematics & Scientific Computing",
		"mail": "ttushar[AT]iitk.ac.in",
		"phone": "+91 7054094543"
	},
	{
		"name": "Sonakhya Samaddar",
		"department": "Statistics",
		"mail": "sonakhya[AT]iitk.ac.in",
		"phone": "+91 9163998387"
	},
	{
		"name": "Shobhit Singh",
		"department": "Earth Sciences",
		"mail": "shobhits[AT]iitk.ac.in",
		"phone": "+91 7053869820"
	}
]

export default function StudentTeam22() {
	return (
		<Page title="Placement Team 2017-18" >
			<DarkerBackgroundContainer>
				<br />
				<Container>
					<SectionTitle>Overall Placement Coordinators</SectionTitle>
					<br />
					<br />
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
