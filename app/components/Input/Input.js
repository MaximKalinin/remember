// @flow
import styled from 'styled-components';

const Input = styled.input`
    padding: 11px;
    font-size: 20px;
    background: ${({ error }) => error && '#FFE2E2' || '#ECECEC'};
    border: none;
    &:focus {
      background: #E2F0FF;
    }
`;

export default Input;
