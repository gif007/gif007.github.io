import styled from 'styled-components';

export const SectionWrapper = styled.section`
    height: ${props => props.height || '85vh' };
    background-color: ${props => props.color || 'white'};
    background-image: url(${props => props.bg ? props.bg.image : '' });
    background-repeat: no-repeat;
    background-position: ${props => props.bg ? props.bg.position : ''};
    padding: 0 6rem;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};


    @media screen and (max-width: 800px) {
        padding: 2rem;
        justify-content: center;
    }
`;