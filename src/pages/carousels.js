import React from 'react';

import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/stackoverflow-dark.css';

import BlogPostLayout from '../components/blog-post-layout/blog-post-layout.component';

const ThreeSlider = `const gutterAndWidth = gutter + componentWidth;
const leftBoundary = gutter;
const rightBoundary = gutterAndWidth - ((children.length - 3) * gutterAndWidth);

const [left, setLeft] = useState(gutter);

const goLeft = () => {
    if (left >= leftBoundary) {
        return;
    }
    setLeft(left + gutterAndWidth);
}

const goRight = () => {
    if (left <= rightBoundary) {
        return;
    }
    setLeft(left - gutterAndWidth);
}

    
return (
        <CarouselWrapper>
            <LeftButton
                left={left}
                boundary={leftBoundary}
                onClick={goLeft}
            >
                &#9665;
            </LeftButton>

            <SlideShowContainer
                componentWidth={componentWidth}
                componentHeight={componentHeight}
                gutter={gutter}
            >
                <Row left={left}>
                    {
                        children.map((child, index) => {

                            return (
                                <ContentWrapper
                                    key={index}
                                    componentWidth={componentWidth}
                                    componentHeight={componentHeight}
                                    gutter={gutter}
                                >
                                    {child}
                                </ContentWrapper>
                            )
                        })
                    }
                </Row>
            </SlideShowContainer>

            <RightButton
                left={left}
                boundary={rightBoundary} 
                onClick={goRight}
            >
                &#9655;
            </RightButton>
        </CarouselWrapper>
)
};`;

const SingleSlider = `const [index, setIndex] = useState(0);

const goLeft = () => {
    if (index === 0) {
        setIndex(children.length - 1);
        return;
    }
    setIndex(index - 1);
}

const goRight = () => {
    if (index === children.length - 1) {
        setIndex(0);
        return;
    }
    setIndex(index + 1);
}

const handleOnClick = (n) => {
    setIndex(n);
}

return (
<SingleCarouselContainer componentHeight={componentHeight}>
    <Left onClick={goLeft}>&#9665;</Left>
    {children[index]}
    <DotsContainer>
        {
            children.map((child, i) => {
                if (index === i) {
                    return <Dot key={i} onClick={() => handleOnClick(i)}>&#9679;</Dot>
                }
                return <Dot key={i} onClick={() => handleOnClick(i)}>&#9675;</Dot>
            })
        }
    </DotsContainer>
    <Right onClick={goRight}>&#9655;</Right>
</SingleCarouselContainer>  
)};`;

const BlogPost = () => (
    <BlogPostLayout title='Proxying'>
        <h1>Variations on a Carousel</h1>
        <p>While working on a proposal for a travel agency website I decided that I wanted to come up with a couple of different designs for a carousel component.</p>
        
        <p>I originally knew that I wanted a style that could show three cards at a time with the ability to move one card in either direction without looping around:</p>

        <figure>
            <figcaption>triple-carousel.component.js</figcaption>
            <Highlight className='javascript'>
                {ThreeSlider}
            </Highlight>
        </figure>
        
        <p>When I considered its responsivity in regards to mobile designs I was discouraged by the thought of simply scaling it down, and decided instead to create an alternative for displaying a single card.</p>

        <p>The single-card design would be able to loop infinitely in either direction while tracking its position in the array of cards by way of a set of dots which also served as hot links:</p>

        <figure>
            <figcaption>single-carousel.component.js</figcaption>
            <Highlight className='javascript'>
                {SingleSlider}
            </Highlight>
        </figure>

    </BlogPostLayout>
)

export default BlogPost;