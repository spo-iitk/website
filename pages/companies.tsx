import Link from 'next/link';
import styled from 'styled-components';
import Accordion from 'components/Accordion';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Button from 'components/Button';
import Container from 'components/Container';
import Page from 'components/Page';
import Section from 'components/Section';
import { media } from 'utils/media';
import FaqSection from 'views/PricingPage/FaqSection';
const steps = [
  {
    title: '1',
    description: "The Students' placement office appoints a point of contact(PoC) for you.",
  },
  {
    title: '2',
    description:
      'You will need to contact your PoC or any placement coordinators (or mail to spo@iitk.ac.in) for your account credentials on the Recruitment Automation system(RAS).',
  },
  {
    title: '3',
    description:
      'You need to fill out a Job Announcement Form (JAF) / Internship Proforma (IP) in the portal to share the offered profile details.',
  },
  {
    title: '4',
    description:
      'After verification of details by PoC, job/internship openings are visible on the portal as per dates decided by the placement team.',
  },
  {
    title: '5',
    description: 'Students need to submit their resumes before the deadline set for the company on the RAS.',
  },
  {
    title: '6',
    description: 'Companies conduct their PPT and tests/screening process after finalizing the schedule with the placement team.',
  },
  {
    title: '7',
    description: 'The company submits the final list of shortlisted students for the interview process.',
  },
  {
    title: '8',
    description: 'The placement office allots dates of interviews and PoC for the interview process.',
  },
  {
    title: '9',
    description: 'Companies need to confirm the dates with the placement office over email.',
  },
  {
    title: '10',
    description: 'Companies provide the list of selected and waitlisted students at the end of their interview slot.',
  },
  {
    title: '11',
    description: 'The Placement office notifies the companies regarding the acceptance of selected students.',
  },
  {
    title: '12',
    description: 'The company sends the offer letter to the selected candidates consistent with JAF/IP.',
  },
];

const faqlist = [
  {
    idx: 1,
    title: 'What are the different ways a company can hire students from the campus?',
    body: 'The different ways of recruiting students are: Campus Recruitment Program in which final year students participate. Summer Internship Program for pre final year students which can be converted into a pre placement offer.',
  },
  {
    idx: 2,
    title: 'How can a company register itself for the Campus Recruitment Program?',
    body: 'To participate in the Campus Recruitment Program, a company must first contact the placement office or register on the website. The company is then sent the login details which would let them login in our Placement Automation System (PAS) enabling them to post job opportunities & see the profiles of students interested in their job opening. You can also find the detailed Placement Procedure here',
  },
  {
    idx: 3,
    title: 'Is there any fee associated with the process?',
    body: 'No. There is no fees associated with the registration or the placement process.',
  },
  {
    idx: 4,
    title: 'When does the recruitment program start?',
    body: "The recruitment season is held in December every year and the PPT's can be held anytime between 10th of August to mid-November. For a detailed itinerary, Please refer to the Employer Calendar",
  },
  {
    idx: 5,
    title: 'What is the procedure to schedule a pre-placement talk (PPT)?',
    body: 'A company will only be allowed to hold its PPT after filling up the job announcement form. A typical pre placement session is scheduled for 60 minutes. In view of the academic calendar of the students, the session are scheduled between 6PM to 9PM on weekdays, and between 10AM and 5PM hours on Saturdays and Sundays. Student volunteers will get in touch with the company to fix a mutual convenient time for the session.',
  },
  {
    idx: 6,
    title: 'What kind of information do the students expect in PPTs?',
    body: 'The pre-placement talk is a platform for interaction between the company and the students. The presentation is followed by a Q&A session where students interact with company officials to get a better understanding of the company and potential roles. The important insights that the students expect from the PPT are:\n\nProfile and reputation of the corporation\nCareer roles and responsibilities offered in different types of profiles\nLocations where the student is likely to be posted\nCompensation packages',
  },
  {
    idx: 7,
    title: 'On what basis is the slot allotted to a company for the final placement?',
    body: 'Slotting is done subject to the following parameters:Student Preferences, Work profile, Compensation package, Career Prospects, Student Intake, and Past relationship with IIT Kanpur',
  },
  {
    idx: 8,
    title: 'What are the infrastructural facilities available on the campus for the placement process?',
    body: 'The campus is equipped with state of the art communication, computing, and presentation facilities to facilitate a smooth placement process:Teleconferencing and video conferencing facility, Linux and windows lab for online tests, Centrally air conditioned auditorium, lecture halls, seminar and conference rooms for presentations, group discussions and interviews.',
  },
  {
    idx: 9,
    title: 'Are there multiple companies recruiting in the same slot? How is the case of multiple offers resolved?',
    body: 'Yes, there are multiple companies recruiting in the same slot.The results of all the companies are announced at the end of the slot and if a student gets multiple offers then he is allowed to choose between one of them and inform the office of his decision before the beginning of the next slot.',
  },
  {
    idx: 10,
    title: 'Can a company interview the students already placed in other company?',
    body: 'IIT Kanpur follows a One student; One job policy so once the job is registered against the student, he/she is not entitled to sit for any other company.',
  },
  {
    idx: 11,
    title: 'Is there any facility for the accommodation available on the campus?',
    body: "On campus accommodation on payment basis in visitors' guest house is available subject to availability. For alternate arrangements, the list of hotels is available here",
  },
];

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
          Indian Institute of Technology, Kanpur, firmly believes that internships provide the students with an unrestrained opportunity to
          explore the practical insights of the industry and the corporate world. At the same time, your firm would benefit by enlisting the
          services of budding scholars and enthusiastic assimilators who would be priceless assets in the undergoing projects.
          <br />
          <br />
          The Students&apos; Placement Office of IIT Kanpur is the body that organizes the internship season in the institute. Students will
          be available for the period starting from the 1st week of May to the 3rd week of July, 2020.
          <br />
          <br />
          You can find the Internship Proforma here. Kindly provide your company&apos;s Profile along with details of the selection process
          and the eligible departments. The institute brochure containing information about the academic programmes and the curriculum
          followed by various departments can be downloaded from here. It would be highly appreciated if you get in touch with our office at
          your earliest possible convenience to finalize the date of your visit.
        </p>
      </Section>
      <br />
      <br />
      <hr />
      <Section title="Facilities">
        <ul>
          <li>
            Pickup services on payment basis from Lucknow(Amausi) Airport , Kanpur Airport and Kanpur Central Railway Station. Chopper rides
            from Lucknow Airport to IIT Kanpur campus can be availed on prior request to the Placement Office.
          </li>
          <li>Fully equipped Seminar and conference rooms for Group discussions and Personal Interviews.</li>
          <li>
            Centrally air conditioned Auditorium and Lecture halls, fully equipped with latest multimedia and Wi-Fi for Pre-Placement
            Talks(PPTs), Workshops, tests etc.
          </li>
          <li>Facility of Tele Conferencing and Video Conferencing.</li>
          <li>
            On campus accommodation in Visitors&apos; Guest House for the recruiting panel <small>(subject to availability)</small>.
          </li>
          <li>Access to all student profiles via a highly efficient and effective Placement Automation System (PAS).</li>
          <li>Round the clock assistance by the students&apos; volunteers at each level of placement process.</li>
          <li>Highly motivated and experienced staff to coordinate the whole process.</li>
        </ul>
      </Section>
      <br />
      <hr />
      <Section title="Resources">
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
      </Section>
      <Section title="FAQs">
        <FaqSection faqs={faqlist} />
        <div>
          <Accordion title="How can one commute between the campus & airport/railway station?">
            The campus taxi service providers can be contacted for the same at the following numbers:
            <ul>
              <li>Trimurti Travels - Mr Surender Yadav - 0512-259 5094</li>
              <li>Yadav Travels - Mr Rajpal Yadav - 0512-259 5095 - (Mobile : 93362 17156)</li>
              <li>
                The list of institute approved taxi operators can be found{' '}
                <a href="https://spo.iitk.ac.in/assets/docs/taxi_details.pdf">here</a> and approved rates can be found{' '}
                <a href="https://spo.iitk.ac.in/assets/docs/taxi_rates.pdf">here</a>.
              </li>
            </ul>
          </Accordion>
        </div>
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

const CustomBtnGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`;
