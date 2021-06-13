import React, { useState } from 'react';

import {
    PostHeading,
    DescriptionText,
    ExcerptContainer,
    ExternalLinksContainer
} from './excerpt.styles';


const Excerpt = ({node}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <ExcerptContainer>
            <PostHeading onClick={() => setExpanded(!expanded)}>
                {node.frontmatter.title}
            </PostHeading>
                <DescriptionText dangerouslySetInnerHTML={{__html: node.html}} />
                <hr />
                <ExternalLinksContainer>
                    <span><a href={node.frontmatter.codeURL}>Source code</a></span>
                    {
                        node.frontmatter.liveURL ? (
                            <span><a href={node.frontmatter.liveURL}>See it live</a></span>
                        ) : (
                            null
                        )
                    }
                </ExternalLinksContainer>
        </ExcerptContainer>
)};

export default Excerpt;