import styled from 'styled-components';


const PostWrapper = styled.div`
    padding: 8rem 2rem 2rem;
    max-width: 800px;

    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 1.5;
    }

    p {
        line-height: 1.5;
    }

    figure {
        margin: 0;
        padding: 0;

        figcaption {
            margin-bottom: -12px;
            font-size: 12px;
            color: grey;
        }
    }

    pre {
        max-width: 70%;

        @media screen and (max-width: 800px) {
            max-width: unset;
        }
    }

    hr {
        margin-top: 36px;
    }
`;

export default PostWrapper;