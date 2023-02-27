import css from "../TransactionHistory/TransactionHistory.module.css";
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className={css.capitilize}>{item.type}</td>
            <td className={css.capitilize}>{item.amount}</td>
            <td className={css.capitilize}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};