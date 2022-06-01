import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import { GlobalStyles } from "../styles/global.styles"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <BlogList />
        <GlobalStyles/>
      </section>
    </Layout>
  )
}