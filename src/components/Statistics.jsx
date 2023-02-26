import PropTypes from 'prop-types';

 export default function Statistics({stats}) {
 return <section className="statistics">
  <h2 className="title">Upload stats</h2>

     <ul className="stat-list">
         {stats.map(stat => (
          <li key={stat.id} className="">
            <span className="">{stat.label}</span>
            <span className="">{stat.percentage} %</span>
          </li>))}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};