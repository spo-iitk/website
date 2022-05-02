import Link from "next/link"
import styled from "styled-components"

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
        <span>Email:</span> spo@iitk.ac.in
      </p>
      <p>
      <span>Desk No. :</span> 0512-259-4433/34
      </p>
      <p>
        <Link href="/placement-coordinators" passHref>Placement Coordinators</Link>
      </p>
      <p>
        <Link href="/office-staff" passHref>Administration</Link>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`
