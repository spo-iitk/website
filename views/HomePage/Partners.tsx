import NextImage from "next/image"
import React from "react"
import styled from "styled-components"
import { Autoplay } from "swiper"
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react"

import Container from "components/Container"
import { media } from "utils/media"

const PARTNER_LOGOS = [
	"Accenture.svg",
	"icons8-facebook.svg",
	"icons8-amazon.svg",
	"Analog_Devices_Logo.svg",
	"Britannia_Industries_logo_with_motto.svg",
	"bentley-motors.svg",
	"Honda_Logo.svg",
	"hsbc.svg",
	"atkins.svg",
	"Deloitte.svg",
	"Caterpillar-shortened.svg",
	"dr.svg",
	"Deutsche_Bank-Logo.svg",
	"Broadcom_Ltd_Logo.svg",
	"drdoofficial-seeklogo.com.svg",
	"dc.svg",
	"General_Electric_logo.svg",
	"IBM_logo.svg",
	"ITC_Limited_Logo.svg",
	"Mitsubishi_logo.svg",
	"Microsoft_logo.svg",
	"Morgan_Stanley_Logo_1.svg",
	"NetApp_logo.svg",
	"Nvidia_logo.svg",
	"TVS_Motor_Company-Logo.wine.svg",
	"Unilever.svg",
	"Yahoo!_(2019).svg",
	"InMobi_logo.svg",
	"Indian_Space_Research_Organisation_Logo.svg",
	"Samsung_Logo.svg",
	"McKinsey_and_Company_Logo_1.svg",
	"Renishaw_logo.svg",
	"Mitsui_Chemicals.svg",

]

export default function Partners() {
	return (
		<PartnersWrapper>
			<Title>Past Recruiters</Title>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={6}
				spaceBetween={30}
				loop={true}
				autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
				speed={3000}
				breakpoints={{
					320: { slidesPerView: 2 },
					768: { slidesPerView: 4 },
					1025: { slidesPerView: 6 },
				}}
				className="swiper-wrapper"
			>
				{PARTNER_LOGOS.map((logo) => (
					<SwiperSlide key={logo}>
						<NextImage src={"/partners/" + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
					</SwiperSlide>
				))}
			</Swiper>
		</PartnersWrapper>
	)
}

function normalizePartnerLogoName(logo: string) {
	return logo.replace(".svg", "")
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media("<=desktop")} {
    line-height: 1.5;
  }
`

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`
