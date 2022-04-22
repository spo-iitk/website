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
    image: '/testimonials/Gyanendra.jpg',
    phone: '(+91) 7301276032',
    mail: 'krgyan@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/gyanendra-kumar-iitk/'
  },
  {
    name: 'Sunay Chhajed',
    image: '/testimonials/Sunay.jpg',
    phone: '(+91) 7225824183',
    mail: 'sunay@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/sunay-chhajed/'
  },
  {
    name: 'Abhinav D Singh',
    image: '/testimonials/Abhinav.jpg',
    phone: '(+91) 9483296049',
    mail: 'abhids@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abhinav-d-singh-iitk/'
  },
  {
    name: 'Vishwaraj Singh',
    image: '/testimonials/Vishwaraj.jpg',
    phone: '(+91) 9877579129',
    mail: 'vrsingh@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/vishwaraj-singh-visraj/'
  },
  {
    name: 'Abhishek Kumar',
    image: '/testimonials/Abhishek.jpg',
    phone: '(+91) 9872686648',
    mail: 'krabhishek20@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/abhisjust4u'
  },
  {
    name: 'Akhila Mudupu',
    image: '/testimonials/Akhila.jpg',
    phone: '(+91) 9014921208',
    mail: 'akhilam21@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/akhila-mudupu-9b3890217'
  },
  {
    name: 'Pragati Singh',
    image: '/testimonials/Pragati.jpg',
    phone: '(+91) 8303065597',
    mail: 'spragati@iitk.ac.in',
    linkedin: 'https://www.linkedin.com/in/spragati/'
  },
];
const APC = [
  { name: "Aditi Phogat", phone: 7015560038, mail: "aditi20@iitk.ac.in" },
  { name: "Afraz Jamal", phone: 8239997985, mail: "afrazj20@iitk.ac.in" },
  { name: "Agrim Pandey", phone: 8604501747, mail: "agrimp20@iitk.ac.in" },
  { name: "Ananya Agrawal", phone: 8209464287, mail: "ananya20@iitk.ac.in" },
  { name: "Ashutosh Sharma", phone: 9425421164, mail: "ashutoshs20@iitk.ac.in" },
  { name: "Kashishpreet Kaur", phone: 7973983785, mail: "kkaur20@iitk.ac.in" },
  { name: "Kavya Jalan", phone: 6900805432, mail: "kavyajalan20@iitk.ac.in" },
  { name: "Khushbu Kumawat", phone: 9166221076, mail: "khushbuk20@iitk.ac.in" },
  { name: "Khushi Gautam", phone: 6307088928, mail: "khushig20@iitk.ac.in" },
  { name: "Nitya Aggarwal", phone: 9501887478, mail: "nityag20@iitk.ac.in" },
  { name: "Payal Singh", phone: 8306579903, mail: "payalk20@iitk.ac.in" },
  { name: "Pulkit Dhamija", phone: 7082039486, mail: "pulkitd20@iitk.ac.in" },
  { name: "Ravi Patel", phone: 8381955859, mail: "ravip20@iitk.ac.in" },
  { name: "Riktesh Singh", phone: 9696170669, mail: "rikteshs20@iitk.ac.in" },
  { name: "Rishabh Yadav", phone: 8827992444, mail: "rishabhy20@iitk.ac.in" },
  { name: "Rishi Malhotra", phone: 8076883009, mail: "rishim20@iitk.ac.in" },
  { name: "Sathwika", phone: 6281329383, mail: "sathwikach20@iitk.ac.in" },
  { name: "Shivangi Singh", phone: 8175888052, mail: "shivangis20@iitk.ac.in" },
  { name: "Suraj Kumawat", phone: 7023588839, mail: "skumawat20@iitk.ac.in" },
  { name: "Upen Mishra", phone: 7851928910, mail: "upen20@iitk.ac.in" },
  { name: "Vandana Basrani", phone: 8890406081, mail: "vandanab20@iitk.ac.in" },
];
const WEBHEAD = [
  {
    name: 'Harshit Raj',
    position: 'Web Head',
    phone: "(+91) 7992271701",
    mail: "harshitr20@iitk.ac.in",
    linkedin: "https://www.linkedin.com/in/1-Harshit/"
  },
  {
    name: 'Abhishek Shree',
    position: 'Web Head',
    phone: "(+91) 9955960224",
    mail: "shreea20@iitk.ac.in",
    linkedin: "https://www.linkedin.com/in/abhishekshree/"
  },
]
const WEBEXEC = [
  {
    name: 'S Amandeep',
    position: 'Web Executive',
    mail: "samandeep21@iitk.ac.in",
    phone: "(+91) 7075563909"
  },
  {
    name: 'Krishnansh Agarwal',
    position: 'Web Executive',
    mail: "krishnansh21@iitk.ac.in",
    phone: "(+91) 8317084914"
  },
  {
    name: 'Tejas Ahuja',
    position: 'Web Executive',
    mail: "tejasahuja21@iitk.ac.in",
    phone: "(+91) 8700794886"
  },
  {
    name: 'Utkarsh Mishra',
    position: 'Web Executive',
    mail: "utkarshm21@iitk.ac.in",
    phone: "(+91) 9399215049"
  },
];

const PREVTEAM = [
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
];

export default function StudentTeam() {
  return (
    <Page title="IITK Placement Coordinators" description="Feel free to reach out to us!">
      <DarkerBackgroundContainer>
        <SectionTitle>Overall Placement Coordinators</SectionTitle>
        <Container>
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
          <CustomAutofitGrid4>
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
          </CustomAutofitGrid4>
        </Container>
        <SectionTitle>Assistant Coordinators</SectionTitle>
        <Container>
          <CustomAutofitGrid3>
            {APC.map((member) => (
              <div key={member.name}>
                <Card>
                  <Title>{member.name}</Title>
                  <Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
                  <Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
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
                  {<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>}
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
    </Page >
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

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 20rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 15rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 50%;
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
