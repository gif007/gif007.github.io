import React from 'react';

import Layout from '../layout';
import Seo from '../seo';

import PostWrapper from './blog-post-layout.styles';


const BlogPostLayout = ({title, children}) => (
    <Layout>
        <Seo title={title} />
        <PostWrapper>
            {children}
            <hr />
        </PostWrapper>
    </Layout>
);

export default BlogPostLayout;