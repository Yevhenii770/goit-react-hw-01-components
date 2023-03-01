import PropTypes from 'prop-types';
// import css from './Statistics.module.css'
import {Section, Title, DivTitle, StatList, Item, Label, Percentage} from './Statistics.styled'

export default function Statistics({ stats, title }) {
  return <Section>

    <DivTitle>
      {title && <Title>{title}</Title>}
    </DivTitle>

     <StatList>
         {stats.map(({id, label, percentage}) => (
          <Item key={id} >
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