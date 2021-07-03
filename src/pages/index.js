import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from '../components/section/section.component';
import NameAndResume from "../components/name-and-resume/name-and-resume.component";
import AboutMe from '../components/about-me/about-me.component';
import MySkills from "../components/my-skills/my-skills.component";


const IndexPage = () => {

  return (
  <Layout>
    <Seo title="Home" />
      <Section color='#f3f8fc' justify='flex-start'>
        <NameAndResume />
      </Section>
      <Section justify='flex-end'>
        <AboutMe />
      </Section>
      <Section color='#f3f8fc'>
        <MySkills />
      </Section>
      <Section>
        <span>Services</span>
      </Section>
      <Section color='#f3f8fc' height='100vh'>
        <span>Portfolio</span>
      </Section>
      <Section height='100vh'>
        <span>Contact Form</span>
      </Section>
  </Layout>
)}

export default IndexPage