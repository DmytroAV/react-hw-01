import styled from '@emotion/styled';

export const ContainerList = styled.ul`
  display: grid;
  gap: 10px;
  justify-content: center;
  width: 600px;
  list-style: none;
  padding: 20px;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const CardFriend = styled.li`
  display: grid;
  grid-template-columns: 70px;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  width: 400px;
  height: 100px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #fafafa;
`;

export const Status = styled.span`
  justify-self: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return `#fff`;
    }
  }};
`;

export const Avatar = styled.img`
  width: 80px;
  justify-self: center;
  background-color: #9fc5c6;
  border-radius: 20%;
`;

export const Name = styled.p`
  justify-self: start;
  font-size: 30px;
  font-weight: 700;
`;
