import Section from "components/Section"
import AutofitGrid from "components/AutofitGrid"
import styled from "styled-components"
import { media } from "utils/media"
import Container from "components/Container"
import Link from "next/link"
import SectionTitle from "components/SectionTitle"
import Head from "next/head"

export default function NewsIIT(){
    return (
	<Head>
        	<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        	<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="DiXLrsY8"></script>
      	</Head>
        <Section title = "">
        <SectionTitle>News@IITK</SectionTitle>
        <br /> <br /> 
        <Wrapper>
        <TwitterWrapper>    
        <a className ="twitter-timeline" data-width="400" data-height="300" href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">Tweets by IITKanpur</a> 
        </TwitterWrapper>
        <FacebookWrapper>
        <div id="fb-root"></div>
        <div className ="fb-page" data-href="https://www.facebook.com/iitkanpur" data-tabs="timeline" data-width="500" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/iitkanpur" className = "fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/iitkanpur">Indian Institute of Technology Kanpur</a></blockquote></div>
        </FacebookWrapper>
        </Wrapper>
        </Section>
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
margin : 2rem;
`
