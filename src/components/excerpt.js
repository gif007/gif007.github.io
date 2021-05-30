import React, { useState } from 'react';

import {
    PostHeading,
    DescriptionText,
    ExcerptContainer,
    ExternalLinksContainer
} from './excerpt.styles';


const Excerpt = ({node}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <ExcerptContainer
            onClick={() => setClicked(!clicked)}
            clicked={clicked}
        >
            <PostHeading>
                {node.frontmatter.title} - {node.frontmatter.date}
            </PostHeading>
            {
                clicked ? (
                    <>
                    <DescriptionText dangerouslySetInnerHTML={{__html: node.html}} />
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