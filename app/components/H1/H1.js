import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 26px;
    color: ${({ color }) => color || 'black'};
    margin: ${({ margin }) => margin || '0'};
`;

export default H1;
