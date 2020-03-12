import styled from 'styled-components';

export const LoaderContainer = styled.div`
  text-align: center;
  margin-top: 25vh;
`;

export const IconContainer = styled.div`
  text-align: center;
  margin-top: 25vh;
  opacity: 0.2;
`;

export const Table = styled.table`
  white-space: nowrap;

  th, td {
    padding: 0.8rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover { background-color: #f5f5f5; }
`;
