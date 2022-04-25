import React, { PropsWithChildren } from "react"
import styled from "styled-components"

import { media } from "utils/media"

import Container from "./Container"

export interface SectionProps {
  title: string;
}

export default function Section({ title, children }: PropsWithChildren<SectionProps>) {
	return (
		<SectionWrapper>
			<ContentContainer>
				<Title>{title}</Title>
				<SectionBody>{children}</SectionBody>
			</ContentContainer>
		</SectionWrapper>
	)
}

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 540;
  line-height: 1.1;
  margin-bottom: 4rem;
  margin-top: 4rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`

const ContentContainer = styled.div`
  flex: 1;
`

const SectionBody = styled.div`
  font-size: 2rem;
`

const SectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: 'row';

  ${media("<=desktop")} {
    flex-direction: column;
  }
`
