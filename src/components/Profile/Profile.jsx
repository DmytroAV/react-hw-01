import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Info,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Info>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Info>
        <Info>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Info>
        <Info>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Info>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
