import React from 'react';
import { Link } from 'gatsby';

import {
    GenericContainer,
    GenericHeadingWrapper
} from '../generic/generic.styles';

import PostsWrapper from './blog-posts.styles';


const BlogPosts = () => (
    <GenericContainer id='blog'>
        <GenericHeadingWrapper>Blog Posts</GenericHeadingWrapper>
        <PostsWrapper>
            <li><Link to='/react-proxy/'>Proxy API Requests From React to Express During Development</Link> (30-07-2021)</li>
            <li><Link to='/carousels/'>Variations on a Carousel</Link> (14-06-2021)</li>
            {/* <li><Link to='/react-proxy/'>The Logic of Counting Down</Link> (02-06-2021)</li>
            <li><Link to='/react-proxy/'>Controlling the Flow of Asynchronous Actions with the Async Module</Link> (15-02-2021)</li>
            <li><Link to='/react-proxy/'>Managing Data with Mongoose</Link> (28-01-2021)</li> */}
        </PostsWrapper>
    </GenericContainer>
);

export default BlogPosts;