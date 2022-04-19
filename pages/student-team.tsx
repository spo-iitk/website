import NextImage from 'next-image-export-optimizer';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import LinkedinIcon from 'components/LinkedinIcon';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Gyanendra Kumar',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Sunay Chhajed',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Abhinav D Singh',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Vishwaraj Singh',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Abhishek Kumar',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Akhila Mudupu',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
  },
  {
    name: 'Pragati Singh',
    image: '/testimonials/iitk-logo.svg',
    phone: '(+91) 78965 78965',
    mail: 'xyz@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abc'
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
    phone: "(+91) 79922 71701",
    mail: "harshitr20@iitk.ac.in",
    linkedin: "https://linkedin.com/in/1-Harshit"
  },
  {
    name: 'Abhishek Shree',
    position: 'Web Head',
    phone: "(+91) 79922 71701",
    mail: "shreea20@iitk.ac.in",
    linkedin: "https://linkedin.com/in/abc"
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
    mail: "utkarshm21@iitk.ac.in",
    phone: "(+91) 93992 15049"
  },
];
export default function StudentTeam() {
  return (
    <Page title="IITK Placement Coordinators" description="Feel free to reach out to us!">
      <DarkerBackgroundContainer>
        <SectionTitle>Overall Placement Coordinators</SectionTitle>
        <Container>
          <CustomAutofitGrid2>
            {TeamMembers.map((member, i) => {
              if (i < 4)
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
          </CustomAutofitGrid2>
          <br />
          <CustomAutofitGrid3>
            {TeamMembers.map((member, i) => {
              if (i >= 4)
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
          <CustomAutofitGrid3>
            {APC.map((member) => (
              <div key={member.name}>
                <Card>
                  <Title>{member.name}</Title>
                </Card>
              </div>
            ))}
          </CustomAutofitGrid3>
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
                  {/* <small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small> */}
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
