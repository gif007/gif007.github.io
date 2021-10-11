import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from '../components/section/section.component';
import NameAndResume from "../components/name-and-resume/name-and-resume.component";
import AboutMe from '../components/about-me/about-me.component';
import BlogPosts from "../components/blog-posts/blog-posts.component";
import MySkills from "../components/my-skills/my-skills.component";
import MyServices from '../components/my-services/my-services.component';
// import Portfolio from '../components/portfolio/portfolio.component';
import Contact from '../components/contact/contact.component';

import AntImageRight from '../images/index/ant-right-125x125.png';
import AntImageLeft from '../images/index/ant-left-125x125.png';
// import ESBackground from '../images/index/javascript-bg3.png';


const IndexPage = () => {

  const [areSkillsVisible, setAreSkillsVisible] = useState(false);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const skillsList = document.querySelector('div#skills-section');
    const distanceToSkillsList = skillsList.getBoundingClientRect().top;
    const triggerHeight = distanceToSkillsList - viewportHeight;

    const checkScrollDistance = () => {
      if (window.pageYOffset >= triggerHeight) {
          window.removeEventListener('scroll', checkScrollDistance);
          setAreSkillsVisible(true);
      }
    }

    window.addEventListener('scroll', checkScrollDistance);
  }, [])

  return (
  <Layout>
    <Seo title="Home" />
      <Section color='#f3f8fc' justify='flex-start' image={{source: AntImageLeft, side: 'right'}}>
        <NameAndResume />
      </Section>
      <Section justify='flex-end'  image={{source: AntImageRight, side: 'left'}}>
        <AboutMe />
      </Section>
      <Section color='#f3f8fc'>
        <BlogPosts />
      </Section>
      <Section>
        <MySkills areSkillsVisible={areSkillsVisible} />
      </Section>
      <Section color='#f3f8fc'>
        <MyServices />
      </Section>
      {/* <Section>
        <Portfolio />
      </Section> */}
      <Section padded>
        <Contact />
      </Section>
  </Layout>
)}

export default IndexPage