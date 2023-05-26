import PropTypes from 'prop-types';
import { CardFriend, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <CardFriend className="item">
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </CardFriend>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
