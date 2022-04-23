import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import LinkedinIcon from 'components/LinkedinIcon';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
      "name": "Aman Bapna",
      image: '/testimonials/PastYearTeamImages/13-14/amanb.jpg',
      "mail": "amanb@iitk.ac.in",
      "phone": "",
      "linkedin": "#"
  },
  {
      "name": "Amit Saraswat",
      image: '/testimonials/PastYearTeamImages/13-14/amitsar.jpg',
      "mail": "amitsar@iitk.ac.in",
      "phone": "",
      "linkedin": "#"
  },
  {
      "name": "Harsh Sejwar",
      image: '/testimonials/PastYearTeamImages/13-14/hrshsej.jpg',
      "mail": "hrshsej@iitk.ac.in",
      "phone": "+91 97935 70664",
      "linkedin": "mailto:hrshsej@iitk.ac.in"
  },
  {
      "name": "Vedant Khamesra",
      image: '/testimonials/PastYearTeamImages/13-14/vedantk.jpg',
      "mail": "vedantk@iitk.ac.in",
      "phone": "+91 76074 57175",
      "linkedin": "mailto:vedantk@iitk.ac.in"
  }
]

export default function StudentTeam22() {
  return (
    <Page title="Student Team Members 2013-14" >
    <DarkerBackgroundContainer>
      <br />
      <br />
      <Container>
      <SectionTitle>Overall Placement Coordinators</SectionTitle>
        <CustomAutofitGrid2>
          {TeamMembers.map((member, i) => {
            if (i < 2)
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
        <CustomAutofitGrid2>
          {TeamMembers.map((member, i) => {
            if (i >= 2)
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
      </Container>
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
