import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from '../components/section/section.component';
import NameAndResume from "../components/name-and-resume/name-and-resume.component";
import AboutMe from '../components/about-me/about-me.component';
import MySkills from "../components/my-skills/my-skills.component";
import MyServices from '../components/my-services/my-services.component';
import Portfolio from '../components/portfolio/portfolio.component';
import Contact from '../components/contact/contact.component';

import AntImageRight from '../images/ant-right-125x125.png';
import AntImageLeft from '../images/ant-left-125x125.png';


const IndexPage = () => {

  return (
  <Layout>
    <Seo title="Home" />
      <Section color='#f3f8fc' justify='flex-start' bg={{image: AntImageLeft, position: 'right bottom'}}>
        <NameAndResume />
      </Section>
      <Section justify='flex-end'  bg={{image: AntImageRight, position: 'left bottom'}}>
        <AboutMe />
      </Section>
      <Section color='#f3f8fc'>
        <MySkills />
      </Section>
      <Section>
        <MyServices />
      </Section>
      <Section color='#f3f8fc' height='100vh'>
        <Portfolio />
      </Section>
      <Section height='100vh'>
        <Contact />
      </Section>
  </Layout>
)}

export default IndexPage