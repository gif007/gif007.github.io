import styled from 'styled-components';

export const SectionWrapper = styled.section`
    height: ${props => props.height || '60vh' };
    background-color: ${props => props.color || 'white'};
    padding: 0 10rem;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};


    @media screen and (max-width: 800px) {
        padding: 2rem;
        justify-content: center;
    }
`;