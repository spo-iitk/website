import NextImage from "next/image"
import React, { useState } from "react"
import styled from "styled-components"

// import Card from "components/Card"
import Collapse from "components/Collapse"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import Section from "components/Section"
import SectionTitle from "components/SectionTitle"
import ThreeLayersCircle from "components/ThreeLayersCircle"
import { media } from "utils/media"

const TABS = [
	{
		title: "OBJECTIVES",
		description:
      "<p></p>",
		imageUrl: "/demo-illustration-3.png",
		baseColor: "249,82,120",
		content:"<h3>The objectives of Career Fest are:</h3><ul><li>To provide students with a platform to connect with potential employers and explore job opportunities.</li><li>To showcase the talent and skills of the student body to companies and organisations.</li><li>To provide companies with an opportunity to connect with IIT Kanpur students and build their brands.</li><li>To promote the IIT Kanpur brand and increase visibility among potential employers.</li></ul>",
		secondColor: "221,9,57",
	},
	{
		title: "MISSION",
		description:
      "<p></p>",
		imageUrl: "/demo-illustration-4.png",
		baseColor: "57,148,224",
		content:"<h3>The mission of the Career Festival at IIT Kanpur is to provide a platform for students to connect with leading companies and organisations and to explore career opportunities in various industries.</h3>",
		secondColor: "99,172,232",
	},
	{
		title: "VISION",
		description:
      "<p></p>",
		imageUrl: "/demo-illustration-5.png",
		content:"<h3>The vision of the Career Festival is to foster a dynamic and engaging environment where students can network with professionals, gain insights into different industries, and find meaningful and fulfilling career paths. The festival aims to be a hub of innovation, creativity, and collaboration, where students, companies, and academia come together to create opportunities for growth and development.</h3>",
		baseColor: "88,193,132",
		secondColor: "124,207,158",
	},
]

export default function FeaturesGallery() {
	const [currentTab, setCurrentTab] = useState(TABS[0])

	const sectionMarkup = TABS.map((singleTab, idx) => {
		const isActive = singleTab.title === currentTab.title
    console.log("singleTab:",singleTab.title);
    console.log("currentTab:",currentTab.title);
		const isFirst = idx === 0

		if(isActive){
			return(
				<ImageContainer key={singleTab.title} isActive={isActive}>
					{/* <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} /> */}
					<TextWrapper>
						<SectionText>
							<div style={{alignContent: "center"}} dangerouslySetInnerHTML={{ __html: singleTab.content }}></div>
						</SectionText>
					</TextWrapper>
				</ImageContainer>
			)
		}else{
			return null
		}
	})

	const tabsMarkup = TABS.map((singleTab, idx) => {
		const isActive = singleTab.title === currentTab.title

		return (
			<Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
				<TabTitleContainer>
					<CircleContainer>
						<ThreeLayersCircle baseColor={isActive ? "transparent" : singleTab.baseColor} secondColor={singleTab.secondColor} />
					</CircleContainer>
					<h4>{singleTab.title}</h4>
				</TabTitleContainer>
				<Collapse isOpen={isActive} duration={300}>
					<TabContent>
						<div dangerouslySetInnerHTML={{__html: singleTab.description}}></div>
					</TabContent>
				</Collapse>
			</Tab>
		)
	})

	function handleTabClick(idx: number) {
		setCurrentTab(TABS[idx])
	}

	return (
		<FeaturesGalleryWrapper>
			<Content>
				{/* <OverTitle>features</OverTitle> */}
				<SectionTitle id="features">Features</SectionTitle>
			</Content>
			<GalleryWrapper>
				<TabsContainer>{tabsMarkup}</TabsContainer>
        {/* <TabsContainer>{sectionMarkup}</TabsContainer> */}
				{sectionMarkup}
			</GalleryWrapper>
		</FeaturesGalleryWrapper>
	)
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  // align-items: center;
  margin-top: 4rem;
  width: 100%;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column;
  }
`

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`

const TabsContainer = styled.div`
  // flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media("<=desktop")} {
    flex: 1;
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: scroll;
  width: 100%;
  border-radius: 0.8rem;
  align-content: center;
  flex: ${(p) => (p.isActive ? "2" : "0")};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media("<=desktop")} {
    width: ${(p) => (p.isActive ? "100%" : "0")};
  }
`

const Tab = styled.div<{ isActive: boolean }>`
  // display: flex;
  // flex-direction: column;
  padding: 0rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media("<=desktop")} {
    width: 100%;
  }
`

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media("<=tablet")} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media("<=tablet")} {
    flex: 0 calc(4rem + 1.25rem);
  }
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media("<=tablet")} {
    display:block;
  }
`
const SectionText = styled.div`
  flex: 1;
  font-size: 1.8rem;
  text-align: justify;
  opacity: 0.9;
  margin:20px 30px auto auto;
  ${media("<=tablet")} {
	margin:20px auto auto auto;
  }
`
