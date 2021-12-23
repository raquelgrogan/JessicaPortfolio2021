import styled from 'styled-components';

export const Div = styled.div`
    position: fixed;
    bottom:1%;
    right:2%;
    border-radius: 15px;
    &:hover {
        box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
        color: #9cc9e3;
        transform: scale(1.2);
        cursor: pointer;
    }
`;