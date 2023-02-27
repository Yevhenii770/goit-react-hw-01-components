import PropTypes from 'prop-types';

export default function FriendListItem({friends}) {
    return <ul className="friend-list">
   { 
        friends.map(friend => (
            < li key={friend.id} className="item">
                <span className={friend.isOnline.toString()}></span>
                <img className="avatar" src={friend.avatar} alt="alt" width="48" />
                <p className="">{friend.name}</p>
            </li>
        ))}
         </ul>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
