import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Ayush Agrawal',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Akarsh Mittal',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Shruti Srivastava',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Amisha Shahdeo',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Manali Patil',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Utkarsh Verma',
    image: '/testimonials/iitk-logo.svg',
  },
  
];
const APC = [
  {
    name: 'Abhinav D Singh',
  },
  {
    name: 'Abhishek Verma',
  },
  {
    name: 'Adarsh Anand',
  },
  {
    name: 'Akshita',
  },
  {
    name: 'Anchal Gupta',
  },
  {
    name: 'Asmita Nimesh',
  },
  {
    name: 'Ayushi Arora',
  },
  {
    name: 'Gyanendra Kumar',
  },
  {
    name: 'Jitesh Hemji',
  },
  {
    name: 'Kritarth Lohomi',
  },
  {
    name: 'Neelabh Singhania',
  },
  {
    name: 'Nitish Yadav',
  },
  {
    name: 'Prachi Priya',
  },
  {
    name: 'Pragati Singh',
  },
  {
    name: 'Rishabh Katiyar',
  },
  {
    name: 'Siddharth Kumar Singh',
  },
  {
    name: 'Siddharth Mishra',
  },
  {
    name: 'Sunay Chhajed',
  },
  {
    name: 'Tanisha Agrawal',
  },
  {
    name: 'Vishwaraj Singh',
  },
  
];
const WEBHEAD = [
  {
    name: 'Ketan Chaturvedi',
    position: 'Web Head',
    image: '/testimonials/iitk-logo.svg',
    phone: "(+91) 6386730160",
    mail: "ketanchaturvedi.24@gmail.com"
  },
]

const WEBEXEC = [
  
  {
    name: 'Harshit Raj',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
  {
    name: 'Kunwar Preet Singh',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
  
];

export default function StudentTeam() {
    return (
      <DarkerBackgroundContainer>
        <br />
        <SectionTitle>Student Team Members 2021-22</SectionTitle>
        <br />
        <SectionTitle>Overall Placement Coordinators</SectionTitle>
        <Container>
          <CustomAutofitGrid>
            {TeamMembers.map((member, i) => {
              if (i < 3)
                return (
                  <div key={member.name}>
                    <Card>
                      {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                      <Title>{member.name}</Title>
                    </Card>
                  </div>
                );
              return <></>;
            }
            )}
          </CustomAutofitGrid>
          <br />
          <CustomAutofitGrid4>
            {TeamMembers.map((member, i) => {
              if (i >= 3)
                return (
                  <div key={member.name}>
                    <Card>
                      {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                      <Title>{member.name}</Title>
                    </Card>
                  </div>
                );
              return <></>;
            }
            )}
          </CustomAutofitGrid4>
        </Container>
        <SectionTitle>Assistant Placement Coordinators</SectionTitle>
        <Container>
          <CustomAutofitGrid>
            {APC.map((member) => (
              <div key={member.name}>
                <Card>
                  <Title>{member.name}</Title>
                </Card>
              </div>
            ))}
          </CustomAutofitGrid>
        </Container>
        <SectionTitle>Web Team</SectionTitle>
        <Container>
          <CustomAutofitGrid>
            {WEBHEAD.map((member) => (
              <div key={member.name}>
                <Card>
                  {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                  <Title>{member.name}</Title>
                  <Description>{member.position}</Description>
                  <Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
                  <Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
                </Card>
              </div>
            ))}
          </CustomAutofitGrid>
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
        <br />
      </DarkerBackgroundContainer>
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
  
  const CustomAutofitGrid = styled(AutofitGrid)`
    --autofit-grid-item-size: 40rem;
  
    ${media('<=tablet')} {
      --autofit-grid-item-size: 25rem;
    }
  
    ${media('<=phone')} {
      --autofit-grid-item-size: 100%;
    }
  `;
  
  const CustomAutofitGrid4 = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;
  
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
      margin-top: 10rem;
    }
  `;
  
  const Link = styled.a`
    text-decoration: none;
    color: var(--primary);
  `;