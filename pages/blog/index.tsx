import { InferGetStaticPropsType } from "next"
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
		<Page title="SPO Blog" description="">
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
			<CustomAutofitGrid>
				{!filteredBlogPosts.length && "No posts found."}
				{filteredBlogPosts.map((singlePost, idx) => (
					<ArticleCard
						key={singlePost.slug}
						title={singlePost.meta.title}
						description={singlePost.meta.description}
						imageUrl={singlePost.meta.imageUrl}
						slug={singlePost.slug}
					/>
				))}
			</CustomAutofitGrid>
		</Page>
	)
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllPosts(),
		},
	}
}
