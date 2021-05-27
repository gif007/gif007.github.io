import React from 'react';
import { Link } from 'gatsby';

import {
    PostHeading,
    DescriptionText,
    ExcerptContainer
} from './excerpt.styles';


const Excerpt = ({node}) => (
    <ExcerptContainer>
        <Link to={node.fields.slug}>
            <PostHeading>{node.frontmatter.title} - {node.frontmatter.date}</PostHeading>
        </Link>
        <DescriptionText>{node.frontmatter.description}</DescriptionText>
    </ExcerptContainer>
);

export default Excerpt;