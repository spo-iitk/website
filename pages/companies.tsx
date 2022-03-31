import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import Page from 'components/Page';
import Section from 'components/Section';
import { media } from 'utils/media';
import FaqSection from 'views/PricingPage/FaqSection';

const steps = [
  {
    title: '1',
    description:'Invitations of the onset of the Placements with the tentative itinerary of the placement process along with the Placement brochure are sent to the company.',
  },
  {
    title: '2',
    description:'After a company expresses interest for participation, the company is sent a Job Announcement Form to share the details of the profile offered.',
  },
  {
    title: '3',
    description:'An account is created for the company on The Placement Automation System (PAS), an interactive portal, that lets the companies view the profiles of students interested in the Job Profile',
  },
  {
    title: '4',
    description:'Pre-Placement Talks (PPTs) are scheduled for companies to interact with the students based upon mutual agreement on travelling dates.',
  },
  {
    title: '5',
    description:'Meanwhile, students can access the company profile and prepare themselves for the PPT.',
  },
  {
    title: '6',
    description:'Before the PPT, students need to submit their resumes according to the deadline set by the company on the PAS.',
  },
  {
    title: '7',
    description:'Companies are informed about their slots for the placement season which starts from the first of December.',
  },
  {
    title: '8',
    description:'Slotting is done based on: Student Preferences,Work profile,Job Location,Compensation package,Career Prospects and student Intake.',
  },
  {
    title: '9',
    description:'Based upon student profiles and/or test performances, shortlist of students is provided before the commencement of placement session.',
  },
  {
    title: '10',
    description:'Shortlisted candidates then appear for the Placement Process of the company',
  },
  {
    title: '11',
    description:'Company submits a list of finally selected students along with a waitlist at the end of the day/slot.',
  },
  {
    title: '12',
    description:'A student may get multiple offers at the end of a day/slot, in such a case he/she is allowed to choose one of them.',
  },
  {
    title: '13',
    description:'A student must make a decision within two hours of the end of the day/slot.',
  },
  {
    title: '14',
    description:'Once a student has been offered a job, he/she is out of the placement process. This is in compliance with our One Student, One Job Policy',
  },
  {
    title: '15',
    description: 'The complete process is governed by SPO\'s placement policy which is shared with the companies at the start of the process.'
  }
]

const faqlist = [
  {
    idx: 1,
    title: "Question",
    body: "Answer"
  },
]

export default function CompaniesPage() {
  return (
    <Page title="For companies" description="A collection of resources for companies to recruit at IIT Kanpur.">
      <Section title="Procedure">
        <Container>
          <CustomAutofitGrid>
            {steps.map((singleStep, idx) => (
              <BasicCard key={singleStep.title} {...singleStep} />
            ))}
          </CustomAutofitGrid>
        </Container>
      </Section>
      <Section title="Placement Policy">
        <ol>
          <li>
            The Students&apos; Placement Office follows a strict <strong>&quot;One Student, One Job Policy&quot;</strong>. Once a student is
            offered a job, he/she is out of the placement process
          </li>
          <li>
            On completion of the recruitment procedure, the company needs to submit the final list of offers in a closed envelope to the
            placement office. The offers will be opened at the end of the slot* when all companies finish their process
          </li>
          <li>
            No <strong>&quot;On the Spot&quot;</strong> offers should be made nor can any clue be given to any of the candidates during the
            placement interview.
          </li>
          <li>
            IIn case a candidate receives multiple offers, the candidate has to make a choice at the end of the slot. The companies will be
            intimated about the final choice of the candidate two hours after the end of the slot, or receipt of the offers, whichever is
            later.
          </li>
          <li>
            Since there is a high probability of multiple offers, the companies have to furnish a waiting list to the placement office along
            with the final offers. In case a student who is extended multiple offers chooses the other company, the first candidate in the
            waiting list moves up in the final offer list. The waitlist will not be disclosed to the students and will be released on a per
            student basis{' '}
          </li>
          <li>
            Companies are advised to be in touch with the Placement volunteers and staff at all times. They should not entertain any direct
            contact from the students appearing in the placement process. In case of such a situation, the company must bring this
            immediately to the notice of the Placement Office.
          </li>
          <li>
            In case of a delay of more than 60 days from the date of convocation (last week of June), the company has to pay the student the
            compensation for the delayed period.
          </li>
          <br />*{' '}
          <small>
            {' '}
            The slot allotted for the selection procedure by the placement office to the company is of 8 hrs. Although the companies are
            allowed to conduct tests beforehand to shortlist the candidates
          </small>
        </ol>
      </Section>
      <Section title="Internship Procedure">
        <p>
          Indian Institute of Technology, Kanpur, firmly believes that internships provide the students with an unrestrained opportunity to explore the practical insights of the industry and the corporate world. At the same time, your firm would benefit by enlisting the services of budding scholars and enthusiastic assimilators who would be priceless assets in the undergoing projects.
          <br />
          <br />
          The Students&apos; Placement Office of IIT Kanpur is the body that organizes the internship season in the institute. Students will be available for the period starting from the 1st week of May to the 3rd week of July, 2020.
          <br />
          <br />
          You can find the Internship Proforma here. Kindly provide your company&apos;s Profile along with details of the selection process and the eligible departments. The institute brochure containing information about the academic programmes and the curriculum followed by various departments can be downloaded from here. It would be highly appreciated if you get in touch with our office at your earliest possible convenience to finalize the date of your visit.
        </p>
      </Section>
      <br />
      <br />
      <hr />
      <Section title="Facilities">
      <ul>
        <li>Pickup services on payment basis from Lucknow(Amausi) Airport , Kanpur Airport and Kanpur Central Railway Station. Chopper rides from Lucknow Airport to IIT Kanpur campus can be availed on prior request to the Placement Office.</li>
        <li>Fully equipped Seminar and conference rooms for Group discussions and Personal Interviews.</li>
        <li>Centrally air conditioned Auditorium and Lecture halls, fully equipped with latest multimedia and Wi-Fi for Pre-Placement Talks(PPTs), Workshops, tests etc.</li>
        <li>Facility of Tele Conferencing and Video Conferencing.</li>
        <li>On campus accommodation in Visitors&apos; Guest House for the recruiting panel <small>(subject to availability)</small>.</li>
        <li>Access to all student profiles via a highly efficient and effective Placement Automation System (PAS).</li>
        <li>Round the clock assistance by the students&apos; volunteers at each level of placement process.</li>
        <li>Highly motivated and experienced staff to coordinate the whole process.</li>
      </ul>
      </Section>
      <br />
      <hr />
      <Section title="FAQs">
        <FaqSection faqs={faqlist}/>
      </Section>
    </Page>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
