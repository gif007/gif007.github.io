import styled from 'styled-components';

const PostsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;

    li {
        padding: 0;
        margin: 0;
        font-size: 18px;
    }

    li + li {
        margin-top: 12px;
    }
`;

export default PostsWrapper;