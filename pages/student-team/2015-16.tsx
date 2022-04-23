import NextImage from 'next/image';
import styled from 'styled-components';
import Page from 'components/Page';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import LinkedinIcon from 'components/LinkedinIcon';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
      "name": "Divya Pratap Singh",
      image: '/testimonials/PastYearTeamImages/15-16/Divya.jpg',
      "mail": "pratapd@iitk.ac.in",
      "phone": "+91 8604 926 466",
      "linkedin": "https://www.linkedin.com/profile/view?id=329781983"
  },
  {
      "name": "Jital Patel",
      image: '/testimonials/PastYearTeamImages/15-16/Jital.jpg',
      "mail": "jital@iitk.ac.in",
      "phone": "+91 8953 448 627",
      "linkedin": "https://www.linkedin.com/profile/view?id=309705980"
  },
  {
      "name": "Nimish Garg",
      image: '/testimonials/PastYearTeamImages/15-16/Nimish.jpg',
      "mail": "nimishg@iitk.ac.in",
      "phone": "+91 8953 441 447",
      "linkedin": "https://www.linkedin.com/profile/view?id=341522443"
  },
  {
      "name": "Sidhant Khatri",
      image: '/testimonials/PastYearTeamImages/15-16/Sidhant.jpg',
      "mail": "sidhantk@iitk.ac.in",
      "phone": "+91 9819 755 096",
      "linkedin": "https://www.linkedin.com/profile/view?id=341972785"
  },
  {
      "name": "Gaurav Kumar",
      image: '/testimonials/PastYearTeamImages/15-16/Gaurav.jpg',
      "mail": "gaukumar@iitk.ac.in",
      "phone": "+91 8800 404 524",
      "linkedin": "https://www.linkedin.com/profile/view?id=412050248"
  },
  {
      "name": "Dhanik Bharatkar",
      image: '/testimonials/PastYearTeamImages/15-16/Dhanik.jpg',
      "mail": "dhanik@iitk.ac.in",
      "phone": "+91 8953 434 522",
      "linkedin": "https://www.linkedin.com/profile/view?id=310701029"
  }
]

const APC = [
  {
      "name": "Aditya Agarwal",
      "mail": "agaditya@iitk.ac.in",
      "phone": "+91 7668801363"
  },
  {
      "name": "Akhil Mishra",
      "mail": "makhil@iitk.ac.in",
      "phone": "+91 8792334285"
  },
  {
      "name": "Ayushi Gupta",
      "mail": "ayushi@iitk.ac.in",
      "phone": "+91 7408228486"
  },
  {
      "name": "Azad Soni",
      "mail": "azadsoni@iitk.ac.in",
      "phone": "+91 7388870664"
  },
  {
      "name": "Manish Yadav",
      "mail": "ymanish@iitk.ac.in",
      "phone": "+91 7755047998"
  },
  {
      "name": "Rasesh Gupta",
      "mail": "rasesh@iitk.ac.in",
      "phone": "+91 7752894629"
  },
  {
      "name": "Riya Gupta",
      "mail": "riyag@iitk.ac.in",
      "phone": "+91 8756624468"
  },
  {
      "name": "Roopal Singh",
      "mail": "roopal@iitk.ac.in",
      "phone": "+91 7408223870"
  },
  {
      "name": "Neeraj Kumar",
      "mail": "neerajkr@iitk.ac.in",
      "phone": "+91 8175970987"
  },
  {
      "name": "Ranjeet Kumar",
      "mail": "ranjeetn@iitk.ac.in",
      "phone": "+91 7754916016"
  }
]
const ACD = [
  {
      "name": "Geetanjali",
      "department": "Aerospace Engineering",
      "mail": "geeta@iitk.ac.in",
      "phone": "+91 9005499720"
  },
  {
      "name": "Chetas Sinha",
      "department": "Biological Sciences and Bio-Engineering",
      "mail": "chetas@iitk.ac.in",
      "phone": "+91 8174805832"
  },
  {
      "name": "Shubham Bhavsar",
      "department": "Biological Sciences and Bio-Engineering",
      "mail": "bhavsars@iitk.ac.in",
      "phone": "+91 8563009828"
  },
  {
      "name": "Akash Pandey",
      "department": "CELP",
      "mail": "akashp@iitk.ac.in",
      "phone": "+91 9005393254"
  },
  {
      "name": "Amullya Kale",
      "department": "Chemical Engineering",
      "mail": "amullya@iitk.ac.in",
      "phone": "+91 9621558140"
  },
  {
      "name": "Ashish Singh",
      "department": "Chemical Engineering",
      "mail": "ashsingh@iitk.ac.in",
      "phone": "+91 8953435004"
  },
  {
      "name": "Manish Naharsingh Sagar",
      "department": "Chemical Engineering",
      "mail": "manishns@iitk.ac.in",
      "phone": "+91 9453835442"
  },
  {
      "name": "Manju Yadav",
      "department": "Chemistry",
      "mail": "manju@iitk.ac.in",
      "phone": "+91 7897416688"
  },
  {
      "name": "Akshay Dubey",
      "department": "Civil Engineering",
      "mail": "akshaydy@iitk.ac.in",
      "phone": "+91 8960228281"
  },
  {
      "name": "Rahul Gurjar",
      "department": "Computer Sciences and Engineering",
      "mail": "rahugur@iitk.ac.in",
      "phone": "+91 8953445661"
  },
  {
      "name": "Milan Someswar",
      "department": "Computer Sciences and Engineering",
      "mail": "milansom@iitk.ac.in",
      "phone": "+91 9794414906"
  },
  {
      "name": "Mitali Bhasin",
      "department": "Design",
      "mail": "mbhasin@iitk.ac.in",
      "phone": "+91 7755057900"
  },
  {
      "name": "Sooraj Ramachandran",
      "department": "Design",
      "mail": "sooraj@iitk.ac.in",
      "phone": "+91 7571937867"
  },
  {
      "name": "Sudhakar Ranjan",
      "department": "Earth Sciences",
      "mail": "ranjans@iitk.ac.in",
      "phone": "+91 7839984173"
  },
  {
      "name": "Mahendra Kumar Singh",
      "department": "Economics",
      "mail": "mahenks@iitk.ac.in",
      "phone": "+91 8400790523"
  },
  {
      "name": "Kritika Awasthi",
      "department": "Economics",
      "mail": "kritikaa@iitk.ac.in",
      "phone": "+91 8953433926"
  },
  {
      "name": "Praneeth Bobba",
      "department": "Electrical Engineering",
      "mail": "prbobba@iitk.ac.in",
      "phone": "+91 8172831024"
  },
  {
      "name": "Pankaj Pakhare",
      "department": "Electrical Engineering",
      "mail": "pankajrp@iitk.ac.in",
      "phone": "+91 -"
  },
  {
      "name": "Roopa Lahiri",
      "department": "Electrical Engineering",
      "mail": "krlahari@iitk.ac.in",
      "phone": "+91 9704167473"
  },
  {
      "name": "Rajender Nune",
      "department": "Electrical Engineering",
      "mail": "rnune@iitk.ac.in",
      "phone": "+91 8960740791"
  },
  {
      "name": "Saurav Roy Chaudhari",
      "department": "Electrical Engineering",
      "mail": "sauravr@iitk.ac.in",
      "phone": "+91 7839312896"
  },
  {
      "name": "Raj Nayan Samanth",
      "department": "Electrical Engineering",
      "mail": "rsamant@iitk.ac.in",
      "phone": "+91 8097411904"
  },
  {
      "name": "Prasenjit Paul",
      "department": "Environmental Engineering and Management",
      "mail": "ppaul@iitk.ac.in",
      "phone": "+91 8604926313"
  },
  {
      "name": "Sharad Kumar",
      "department": "Industrial Management and Engineering",
      "mail": "sharad@iitk.ac.in",
      "phone": "+91 9453835426"
  },
  {
      "name": "Priyanshu Jain",
      "department": "Material Sciences and Engineering",
      "mail": "priyansh@iitk.ac.in",
      "phone": "+91 9621604433"
  },
  {
      "name": "Ujjval Bansal",
      "department": "Material Sciences and Engineering",
      "mail": "ujjvalb@iitk.ac.in",
      "phone": "+91 7839984192"
  },
  {
      "name": "Bhupinder Dangi",
      "department": "Material Sciences and Engineering",
      "mail": "bkdangi@iitk.ac.in",
      "phone": "+91 7275166448"
  },
  {
      "name": "Shashank Singh",
      "department": "Material Science Program",
      "mail": "shalko@iitk.ac.in",
      "phone": "+91 9454687273"
  },
  {
      "name": "Alhad Parashtekar",
      "department": "Material Science Program",
      "mail": "alhadpar@iitk.ac.in",
      "phone": "+91 976381937"
  },
  {
      "name": "Viplove Pandey",
      "department": "Mathematics and Scientific Computing",
      "mail": "pviplove@iitk.ac.in",
      "phone": "+91 9793357079"
  },
  {
      "name": "Sandip Bisui",
      "department": "Mathematics and Scientific Computing",
      "mail": "sbisui@iitk.ac.in",
      "phone": "+91 8765696124"
  },
  {
      "name": "Kshitij Sareen",
      "department": "MBA",
      "mail": "kshitijs@iitk.ac.in",
      "phone": "+91 9953210473"
  },
  {
      "name": "Nikhil PK",
      "department": "MBA",
      "mail": "nikhilpk@iitk.ac.in",
      "phone": "+91 7275527697"
  },
  {
      "name": "Aman Rusia",
      "department": "Mechanical Engineering",
      "mail": "arusia@iitk.ac.in",
      "phone": "+91 9839985518"
  },
  {
      "name": "Shivam Choubey",
      "department": "Mechanical Engineering",
      "mail": "shivamc@iitk.ac.in",
      "phone": "+91 9621732255"
  },
  {
      "name": "Abhipraya Tiwari",
      "department": "Mechanical Engineering",
      "mail": "abhipray1@iitk.ac.in",
      "phone": "+91 9454041032"
  },
  {
      "name": "Abhishek Gajendra Singh",
      "department": "Mechanical Engineering",
      "mail": "abhigs@iitk.ac.in",
      "phone": "+91 7755048145"
  },
  {
      "name": "Lekhraj Dongre",
      "department": "Nuclear Engineering and Technology",
      "mail": "ldongre@iitk.ac.in",
      "phone": "+91 8172817679"
  }
]

export default function StudentTeam22() {
  return (
    <Page title="Student Team Members 2015-16" >
      <DarkerBackgroundContainer>
        <br />
        <Container>
          <SectionTitle>Overall Placement Coordinators</SectionTitle>
          <br />
          <br />
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
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;

const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const CustomAutofitGrid3 = styled(AutofitGrid)`
--autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;


const CustomAutofitGrid4 = styled(AutofitGrid)`
--autofit-grid-item-size: 25rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`;

const CustomBtnGroup = styled.div`
  display: grid;
  font-size: 1.8rem;
  text-decoration: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`;