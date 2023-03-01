import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({ stats, title }) {
  return <section className={css.statistics}>

    <div className={css.title__div}>
      {title && <h2 className={css.title}>{title}</h2>}
    </div>

     <ul className={css.statList}>
         {stats.map(({id, label, percentage}) => (
          <li key={id} className={`${css.item} ${css[id]}`}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
          </li>))}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};