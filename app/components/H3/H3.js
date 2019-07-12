import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 22px;
    color: ${({ color }) => color || 'black'};
    margin: ${({ margin }) => margin || '0'};
`;

export default H3;
