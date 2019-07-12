import styled from 'styled-components';

const Button = styled.button`
  font-size: 22px;
  margin: ${({ margin }) => margin || '0'};
  color: ${({ color }) => color || 'black'};
  background: none;
  border: none;
  cursor: pointer;
`;

export default Button;
