import React from 'react';

import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/stackoverflow-dark.css';

import BlogPostLayout from '../components/blog-post-layout/blog-post-layout.component';

const axiosCode = `axios({
    url: 'payment',
    method: 'post',
    data: {
        amount: priceForStripe,
        token
    }
})`;

const proxyCode = `"proxy": "http://localhost:5000"`;

const portCode = `const port = process.env.PORT || 5000;`;


const BlogPost = () => (
    <BlogPostLayout title='Proxying'>
        <h1>Proxy API Requests From React to Express During Development</h1>
        <p>For an e-commerce application I'm working on I have a React front-end and an Express back-end and I needed some way of testing the Stripe checkout component in the during development.  In production, Heroku provides the Express server with a dynamic port number and when it serves the React application, the front-end can correctly call the following code and have it routed to the appropriate port:</p>

        <Highlight className='javascript'>
            {axiosCode}
        </Highlight>

        <p>However, during development, my Express server and my React application were being served from two separate ports on localhost and I needed a way to ensure that API calls made to my POST endpoint were able to find the correct port.  I needed a proxy:</p>

        <Highlight className='javascript'>
            {proxyCode}
        </Highlight>

        <Highlight className='javascript'>
            {portCode}
        </Highlight>

        <p>By providing the full address of the Express development server through a "proxy" key in the package.json file of the React application, the UI knows to pass all unhandled requests to the Express server for processing.  In production, the Express server uses the PORT variable provided to it by the Heroku dyno, but in development it uses 5000, which is available to React through the proxy.</p>
    </BlogPostLayout>
)

export default BlogPost;