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
		"name": "Ayush Agrawal",
		image: "/testimonials/PastYearTeamImages/21-22/ayush.jpg",
		"mail": "ayushagr@iitk.ac.in",
		"phone": "91-8588846679", 
		"linkedin": "https://www.linkedin.com/in/ayush-agrawal-iitk/"
	},
	{
		"name": "Akarsh Mittal",
		image: "/testimonials/PastYearTeamImages/21-22/akarsh.jpg",
		"mail": "akarshm@iitk.ac.in",
		"phone": "91-9828383799",
		"linkedin": "https://www.linkedin.com/in/akarsh-mittal"
	},
	{
		"name": "Shruti Srivastava",
		image: "/testimonials/PastYearTeamImages/21-22/shruti.jpg",
		"mail": "shrutis20@iitk.ac.in",
		"phone": "91-8299767186",
		"linkedin": "https://www.linkedin.com/in/shruti-srivastava-808a87179"
	},
	{
		"name": "Amisha Shahdeo",
		image: "/testimonials/PastYearTeamImages/21-22/amisha.jpg",
		"mail": "ashahdeo@iitk.ac.in",
		"phone": "91-8809405690",
		"linkedin": "https://www.linkedin.com/in/amisha-shahdeo-7b38b619a/"
	},
	{
		"name": "Manali Patil",
		image: "/testimonials/PastYearTeamImages/21-22/manali.jpg",
		"mail": "manali@iitk.ac.in",
		"phone": "91-9130597084",
		"linkedin": "https://www.linkedin.com/in/manali-patil-20845b148"
	},
	{
		"name": "Utkarsh Verma",
		image: "/testimonials/PastYearTeamImages/21-22/utkarsh.jpg",
		"mail": "utverma@iitk.ac.in",
		"phone": "91-6388500292",
		"linkedin": "https://www.linkedin.com/in/utkarsh-verma-2a7875168/"
	}]

const APC = [
	{
		"name": "Abhinav D Singh",
		"mail": "abhids@iitk.ac.in",
		"phone": "+91 9483296049"
	},
	{
		"name": "Abhishek Verma",
		"mail": "abhivrm@iitk.ac.in",
		"phone": "+91 8957934462"
	},
	{
		"name": "Adarsh Anand",
		"mail": "adarsh@iitk.ac.in",
		"phone": "+91 8529761909"
	},
	{
		"name": "Akshita",
		"mail": "akshita@iitk.ac.in",
		"phone": "+91 9784903254"
	},
	{
		"name": "Anchal Gupta",
		"mail": "anchalgu@iitk.ac.in",
		"phone": "+91 7309369322"
	},
	{
		"name": "Asmita Nimesh",
		"mail": "asmita@iitk.ac.in",
		"phone": "+91 7393019939"
	},
	{
		"name": "Ayushi Arora",
		"mail": "ayushii@iitk.ac.in",
		"phone": "+91 8171103397"
	},
	{
		"name": "Gyanendra Kumar",
		"mail": "krgyan@iitk.ac.in",
		"phone": "+91 7301276032"
	},
	{
		"name": "Jitesh Hemji",
		"mail": "jithemji@iitk.ac.in",
		"phone": "+91 7062355340"
	},
	{
		"name": "Kritarth Lohomi",
		"mail": "kritarth@iitk.ac.in",
		"phone": "+91 7023409984"
	},
	{
		"name": "Neelabh Singhania",
		"mail": "neel@iitk.ac.in",
		"phone": "+91 8957241002"
	},
	{
		"name": "Nitish Yadav",
		"mail": "nkyadav@iitk.ac.in",
		"phone": "+91 9467838726"
	},
	{
		"name": "Prachi Priya",
		"mail": "prachi@iitk.ac.in",
		"phone": "+91 9334112386"
	},
	{
		"name": "Pragati Singh",
		"mail": "spragati@iitk.ac.in",
		"phone": "+91 8303065597"
	},
	{
		"name": "Rishabh Katiyar",
		"mail": "rkatiyar@iitk.ac.in",
		"phone": "+91 8318430643"
	},
	{
		"name": "Siddharth Kumar Singh",
		"mail": "sksingh@iitk.ac.in",
		"phone": "+91 8127680401"
	},
	{
		"name": "Siddharth Mishra",
		"mail": "sidmish@iitk.ac.in",
		"phone": "+91 9980929001"
	},
	{
		"name": "Sunay Chhajed",
		"mail": "sunay@iitk.ac.in",
		"phone": "+91 7225824183"
	},
	{
		"name": "Tanisha Agrawal",
		"mail": "taniagra@iitk.ac.in",
		"phone": "+91 9079574621"
	},
	{
		"name": "Vishwaraj Singh",
		"mail": "vrsingh@iitk.ac.in",
		"phone": "+91 9877579129"
	}
]
const ACD = [
	{
		"name": "Neelesh Srivastava",
		"department": "Aerospace Engineering",
		"mail": "neelesh20@iitk.ac.in",
		"phone": "+91 9889349546"
	},
	{
		"name": "Saumya Singh",
		"department": "Aerospace Engineering",
		"mail": "saumyas@iitk.ac.in",
		"phone": "+91 6392210249"
	},
	{
		"name": "Dona Maheshwari",
		"department": "Biosciences and Bioengineering",
		"mail": "dona@iitk.ac.in",
		"phone": "+91 6377758772"
	},
	{
		"name": "Ankit",
		"department": "Civil Engineering",
		"mail": "ankitver@iitk.ac.in",
		"phone": "+91 7988273596"
	},
	{
		"name": "Anshita Srivastava",
		"department": "Civil Engineering",
		"mail": "anshitas20@iitk.ac.in",
		"phone": "+91 7905664807"
	},
	{
		"name": "Aritra Nandy",
		"department": "Civil Engineering",
		"mail": "nandy20@iitk.ac.in",
		"phone": "+91 9883109135"
	},
	{
		"name": "Moulshree Rana",
		"department": "Cognitive Sciences",
		"mail": "moulshree20@iitk.ac.in",
		"phone": "+91 7045361588"
	},
	{
		"name": "Sagar Vasant Chaudhari",
		"department": "Chemical Engineering",
		"mail": "sagarkpgms20@iitk.ac.in",
		"phone": "+91 8652830453"
	},
	{
		"name": "Debanjan Dutta",
		"department": "Chemical Engineering",
		"mail": "deb20@iitk.ac.in",
		"phone": "+91 8981243540"
	},
	{
		"name": "Rakshit Kajala",
		"department": "Chemical Engineering",
		"mail": "rkajala@iitk.ac.in",
		"phone": "+91 8003496709"
	},
	{
		"name": "Uttkarsh Bhalika",
		"department": "Chemistry",
		"mail": "ubhalika20@iitk.ac.in",
		"phone": "+91 7999363620"
	},
	{
		"name": "Harshvardhan Pratap Singh",
		"department": "Computer Science and Engineering",
		"mail": "Hrshsengar20@iitk.ac.in",
		"phone": "+91 8851817208"
	},
	{
		"name": "Jaykumar J. Kothdiya",
		"department": "Computer Science and Engineering",
		"mail": "jay20@iitk.ac.in",
		"phone": "+91 9624030465"
	},
	{
		"name": "Rahul Bhure",
		"department": "Design",
		"mail": "rwb20@iitk.ac.in",
		"phone": "+91 7020950454"
	},
	{
		"name": "Shravan Tiwari",
		"department": "Design",
		"mail": "shravan20@iitk.ac.in",
		"phone": "+91 6307537606"
	},
	{
		"name": "Abhas Goyal",
		"department": "Economics",
		"mail": "abhasg@iitk.ac.in",
		"phone": "+91 9755357190"
	},
	{
		"name": "Chandan Kumar",
		"department": "Electrical Engineering",
		"mail": "chandank20@iitk.ac.in",
		"phone": "+91 9430029172"
	},
	{
		"name": "Utkarsh Adya",
		"department": "Electrical Engineering",
		"mail": "utkarsh20@iitk.ac.in",
		"phone": "+91 7003038142"
	},
	{
		"name": "abhishek kumar",
		"department": "Electrical Engineering",
		"mail": "Krabhishek20@iitk.ac.in",
		"phone": "+91 9872686648"
	},
	{
		"name": "Abhishek kumar",
		"department": "Earth Sciences",
		"mail": "abhishekk20@iitk.ac.in",
		"phone": "+91 8789745927"
	},
	{
		"name": "Ajay Mohan",
		"department": "Industrial and Management Engineering",
		"mail": "ajmohan20@iitk.ac.in",
		"phone": "+91 8556827724"
	},
	{
		"name": "Yash Taunk",
		"department": "Industrial and Management Engineering",
		"mail": "yashtaunk20@iitk.ac.in",
		"phone": "+91 9704316054"
	},
	{
		"name": "Shubham Awasthi",
		"department": "Industrial and Management Engineering",
		"mail": "sawasthi20@iitk.ac.in",
		"phone": "+91 8318511892"
	},
	{
		"name": "Keyur Panchal",
		"department": "Mechanical Engineering",
		"mail": "kpanchal20@iitk.ac.in",
		"phone": "+91 7778947661"
	},
	{
		"name": "Inderjeet singh",
		"department": "Mechanical Engineering",
		"mail": "inderjeet20@iitk.ac.in",
		"phone": "+91 9599718880"
	},
	{
		"name": "Ankur Kumar Kaushik",
		"department": "Mechanical Engineering",
		"mail": "akkaushik20@iitk.ac.in",
		"phone": "+91 7011941642"
	},
	{
		"name": "Rakesh Potnuru",
		"department": "Material Science and Engineering",
		"mail": "rakh@iitk.ac.in",
		"phone": "+91 8374284348"
	},
	{
		"name": "Jatin Jain",
		"department": "Material Science and Engineering",
		"mail": "jjainindia20@iitk.ac.in",
		"phone": "+91 7978023020"
	},
	{
		"name": "Mukesh Kumbhakar",
		"department": "Material Science and Engineering",
		"mail": "mukeshkr20@iitk.ac.in",
		"phone": "+91 7064183404"
	},
	{
		"name": "Sunny Choudhary",
		"department": "Materials Science Program",
		"mail": "sunny20@iitk.ac.in",
		"phone": "+91 9084603897"
	},
	{
		"name": "Akansha Sharma",
		"department": "Photonics Science and Engineering",
		"mail": "akanksha20@iitk.ac.in",
		"phone": "+91 8965020084"
	},
	{
		"name": "Nikhil Munakhiya",
		"department": "Stats",
		"mail": "nmunakhiya20@iitk.ac.in",
		"phone": "+91 9711137338"
	},
	{
		"name": "Shivani",
		"department": "Stats",
		"mail": "shivaniy20@iitk.ac.in",
		"phone": "+91 7011104111"
	}
]

const WEBHEAD = [
	{
		"name": "Ketan Chaturvedi",
		"position": "Web Head",
		"mail": "ketanchaturvedi.24@gmail.com",
		"phone": "+91-6386730160"
	}
]

const WEBEXEC = [
	{
		"name": "Harshit Raj",
		"position": "Web Executive",
		"mail": "harshit9304@gmail.com",
		"phone": "+91-7992271701"
	},
	{
		"name": "Kunwar Preet Singh",
		"position": "Web Executive",
		"mail": "nsng042@gmail.com",
		"phone": "+91-7009276430"
	}
]

export default function StudentTeam22() {
  return (
    <Page title="Placement Team 2020-21" >
    <DarkerBackgroundContainer>
      <br />
      <br />
      <Container>
      <SectionTitle>Overall Placement Coordinators</SectionTitle>
        <CustomAutofitGrid3>
          {TeamMembers.map((member, i) => {
            if (i < 3)
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
              );
            return <></>;
          }
          )}
        </CustomAutofitGrid3>
        <br />
        <CustomAutofitGrid3>
          {TeamMembers.map((member, i) => {
            if (i >= 3)
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
              );
            return <></>;
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
  );
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
`;
