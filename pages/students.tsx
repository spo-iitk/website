import Link from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
// import ButtonGroup from 'components/ButtonGroup';
import Page from 'components/Page';

import SectionTitle from 'components/SectionTitle';

export default function StudentsPage() {
  return (
    <Page title="For students" description="A collection of resources for students at IIT Kanpur.">
      <SectionTitle>Resources</SectionTitle>
      <br />
      <CustomBtnGroup>
        <div>
          <Link href="/student-team" passHref>
            <Button>Deffered Placement Policy</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Placement Policy</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Internship Policy</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Contact</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Contact</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Contact</Button>
          </Link>
        </div>
        <div>
          <Link href="/student-team" passHref>
            <Button>Contact</Button>
          </Link>
        </div>
      </CustomBtnGroup>
    </Page>
  );
}

const CustomBtnGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`;
