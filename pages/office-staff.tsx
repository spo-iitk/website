import NextImage from 'next-image-export-optimizer';
import Link from 'next/link'
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Kumar Srikanta Nayak',
    position: 'Career Development Officer',
    image: '/testimonials/srikanta_2022.jpg',
    email: "ksnayak@iitk.ac.in",
  },
  {
    name: 'Garima Singh',
    position: 'Junior Superintendent',
    image: '/testimonials/garima_2022.jpg',
    email: "",
  },
  {
    name: 'Praveen Kumar',
    position: 'Junior Assistant',
    image: '/testimonials/praveen_2022.jpg',
    email:"pravkmr@iitk.ac.in",
  },
  {
    name: 'Amarendra Mohanty',
    position: 'Deputy Project Manager',
    image: '/testimonials/amarendra_2022.jpg',
    email: "amaren@iitk.ac.in",
  },
];
export default function OfficeTeam() {
  return (
    <DarkerBackgroundContainer>
      <br />
      <SectionTitle>Staff Members</SectionTitle>
      <Container>
        <CustomAutofitGrid2>
          {TeamMembers.map((member, i) => {
            if(i < 2)
            return(
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
                <Description><Link href={`mailto:${member.email}`} passHref>{member.email}</Link></Description>
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
            if(i >= 2)
            return(
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
                <Description><Link href={`mailto:${member.email}`} passHref>{member.email}</Link></Description>
              </Card>
            </div>
          );
          return <></>;
            }
          )}
        </CustomAutofitGrid2>
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

const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

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