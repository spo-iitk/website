import styled from 'styled-components';
import Accordion from 'components/Accordion';

interface FaqProps {
  faqs: any;
}

export default function FaqSection({faqs}: FaqProps) {
  return (
    <Wrapper>
      {faqs.map((singleFaq:any, idx:number) => (
        <div key={idx}>
        <Accordion title={singleFaq.title}>
          {singleFaq.body}
        </Accordion>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
