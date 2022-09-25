import NextImage from "next/image"
import React from "react"
import styled from "styled-components"
import { A11y, Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Container from "components/Container"
import Separator from "components/Separator"
import { media } from "utils/media"

const TESTIMONIALS = [
	{
		companyLogoUrl: "/testimonials/iitk-logo.svg",
		content: "Since the advent of this great institution, IIT Kanpur has vision to provide quality technical education and act as a rostrum for scientific research, and a mission to develop human potential to its greatest degree. In accordance with this vision IIT Kanpur has maintained an exemplary record of academic contribution for achieving excellence in teaching, research and governance. A sincere effort has now begun to restore the vantage position of IITK as the top technological Institute in India, The students of IITK are a cherry picked group. They have been chosen through a process that makes IITK one of the toughest institutes to get an admission.",
		author: {
			name: "Prof. Abhay Karandikar",
			title: "Director",
			subtitle: "Indian Institute of Technology, Kanpur",
			avatarUrl: "/testimonials/dir_2.png",
		},
	},
	{
		companyLogoUrl: "/testimonials/iitk-logo.svg",
		content: "I would like to warmly welcome all the current and prospective recruiters to the Student Placement Office (SPO) of IIT Kanpur. In this age, demanding continual technology enhancements, the industry requires talented youngsters with outstanding analytical skills, open mindset and innovative approach towards problem solving. I am glad to convey that IIT Kanpur is home to such bright young minds. Our next batch of students is all set to graduate soon and they are looking for opportunities that are appealing to their intellect and would help them realize their full potential.",
		author: {
			name: "Prof.Raju Kumar Gupta",
			title: "Chairman",
			subtitle: "Students' Placement Office, IIT Kanpur",
			avatarUrl: "/testimonials/chairman.jpg",
		},
	},
	{
		companyLogoUrl: "/testimonials/iitk-logo.svg",
		content: "Indian Institute of Technology Kanpur (IITK), established in 1959, is one of the premier institutions established by the Government of India. IITK aims to create, disseminate, and translate knowledge in science, engineering and allied disciplines that serve the society. IITK has set a benchmark through its outstanding academic programs, quality education, and cutting-edge multidisciplinary research. We at IITK prioritize the 360-degree development of students to meet global standards. Our education system goes over and beyond the classroom lectures. We strongly agree with the overall growth of the students that ensures all our students are ready to meet the new challenges in life. In this regard, Students' Placement Office (SPO) takes utmost care to groom students according to the needs of the industry.",
		author: {
			name: "Prof. Sudhanshu Shekhar Singh",
			title: "Vice Chairman",
			subtitle: "Students' Placement Office, IIT Kanpur",
			avatarUrl: "/testimonials/vc.jpg",
		},
	},
]

export default function Testimonials() {
	return (
		<div>
			<Separator />
			<TestimonialsWrapper>
				<Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
					{TESTIMONIALS.map((singleTestimonial, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialCard>
								<NextImage
									src={singleTestimonial.companyLogoUrl}
									alt={`${singleTestimonial.author.name}'s company logo`}
									width={200}
									height={40}
								/>
								<Content>{singleTestimonial.content}</Content>
								<AuthorContainer>
									<AuthorImageContainer>
										<NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48}/>
									</AuthorImageContainer>
									<AuthorContent>
										<AuthorName>{singleTestimonial.author.name}</AuthorName>
										<AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
										<AuthorSubtitle>{singleTestimonial.author.subtitle}</AuthorSubtitle>
									</AuthorContent>
								</AuthorContainer>
							</TestimonialCard>
						</SwiperSlide>
					))}
				</Swiper>
			</TestimonialsWrapper>
			<Separator />
		</div>
	)
}
const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media("<=desktop")} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
  
`
const Content = styled.blockquote`
  text-align: center;
  font-size: 1.9rem;
  max-width: 60%;

  ${media("<=desktop")} {
    max-width: 100%;
	width: 100%;
	height: auto;
  }
`

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`

const AuthorTitle = styled.p`
  font-weight: bold;
`

const AuthorSubtitle = styled.p`
  font-weight: semibold;
  font-size: smaller;
`
const AuthorName = styled.p`
  font-weight: normal;
`

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`
