import styled from '@emotion/styled';

export const Table = styled.table`
  display: grid;
  width: 800px;
  background-color: aliceblue;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'Thead'
    'Tbody';

  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Thead = styled.thead`
  grid-area: Thead;
  display: grid;
  width: 100%;

  Tr:nth-of-type(1) {
    background-color: #00bdd6;
  }
`;

export const Tbody = styled.tbody`
  grid-area: Tbody;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  justify-content: space-between;
`;

export const Tr = styled.tr`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  height: 50px;
  background-color: #fafafa;

  :nth-of-type(2n) {
    background-color: #ecf2f4;
  }
`;

export const Th = styled.th`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fafafa;

  :nth-of-type(2n) {
    border-right: 1px solid #7ee7f7;
    border-left: 1px solid #7ee7f7;
  }
`;

export const Td = styled.td`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  color: #7e8085;

  :nth-of-type(2n) {
    border-right: 2px solid #e7e7e7;
    border-left: 2px solid #e7e7e7;
  }
`;
