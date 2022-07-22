import Head from "next/head"
import styled from "styled-components"

import Section from "components/Section"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

export default function NewsIIT(){
	return (
		<>
			<Head>
				<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
				<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="DiXLrsY8"></script>
			</Head>
			<Section title="">
				<SectionTitle>News@IITK</SectionTitle>
				<br /> <br />
				<Wrapper>
					<TwitterWrapper>
						<a className="twitter-timeline" data-width="500" data-height="400" href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">Tweets by IITKanpur</a>
					</TwitterWrapper>
					<FacebookWrapper>
						<div id="fb-root"></div>
						<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiitkanpur&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="400" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allow="encrypted-media" title="FB IITK"></iframe>
					</FacebookWrapper>
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

const TwitterWrapper = styled.div`
max-height: 18.75 rem;
margin : 2rem;

`
const FacebookWrapper = styled.div`
max-height: 18.75 rem;
margin : 2rem;
${media("<=desktop")} {
  display: none;
}
`
