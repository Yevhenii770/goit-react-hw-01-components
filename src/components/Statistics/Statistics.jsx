import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

 export default function Statistics({stats}) {
 return <section className={css.section}>
  <h2 className={css.title}>Upload stats</h2>

     <ul className={css.statList}>
         {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage} %</span>
          </li>))}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};