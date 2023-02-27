import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export default function FriendListItem({friends}) {
    return <ul className={css.friendList}>
   { 
        friends.map(friend => (
            < li key={friend.id} className={css.item}>
                <span className={friend.isOnline ? css.online : css.offline}></span>
                <img className="avatar" src={friend.avatar} alt="alt" width="48" />
                <p className="">{friend.name}</p>
            </li>
        ))}
         </ul>
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
