import Link from 'next/link';
import styled from 'styled-components';
// import LinkGroup from 'components/LinkGroup';
import Page from 'components/Page';

import SectionTitle from 'components/SectionTitle';

export default function StudentsPage() {
  return (
    <Page title="For students" description="A collection of resources for students at IIT Kanpur.">
      <SectionTitle>Resources</SectionTitle>
      <br />
      <CustomBtnGroup>
        <div>
          <ul>
          <li>
            <Link href="/" passHref>Deffered Placement Policy</Link>
          </li>
          <li>
            <Link href="/" passHref>Placement Policy</Link>
          </li>
          <li>
            <Link href="/" passHref>Internship Policy</Link>
          </li>
          <li>
            <Link href="/" passHref>Leave Application</Link>
          </li>
          </ul>

        </div>
        <div>
          <ul>
          <li>
            <Link href="/" passHref>Project Verification Form</Link>
          </li>

          <li>
            <Link href="/" passHref>PPT Absence Form</Link>
          </li>

          <li>
            <Link href="/" passHref>Corporate Internship Waiver Form</Link>
          </li>

          <li>
            <Link href="/" passHref>List of Companies</Link>
          </li>
          </ul>

        </div>
      </CustomBtnGroup>
    </Page>
  );
}

const CustomBtnGroup = styled.div`
  display: grid;
  font-size: 1.8rem;
  text-decoration: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`;
