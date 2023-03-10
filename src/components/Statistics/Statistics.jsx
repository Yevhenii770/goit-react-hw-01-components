import { Section, Title, DivTitle, StatList, Item, Label, Percentage } from './Statistics.styled'
import PropTypes from 'prop-types';

export default function Statistics({ stats, title }) {
  console.log(stats)
  return <Section>

    <DivTitle>
      {title && <Title>{title}</Title>}
    </DivTitle>

    <StatList>
      
      {stats.map(({id, label, percentage}) => (
        <Item key={id} color={label}>
          <Label>{label}</Label>
          <Percentage>{percentage} %</Percentage>
        </Item>))}
  </StatList>
</Section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};