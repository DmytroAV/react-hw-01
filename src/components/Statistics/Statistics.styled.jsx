import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  padding: 24px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: serif;
  margin: 0 auto;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ItemList = styled.li`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`};
  span {
    font-size: 30px;
    font-family: serif;
    font-weight: 600;
    color: #fff;
  }
`;
