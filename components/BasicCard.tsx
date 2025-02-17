import NextImage from "next/image"
import { useRouter } from "next/router"
import styled from "styled-components"

import Link from "./Link"

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
}

export default function BasicCard({ title, description, imageUrl, linkUrl }: BasicCardProps) {
	const router = useRouter()
	return (
		<Card onClick={() => {
			if (linkUrl) router.push(linkUrl, "_blank")
		}}  >
			{imageUrl && <NextImage src={imageUrl} width={128} height={128} alt={title} />}
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Card>
	)
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  cursor: pointer;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  opacity: 0.6;
`
