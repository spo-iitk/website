import Section from "components/Section"
import AutofitGrid from "components/AutofitGrid"
import styled from "styled-components"
import { media } from "utils/media"
import Container from "components/Container"
import Link from "next/link"

export default function NewsIIT(){
    return (
        <Section title = "News@IITK">
        <Wrapper>
        <TwitterWrapper>    
        <a className="twitter-timeline" data-width="500" data-height="300" href="https://twitter.com/IITKanpur?ref_src=twsrc%5Etfw">Tweets by IITKanpur</a> 
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </TwitterWrapper>
        <FacebookWrapper>
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="DiXLrsY8"></script>
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
padding : 2rem;

`
const FacebookWrapper = styled.div`
padding: 2rem;
`