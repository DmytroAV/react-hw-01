import PropTypes from 'prop-types';
import { ContainerList } from './FriendList.styled';

import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ContainerList>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ContainerList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
