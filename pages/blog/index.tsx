import { InferGetStaticPropsType } from "next"
import NextLink from "next/link"
import { useState } from "react"
import styled from "styled-components"

import ArticleCard from "components/ArticleCard"
import AutofitGrid from "components/AutofitGrid"
import Input from "components/Input"
import Page from "components/Page"
import { media } from "utils/media"
import { getAllPosts } from "utils/postsFetcher"

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchValue, setSearchValue] = useState("")

	const filteredBlogPosts = posts.filter((singlePost) => {
		const searchContent = singlePost.meta.title + singlePost.meta.description + singlePost.content + singlePost.meta.tags
		console.log(searchContent.toLowerCase().includes(searchValue.toLowerCase()))
		return searchContent.toLowerCase().includes(searchValue.toLowerCase())
	})

	return (
		<Page title="SPO Insights" description="">
			<div>
				<Input
					style={{ width: "100%" }}
					aria-label="Search articles"
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Search articles"
				/>
			</div>
			<br />
			<div style={{width:"100%", display:"grid", placeItems:"center"}}>
				<CustomUl>
					{!filteredBlogPosts.length && "No posts found."}
					{filteredBlogPosts.map((singlePost, idx) => (
						<BlogItem key={idx}>
							<BlogDate>{singlePost.meta.date}</BlogDate>
							<NextLink href={"/blog/" + singlePost.slug} passHref>
								<div style={{flex:"1"}}>{singlePost.meta.title}</div>
							</NextLink>
						</BlogItem>
					))}
				</CustomUl>
			</div>
		</Page>
	)
}

const CustomUl = styled.ul`
	list-style: none;
	width: 80%;
	
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

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllPosts(),
		},
	}
}
