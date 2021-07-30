import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';


const BlogPost = () => (
    <Layout>
        <Seo title='Blog Post' />
        <div style={{marginTop: '90px', marginLeft: '200px'}}>
            Hello from blog post
        </div>
    </Layout>
)

export default BlogPost;