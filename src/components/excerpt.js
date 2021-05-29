import React, { useState } from 'react';

import {
    PostHeading,
    DescriptionText,
    ExcerptContainer,
    ExternalLinksContainer
} from './excerpt.styles';


const Excerpt = ({node}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <ExcerptContainer
            onClick={() => setHovered(!hovered)}
            hovered={hovered}
        >
            <PostHeading>
                {node.frontmatter.title} - {node.frontmatter.date}
            </PostHeading>
            {
                hovered ? (
                    <>
                    <DescriptionText dangerouslySetInnerHTML={{__html: node.html}} />
                    <ExternalLinksContainer>
                        <span><a href={node.frontmatter.codeURL}>Code</a></span>
                        {
                            node.frontmatter.liveURL ? (
                                <span><a href={node.frontmatter.liveURL}>Live</a></span>
                            ) : (
                                null
                            )
                        }
                    </ExternalLinksContainer>
                    </>
                ) : (
                    <>
                    <DescriptionText className='excerpt'>{node.excerpt}</DescriptionText>
                    </>
                )
            }
        </ExcerptContainer>
)};

export default Excerpt;