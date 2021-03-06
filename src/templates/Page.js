import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'

// Export Template for use in CMS preview
export const PageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="Page">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
        <SVGIcon src="/images/calendar.svg" />
      </div>
    </section>
  </main>
)

const Page = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
