import { InferGetStaticPropsType } from "next"
import NextLink from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { Button } from "tinacms"

import Input from "components/Input"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { getAllPosts } from "utils/postsFetcher"

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchValue, setSearchValue] = useState("")

	const filteredBlogPosts = posts.filter((singlePost) => {
		const searchContent = singlePost.meta.title + singlePost.meta.description + singlePost.content + singlePost.meta.tags
		return searchContent.toLowerCase().includes(searchValue.toLowerCase())
	}).sort((a, b) => {
		return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf()
	})

	return (
		<Page title="SPO Insights" description="">
			<div>
				<CustomInput
					aria-label="Search articles"
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Search articles"
				/>
			</div>
			<br />
			<div style={{ width: "100%", display: "grid", placeItems: "center" }}>
				<CustomUl>
					{!filteredBlogPosts.length && "No posts found."}
					<CustomSectionTitle>{filteredBlogPosts.length && "2022 Placement Insight" }</CustomSectionTitle>
					<br></br>
					{filteredBlogPosts.map((singlePost, idx) => {
						if (singlePost.slug.includes("2022-placement")) {
							return (
								<NextLink href={"/insights/" + singlePost.slug} passHref key={idx}>
									<BlogItem>
										<BlogDate>{singlePost.meta.date}</BlogDate>
										<BlogTitle>{singlePost.meta.title}</BlogTitle>
									</BlogItem>
								</NextLink>
							)
						} else {
							return <></>
						}

					})}
				</CustomUl>
			</div>
			<br />
			<div style={{ width: "100%", display: "grid", placeItems: "center" }}>
				<CustomUl>
					{!filteredBlogPosts.length && "No posts found."}
					<CustomSectionTitle>{filteredBlogPosts.length && "2022 Internship Insight" }</CustomSectionTitle>
					<br></br>
					{filteredBlogPosts.map((singlePost, idx) => {
						if (singlePost.slug.includes("2022-intern")) {
							return (
								<NextLink href={"/insights/" + singlePost.slug} passHref key={idx}>
									<BlogItem>
										<BlogDate>{singlePost.meta.date}</BlogDate>
										<BlogTitle>{singlePost.meta.title}</BlogTitle>
									</BlogItem>
								</NextLink>
							)
						} else {
							return <></>
						}

					})}
				</CustomUl>
			</div>
		</Page>
	)
}

const CustomInput = styled(Input)`
	width: 100%;
	height: 3rem;
	margin-bottom: 1rem;
`

const CustomUl = styled.ul`
	list-style: none;
	width: 80%;
	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
		padding-inline-start: 0;
	}
	
`

const CustomSectionTitle = styled(SectionTitle)`
	@media (max-width: 768px) {
		font-size: 3.1em;
	}
`

const BlogTitle = styled.div`
	flex: 1;
	font-size: 1.1em;
`

const BlogDate = styled.span`
	flex: 0 0 100px;
	font-weight: normal;
	@media (max-width: 768px) {
		display: none;
	}
`

const BlogItem = styled.li`
	text-decoration: none;
	margin-bottom: 0.7rem;
	cursor: pointer;
	font-size: 1.5rem;
	font-weight: bold;
	display: flex;
	flex-direction: row;
	gap: 3rem;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0;
		border-bottom: 1px dashed #ccc;
	}
`
const Dropdown = styled.div`
	postion : "relative"
	display : "inline-block"
`

const DropdownMenu = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 1;
`

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllPosts(),
		},
	}
}
