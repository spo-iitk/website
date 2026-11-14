import { useMemo, useState } from "react"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import Page from "components/Page"
import internData from "data/internshipExperience2026.json"
import { media } from "utils/media"

interface InternExperienceItem {
  Name: string;
  Company: string;
  Roll: string;
  Upload: string;
}

const Routes = [
	{
		name: "For Students",
		url: "/students",
	},
	{
		name: "Placement Insights",
		url: "/insights",
	},
	{
		name: "Resources",
		url: "/students#resources",
	},
	{
		name: "Procedures",
		url: "/students#steps",
	},
]

export default function InternshipExperiencePage() {
	const [searchValue, setSearchValue] = useState("")

	const experiences = internData as InternExperienceItem[]

	const { filteredList, totalCompanies } = useMemo(() => {
		const query = searchValue.toLowerCase().trim()
		const filtered = experiences.filter((item) => {
			const target = `${item.Name} ${item.Company} ${item.Roll}`.toLowerCase()
			return target.includes(query)
		})
		const companies = new Set(experiences.map((item) => item.Company))
		return {
			filteredList: filtered,
			totalCompanies: companies.size,
		}
	}, [searchValue, experiences])

	return (
		<Page
			title="Internship Experiences"
			description="Explore internship experiences and preparation strategies shared by IIT Kanpur students."
			routes={Routes}
			keywords="Internship Experience, IIT Kanpur Internships, SPO IITK"
		>
			<Container>
				<SearchAndStatsWrapper>
					<StatsRow>
						<StatBadge>
							<StatCount>{experiences.length}</StatCount>
							<StatLabel>Experiences</StatLabel>
						</StatBadge>
						<StatBadge>
							<StatCount>{totalCompanies}</StatCount>
							<StatLabel>Companies</StatLabel>
						</StatBadge>
					</StatsRow>

					<SearchBoxContainer>
						<SearchInput
							type="text"
							aria-label="Search internship experiences"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder="Search by student name, company, or roll number..."
						/>
					</SearchBoxContainer>
				</SearchAndStatsWrapper>

				{filteredList.length === 0 ? (
					<EmptyContainer>
						<EmptyEmoji>🔍</EmptyEmoji>
						<EmptyTitle>No experiences found</EmptyTitle>
						<EmptySubtitle>Try searching for a different company or student name</EmptySubtitle>
					</EmptyContainer>
				) : (
					<CustomAutofitGrid>
						{filteredList.map((item, idx) => (
							<CardAnchor key={`${item.Roll}-${idx}`} href={item.Upload} target="_blank" rel="noopener noreferrer">
								<CardHeader>
									<AvatarBadge>{item.Name.trim().charAt(0).toUpperCase()}</AvatarBadge>
									<StudentMeta>
										<StudentName>{item.Name}</StudentName>
										{item.Roll && <StudentRoll>Roll: {item.Roll}</StudentRoll>}
									</StudentMeta>
								</CardHeader>
								<CompanyBadge>
									<span>🏢</span>
									<span>{item.Company}</span>
								</CompanyBadge>
								<CardFooter>
									<span>View Experience</span>
									<span>↗</span>
								</CardFooter>
							</CardAnchor>
						))}
					</CustomAutofitGrid>
				)}
			</Container>
		</Page>
	)
}

const SearchAndStatsWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const StatBadge = styled.div`
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  padding: 1.2rem 2.4rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(150, 150, 150, 0.1);
`

const StatCount = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(var(--primary));
`

const StatLabel = styled.span`
  font-size: 1.3rem;
  color: rgba(var(--text), 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const SearchBoxContainer = styled.div`
  width: 100%;
  max-width: 64rem;
`

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.8rem;
  padding: 0 2rem;
  font-size: 1.5rem;
  border-radius: 5rem;
  border: 2px solid rgba(150, 150, 150, 0.2);
  background: rgb(var(--cardBackground));
  color: rgb(var(--text));
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
    border-color: rgb(var(--primary));
    box-shadow: 0 0 0 4px rgba(var(--primary), 0.15);
  }

  &::placeholder {
    color: rgba(var(--text), 0.45);
  }
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 28rem;
  gap: 2rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 26rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CardAnchor = styled.a`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  border: 1px solid rgba(150, 150, 150, 0.12);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: rgba(var(--primary), 0.4);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`

const AvatarBadge = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: rgba(var(--primary), 0.12);
  color: rgb(var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.6rem;
  flex-shrink: 0;
`

const StudentMeta = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StudentName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--text));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StudentRoll = styled.span`
  font-size: 1.2rem;
  color: rgba(var(--text), 0.6);
  margin-top: 0.2rem;
`

const CompanyBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: rgba(150, 150, 150, 0.08);
  border-radius: 0.8rem;
  font-size: 1.3rem;
  color: rgba(var(--text), 0.85);
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 1.5rem;
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(150, 150, 150, 0.1);
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--primary));
`

const EmptyContainer = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.5rem;
  border: 1px dashed rgba(150, 150, 150, 0.3);
`

const EmptyEmoji = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`

const EmptyTitle = styled.h3`
  font-size: 1.8rem;
  color: rgb(var(--text));
  margin-bottom: 0.5rem;
`

const EmptySubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(var(--text), 0.6);
`
