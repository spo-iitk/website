import NextImage from 'next-image-export-optimizer';
import styled from 'styled-components';
import Page from 'components/Page';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import LinkedinIcon from 'components/LinkedinIcon';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
      "name": "Yogesh Kumar",
      image: '/testimonials/PastYearTeamImages/19-20/yogesh.jpg',
      "mail": "kumaryog@iitk.ac.in",
      "phone": "+91 9794 966 036",
      "linkedin": "https://www.linkedin.com/in/yogesh-kumar-a73737154/"
  },
  {
      "name": "Mohammad Anas",
      image: '/testimonials/PastYearTeamImages/19-20/anas.jpg',
      "mail": "mdanas@iitk.ac.in",
      "phone": "+91 8090 300 463",
      "linkedin": "https://www.linkedin.com/in/anas-abdullah08"
  },
  {
      "name": "Moulik Jain",
      image: '/testimonials/PastYearTeamImages/19-20/moulik.jpg',
      "mail": "mlkjain@iitk.ac.in",
      "phone": "+91 9981 635 341",
      "linkedin": "https://www.linkedin.com/in/mlkjain"
  },
  {
      "name": "Nishu Jain",
      image: '/testimonials/PastYearTeamImages/19-20/nishu.jpg',
      "mail": "nishuj@iitk.ac.in",
      "linkedin": "https://in.linkedin.com/in/nishujain94"
  },
  {
      "name": "Vaibhav Agarwal",
      image: '/testimonials/PastYearTeamImages/19-20/vaibhav.jpg',
      "mail": "vaibhavg@iitk.ac.in",
      "phone": "+91 9453 620 663",
      "linkedin": "https://www.linkedin.com/in/vaibhav31ag"
  },
  {
      "name": "Apoorva Singh",
      image: '/testimonials/PastYearTeamImages/19-20/apoorva.jpg',
      "mail": "apoorvas@iitk.ac.in",
      "phone": "+91 9415 390 833",
      "linkedin": "https://www.linkedin.com/in/apoorvasingh0803"
  }
]

const APC = [
  {
      "name": "Rishabh Jain",
      "mail": "rishabhj@iitk.ac.in",
      "phone": "+91 8802222434"
  },
  {
      "name": "Ayush Gupta",
      "mail": "ayushgta@iitk.ac.in",
      "phone": "+91 8400197180"
  },
  {
      "name": "Sanket Gaggar",
      "mail": "gsanket@iitk.ac.in",
      "phone": "+91 7021414681"
  },
  {
      "name": "Bhavesh Loungani",
      "mail": "bhaveshl@iitk.ac.in",
      "phone": "+91 9079721746"
  },
  {
      "name": "Abhishek Bhatia",
      "mail": "avishek@iitk.ac.in",
      "phone": "+91 7589284676"
  },
  {
      "name": "Azmeera koteshwar Rao",
      "mail": "kotesha@iitk.ac",
      "phone": "+91 8179860875"
  },
  {
      "name": "Himanshu Pandey",
      "mail": "hpandey@iitk.ac.in",
      "phone": "+91 9123438377"
  },
  {
      "name": "Krishna Deo",
      "mail": "kdeo@iitk.ac.in",
      "phone": "+91 8240942539"
  },
  {
      "name": "Monika Rathore",
      "mail": "monikart@iitk.ac.in",
      "phone": "+91 9340110522"
  },
  {
      "name": "Preet Patel",
      "mail": "preetp@iitk.ac.in",
      "phone": "+91 9106910477"
  },
  {
      "name": "Raghav Agrawal",
      "mail": "araghav@iitk.ac.in",
      "phone": "+91 7999064643"
  },
  {
      "name": "Raghav Maheshwari",
      "mail": "ragmah@iitk.ac.in",
      "phone": "+91 8779752853"
  },
  {
      "name": "Rishu Katiyar",
      "mail": "rishu@iitk.ac.in",
      "phone": "+91 7355964094"
  },
  {
      "name": "Rohit Lambora",
      "mail": "rohitl@iitk.ac.in",
      "phone": "+91 8708142604"
  },
  {
      "name": "Samarthya Sahu",
      "mail": "sams@iitk.ac.in",
      "phone": "+91 9079725209"
  },
  {
      "name": "Sasank Chindirala",
      "mail": "sasank@iitk.ac.in",
      "phone": "+91 9005735756"
  },
  {
      "name": "Vedanth Venkatakrishnan",
      "mail": "vedanthv@iitk.ac.in",
      "phone": "+91 9198995614"
  }
]

const ACD = [
  {
      "name": "Sindhuja Priyadarshini",
      "department": "Aerospace Engineering",
      "mail": "sindhup@iitk.ac.in",
      "phone": "+91 8572871092"
  },
  {
      "name": "Trishank Baghel",
      "department": "Aerospace Engineering",
      "mail": "trishank@iitk.ac.in",
      "phone": "+91 8989176212"
  },
  {
      "name": "Vishal Vyas",
      "department": "Aerospace Engineering",
      "mail": "vvyas@iitk.ac.in",
      "phone": "+91 9461614941"
  },
  {
      "name": "Siddhanta Mhambrey",
      "department": "Biological Science and Bioengineering",
      "mail": "sidpm@iitk.ac.in",
      "phone": "+91 7318018969"
  },
  {
      "name": "Prerna Kaura",
      "department": "Chemical Engineering",
      "mail": "prernak@iitk.ac.in",
      "phone": "+91 8469591494"
  },
  {
      "name": "Tanya Mishra",
      "department": "Chemical Engineering",
      "mail": "tanyam@iitk.ac.in",
      "phone": "+91 7898896257"
  },
  {
      "name": "Dhruv Sharma",
      "department": "Chemistry",
      "mail": "dsharma@iitk.ac.in",
      "phone": "+91 9991629944"
  },
  {
      "name": "Shikhar Dayal",
      "department": "Civil Engineering",
      "mail": "shikhard@iitk.ac.in",
      "phone": "+91 9431261736"
  },
  {
      "name": "Nishant Sachan",
      "department": "Civil Engineering",
      "mail": "nishnts@iitk.ac.in",
      "phone": "+91 6387435979"
  },
  {
      "name": "Aastha Sharma",
      "department": "Cognitive Science",
      "mail": "aasthas@iitk.ac.in",
      "phone": "+91 9871566233"
  },
  {
      "name": "Harshit Gupta",
      "department": "Computer Science and Engineering",
      "mail": "guptah@iitk.ac.in",
      "phone": "+91 8171118643"
  },
  {
      "name": "Siraj Singh Sandhu",
      "department": "Computer Science and Engineering",
      "mail": "sssandhu@iitk.ac.in",
      "phone": "+91 9781522764"
  },
  {
      "name": "Sreyoshi Saha",
      "department": "Design",
      "mail": "sreyoshi@iitk.ac.in",
      "phone": "+91 7715015730"
  },
  {
      "name": "Avs Vishal",
      "department": "Earth Sciences",
      "mail": "avvishal@iitk.ac.in",
      "phone": "+91 7095266618"
  },
  {
      "name": "Garvit Tak",
      "department": "Economics",
      "mail": "gtak@iitk.ac.in",
      "phone": "+91 7318018643"
  },
  {
      "name": "Lisha kumari",
      "department": "Electrical Department",
      "mail": "lishaa@iitk.ac.in",
      "phone": "+91 8218472065"
  },
  {
      "name": "Sobir Ali",
      "department": "Electrical Department",
      "mail": "sobir@iitk.ac.in",
      "phone": "+91 9779939484"
  },
  {
      "name": "Danish Nawaz",
      "department": "Industrial and Management Engineering",
      "mail": "danisn@iitk.ac.in",
      "phone": "+91 8582952206"
  },
  {
      "name": "Yash Gupta",
      "department": "Industrial and Management Engineering",
      "mail": "ygupta@iitk.ac.in",
      "phone": "+91 7755991471"
  },
  {
      "name": "Akhilesh Kumar Gupta",
      "department": "Materials Science and Engineering",
      "mail": "akhilg@iitk.ac.in",
      "phone": "+91 8318645465"
  },
  {
      "name": "Ireddy Nikhila",
      "department": "Material Science Engineering",
      "mail": "nikhila@iitk.ac.in",
      "phone": "+91 8897171429"
  },
  {
      "name": "Soham De Roy",
      "department": "Material Science Programme",
      "mail": "sohamdr@iitk.ac.in",
      "phone": "+91 9123939691"
  },
  {
      "name": "Vamsi Krishna Badri",
      "department": "Mathematics and Scientific Computing",
      "mail": "badriv@iitk.ac.in",
      "phone": "+91 8639763559"
  },
  {
      "name": "Prateek Gupta",
      "department": "Mechanical Engineering",
      "mail": "prateekg@iitk.ac.in",
      "phone": "+91 8619003251"
  },
  {
      "name": "Gajji Sai Kiran",
      "department": "Mechanical Engineering",
      "mail": "kiran@iitk.ac.in",
      "phone": "+91 9559117893"
  },
  {
      "name": "Madipadaga Aditya",
      "department": "Photonics Science Engineering",
      "mail": "adityara@iitk.ac.in",
      "phone": "+91 9618288340"
  },
  {
      "name": "Arijit Paul",
      "department": "Statistics",
      "mail": "ajtpaul@iitk.ac.in",
      "phone": "+91 8420233295"
  }
]

const WEBHEAD = [
  {
      "name": "Vinayak Trivedi",
      "position": "Web Head",
      "mail": "vinayaktrivedi7@gmail.com",
      "phone": "+91 8887563887"
  }
]

const WEBEXEC = [
  {
      "name": "Atin Vikram Singh",
      "position": "Web Executive",
      "mail": "atinsingh25@gmail.com",
      "phone": "+91 9452179249"
  }
]

export default function StudentTeam22() {
  return (
    <Page title="Student Team Members 2019-20" >
      <DarkerBackgroundContainer>
        <br />
        <Container>
          <SectionTitle>Overall Placement Coordinators</SectionTitle>
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