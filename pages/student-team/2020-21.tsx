import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';


const TeamMembers = [
  {
    name: 'Sanket Gaggar',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Himanshu Pandey',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Raj Gohil',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Rishu Katiyar',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Vedanth Venkatakrishnan',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Bhavesh Loungani',
    position: 'Overall Placement Coordinator',
    image: '/testimonials/iitk-logo.svg',
  },
];

const WEBEXEC = [
  {
    name: 'Ketan Chaturvedi',
    position: 'Web Executive',
    mail: "	ketanchaturvedi.24@gmail.com",
    phone: "(+91) 6386730160"
  },
  {
    name: 'Atin Vikram Singh',
    position: 'Web Executive',
    mail: "shubh1012agrawal@gmail.com",
    phone: "(+91) 7838667354"
  },
  
];

const WEBHEAD = [
  {
    name: 'Atin Vikram Singh',
    position: 'Web Head',
    phone: "(+91) 9452179249",
    mail: "atinsingh25@gmail.com",
   
  },
  
]

export default function StudentTeam22() {
  return (
    <DarkerBackgroundContainer>
      <br />
      <SectionTitle>Student Team Members 2019-20</SectionTitle>
      <Container>
        <CustomAutofitGrid>
          {TeamMembers.map((member) => (
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
              </Card>
            </div>
          ))}
        </CustomAutofitGrid>
      </Container>
      <br />
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
                  {/* <small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small> */}
                </Card>
              </div>
            ))}
          </CustomAutofitGrid2>
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
    --autofit-grid-item-size: 30rem;
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

const CustomAutofitGrid4 = styled(AutofitGrid)`
--autofit-grid-item-size: 25rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
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

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`;