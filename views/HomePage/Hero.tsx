/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>IIT Kanpur</CustomOverTitle>
        <Heading>Students' Placement Office</Heading>
        <Description>
          The Indian Institute of Technology Kanpur is well known for its academic excellence and is often considered as the 'first stop'
          for a large number of industries and other organizations for recruiting undergraduate and post-graduate students. We truly
          appreciate the faith bestowed on us from several organizations and we look forward to continuing our relationship with them. The
          Students' Placement Office (SPO) is run and managed by an efficient team of office staff & students and handles all aspects of
          placements at IIT Kanpur. Right from contacting companies to managing all logistics of arranging for tests, pre-placement talks
          and conducting final interviews the SPO team provides it's best possible assistance to the recruiters. The hospitality and the
          functioning of SPO is applauded and well received by the visiting recruiters every year.
        </Description>
        <CustomButtonGroup>
          {/* <NextLink href="#whitepaper" passHref>
            <Button>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
          <Link href="/placement-coordinators" passHref>
            <Button>
              Contact <span>&rarr;</span>
            </Button>
          </Link>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  text-align: justify;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
