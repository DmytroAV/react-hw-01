import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 100px;
  gap: 5px;
  justify-items: center;
  width: 400px;
  height: 500px;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  display: grid;
  gap: 5px;
  justify-items: center;
  width: 100%;
  margin-top: 25px;
`;

export const Avatar = styled.img`
  width: 250px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #152539;
`;

export const Location = styled.h5`
  font-weight: 600;
  font-family: serif;
  font-size: 20px;
  margin: 0;
  color: #919caa;
`;

export const Tag = styled.p`
  margin: 0;
  font-weight: 600;
  font-family: serif;
  font-size: 20px;
  color: #919caa;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  justify-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  border-top: 3px solid #e8edf3;

  li:nth-child(2n) {
    border-right: 3px solid #e8edf3;
    border-left: 3px solid #e8edf3;
  }
`;

export const Info = styled.li`
  display: grid;
  justify-items: center;
  width: 100%;
  background-color: #f3f6f9;
  align-items: center;
`;

export const Label = styled.span`
  padding-top: 20px;
  font-weight: 600;
  color: #7d8b9c;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #1f3449;
`;
