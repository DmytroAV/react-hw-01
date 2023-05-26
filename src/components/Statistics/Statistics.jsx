import PropTypes from 'prop-types';
import { Container, Title, StatList, ItemList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ItemList key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </ItemList>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
