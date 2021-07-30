import styled from 'styled-components';


const PostWrapper = styled.div`
    padding: 6rem 2rem;
    max-width: 800px;

    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 1.5;
    }

    p {
        line-height: 1.5;
    }

    pre {
        max-width: 70%;

        @media screen and (max-width: 800px) {
            max-width: unset;
        }
    }
`;

export default PostWrapper;