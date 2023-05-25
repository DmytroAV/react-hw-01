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
`;

export const Location = styled.h5`
  font-weight: 500;
  font-family: serif;
  font-size: 20px;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 0;
  font-family: serif;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  background-color: #e5e5e5;
`;

export const Info = styled.li`
  display: grid;
  justify-items: center;
  width: 100%;
  border: 2px solid #c1c8ce;
  align-items: center;
`;

export const Label = styled.span`
  padding-top: 20px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
`;
