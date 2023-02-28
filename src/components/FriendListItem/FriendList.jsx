import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {

    return (
      
        <ul className={css.friendList}> 
            {friends.map(friend => (
        <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
        </li>
      ))}
        </ul>
        
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};