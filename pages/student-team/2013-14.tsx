import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Aman Bapna',
    position: 'Overall Placement Coordinator/OPC',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Amit Saraswat',
    position: 'Overall Placement Coordinator/OPC',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Harsh Sejwar',
    position: 'Overall Placement Coordinator/OPC',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Vedant Khamesra',
    position: 'Overall Placement Coordinator/OPC',
    image: '/testimonials/iitk-logo.svg',
  },
];
export default function StudentTeam22() {
  return (
    <DarkerBackgroundContainer>
      <br />
      <SectionTitle>Student Team Members 2013-14</SectionTitle>
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
