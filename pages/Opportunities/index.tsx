/* eslint-disable no-multiple-empty-lines */
import { useEffect, useState } from "react"
import styled from "styled-components"

import Page from "components/Page"

type Opportunity = {
  company: string
  role: string
  type: string
  stipend: string
  location: string
  eligibility: string
  link: string
}

// --- Styled Components ---

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid #eaedf1;
  padding-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #003D7C; /* IITK / SPO Deep Blue */
  margin: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #eaedf1;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 61, 124, 0.1); /* Subtle blue shadow */
    border-color: #cce0f5;
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const CompanyName = styled.h2`
  font-size: 1.25rem;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  font-weight: 700;
`

const Role = styled.h3`
  font-size: 1rem;
  color: #4a5568;
  margin: 0;
  font-weight: 500;
`

const Badge = styled.span`
  background: #eef2f6;
  color: #003D7C;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
  line-height: 1.4;

  svg {
    flex-shrink: 0;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    color: #718096;
  }
`

const ApplyButton = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  background-color: #003D7C;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #002855;
  }
`

const Loader = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #718096;
  font-size: 1.1rem;
`

// --- Main Component ---

export default function Opportunities() {
	const [data, setData] = useState<Opportunity[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch("https://opensheet.elk.sh/1-eM7p1UIHrrZRZoL3bnCMmI_ltsddN7ZGTM_MvtiE2s/Sheet1")
			.then((res) => res.json())
			.then((res) => {
				setData(res)
				setIsLoading(false)
			})
			.catch((err) => {
				console.error("Failed to fetch opportunities:", err)
				setIsLoading(false)
			})
	}, [])

	return (
		<Page title="SPO Opportunities" description="Browse latest placement and internship opportunities">
			<HeaderContainer>
				<Title>Latest Opportunities</Title>
			</HeaderContainer>

			{isLoading ? (
				<Loader>Loading opportunities...</Loader>
			) : (
				<Grid>
					{data.map((item, idx) => (
						<Card key={idx}>
							<CardHeader>
								<div>
									<CompanyName>{item.company}</CompanyName>
									<Role>{item.role}</Role>
								</div>
								{item.type && <Badge>{item.type}</Badge>}
							</CardHeader>

							<InfoList>
								<InfoItem>
									{/* Location Icon */}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									{item.location || "Location TBD"}
								</InfoItem>
                
								<InfoItem>
									{/* Stipend Icon */}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="12" y1="1" x2="12" y2="23"></line>
										<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
									</svg>
									{item.stipend || "Unspecified"}
								</InfoItem>

								<InfoItem>
									{/* Eligibility Icon */}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
										<polyline points="22 4 12 14.01 9 11.01"></polyline>
									</svg>
									{item.eligibility || "Check criteria"}
								</InfoItem>
							</InfoList>

							<ApplyButton href={item.link} target="_blank" rel="noopener noreferrer">
                Apply Now
							</ApplyButton>
						</Card>
					))}
				</Grid>
			)}
		</Page>
	)
}
