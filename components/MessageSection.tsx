import NextImage from "next/image"
import React, { PropsWithChildren } from "react"
import styled from "styled-components"

import { media } from "utils/media"

import Container from "./Container"

export interface MessageSectionProps {
  imageUrl: string;
  title: string;
  reversed?: boolean;
  hideTitle?: boolean;
}

export default function MessageSection({ imageUrl, title, reversed, children, hideTitle}: PropsWithChildren<MessageSectionProps>) {
	return (
		<MessageSectionWrapper reversed={reversed}>
			<ImageContainer>
				<NextImage src={imageUrl} alt={title} layout="fill" objectFit="contain" />
			</ImageContainer>
			<ContentContainer>
				{!hideTitle && <Title>{title}</Title>}
				<Message>{children}</Message>
			</ContentContainer>
		</MessageSectionWrapper>
	)
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  max-width: 30%;
  position: relative;
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
    width: 100%;
    max-width: 80%;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  max-width: 70%;
  margin-top: 3rem;
`

const Message = styled.div`
    font-size: 1.5rem;
    text-align: justify;
`

type Props = Pick<MessageSectionProps, "reversed">;
const MessageSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? "row-reverse" : "row")};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? "0 0 0 5rem" : "0 5rem 0 0")};
  }

  ${media("<=desktop")} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`
