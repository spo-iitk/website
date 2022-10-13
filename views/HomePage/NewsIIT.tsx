import Script from "next/script"
import styled from "styled-components"

import Section from "components/Section"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function NewsIIT(){
	return (
		<>
			<Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
			<Script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" strategy="beforeInteractive" nonce="DiXLrsY8" />

			<Section title="">
				<SectionTitle>News@IITK</SectionTitle>
				<br /> <br />
				<Wrapper>
					<>
						<WidgetWrapper>
							<a className="twitter-timeline" data-width="500" data-height="400" href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">Tweets from @IITKanpur</a>
						</WidgetWrapper>
						<WidgetWrapper>
							<div id="fb-root"></div>
							<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiitkanpur&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="400" style={{ border: "none", overflow: "scroll" }} scrolling="no" frameBorder="0" allow="encrypted-media" title="FB IITK"></iframe>
						</WidgetWrapper>
					</>
					<>
						<WidgetWrapperMobile>
							<a className="twitter-timeline" data-width="300" data-height="400" href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">Tweets from @IITKanpur</a>
						</WidgetWrapperMobile>
						<WidgetWrapperMobile>
							<div id="fb-root"></div>
							<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiitkanpur&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="400" style={{ border: "none", overflow: "scroll" }} scrolling="no" frameBorder="0" allow="encrypted-media" title="FB IITK"></iframe>
						</WidgetWrapperMobile>
					</>
				</Wrapper>
			</Section>
		</>
	)
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
max-width: 130em;
max-height: 50em;
width: 100%;
margin: 0 auto;
padding: 0 2rem;
${media("<=desktop")} {
  flex-direction: column;
}
`

const WidgetWrapper = styled.div`
max-height: 18.75 rem;
margin : 2rem;
${media("<=tablet")} {
  display: none;
}
`

const WidgetWrapperMobile = styled.div`
max-height: 18.75 rem;
margin : 2rem;
${media(">tablet")} {
  display: none;
}
`
