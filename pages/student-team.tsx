import NextImage from 'next/image';
import link from 'next/link';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Abhinav D Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Abhishek Kumar',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Akhila Mudupu',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Gyanendra Kumar',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Vishwaraj Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Pragati Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Sunay Chhajed',
    image: '/testimonials/iitk-logo.svg',
  },
];
const APC = [
  {
    name: 'Aditi Phogat',
  },
  {
    name: 'Afraz Jamal',
  },
  {
    name: 'Agrim Pandey',
  },
  {
    name: 'Ananya Agrawal',
  },
  {
    name: 'Ashutosh Sharma',
  },
  {
    name: 'Kashishpreet Kaur',
  },
  {
    name: 'Kavya Jalan',
  },
  {
    name: 'Khushbu Kumawat',
  },
  {
    name: 'Khushi Gautam',
  },
  {
    name: 'Nitya Aggarwal',
  },
  {
    name: 'Payal Singh',
  },
  {
    name: 'Pulkit Dhamija',
  },
  {
    name: 'Ravi Patel',
  },
  {
    name: 'Riktesh Singh',
  },
  {
    name: 'Rishabh Yadav',
  },
  {
    name: 'Rishi Malhotra',
  },
  {
    name: 'Sathwika',
  },
  {
    name: 'Shivangi Singh',
  },
  {
    name: 'Suraj Kumawat',
  },
  {
    name: 'Upen Mishra',
  },
  {
    name: 'Vandana Basrani',
  },
];
const WEBHEAD = [
  {
    name: 'Harshit Raj',
    position: 'Web Head',
    image: '/testimonials/iitk-logo.svg',
    phone: "(+91) 79922 71701",
    mail: "harshitr20@iitk.ac.in"
  },
  {
    name: 'Abhishek Shree',
    position: 'Web Head',
    image: '/testimonials/iitk-logo.svg',
    phone: "(+91) 79922 71701",
    mail: "shreea20@iitk.ac.in"
  },
]
const WEBEXEC = [
  {
    name: 'S Amandeep',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
  {
    name: 'Krishnansh Agarwal',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
  {
    name: 'Tejas Ahuja',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
  {
    name: 'Utkarsh Mishra',
    position: 'Web Executive',
    mail: "abc21@iitk.ac.in",
    phone: "(+91) 78955 75235"
  },
];



export default function StudentTeam() {
  return (
    <DarkerBackgroundContainer>
      <br />
      <SectionTitle>Student Team Members</SectionTitle>
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
      <SectionTitle>Previous Year Web Teams</SectionTitle>
      <Container>
        <div >
          <ul>
            <li>
              <Link href="./pytm/student-team-2021-22" >Team 2021-22</Link>
            </li>
            <li>
              <Link href="./students">Team 2020-21</Link>
            </li>
            <li>
              <Link href="./students">Team 2019-20</Link>
            </li>
            <li>
              <Link href="./students">Team 2018-19</Link>
            </li>
            <li>
              <Link href="./students">Team 2017-18</Link>
            </li>
            <li>
              <Link href="./students">Team 2016-17</Link>
            </li>
            <li>
              <Link href="./students">Team 2015-16</Link>
            </li>
            <li>
              <Link href="./students">Team 2014-15</Link>
            </li>
          </ul>
        </div>
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
