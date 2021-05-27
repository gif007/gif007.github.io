import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';


const Title = styled.h1`
    margin-bottom: 0.5rem;
`;

const DateText = styled.h4`
    margin-bottom: 2rem;
`;

const PostContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    border-left: 12px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    padding: 16px;
    background: white;
    
`;

const PostContentContainer = styled.div`
    max-width: 55vw;

    @media screen and (max-width: 800px) {
        max-width: 90vw;
    }
`;

const BlogPost = ({data}) => {
    const post = data.markdownRemark;

    return (
        <Layout>
        <Seo title={post.frontmatter.title} />
            <PostContainer>
                <Title>{post.frontmatter.title}</Title>
                <DateText>{post.frontmatter.date}</DateText>
                <PostContentContainer dangerouslySetInnerHTML={{__html: post.html}} />
            </PostContainer>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;

export default BlogPost;