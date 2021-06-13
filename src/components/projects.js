import React from 'react';
import Excerpt from './excerpt';
import styled from 'styled-components';


// const ProjectsList = styled.ul`
//     list-style-type: none;
//     margin: 36px 0 64px;

//     li + li {
//         margin-top: 48px;
//     }
// `;

const ProjectsList = styled.div`
`;

const ProjectHeader = styled.h2`
  font-size: 2.5rem;
`;

const Projects = ({data, featured=false}) => {
    // This component returns either a list of featured projects,
    // or a list of non-featured projects.  Defaults to non-featured.
    
    // The data being passed into it must be a query which returns enough data to create an excerpt
    return (
        <div>
            <ProjectHeader>{featured ? 'Featured Projects' : 'Projects'}</ProjectHeader>
            <ProjectsList>
                {
                    data.allMarkdownRemark.edges.map(({node}) => {
                        if (node.frontmatter.featured === featured) {
                            return <Excerpt node={node}  key={node.id} />;
                        }
                        return null;
                    })
                }
            </ProjectsList>
        </div>
    )
};

export default Projects;