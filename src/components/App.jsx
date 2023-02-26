import user from '../data/user.json'
import data from '../data/data.json'
import friendsData from '../data/friends.json'
import transactions from '../data/transactions.json'

import Profile from './Profile'
import Statistics from './Statistics'
import FriendListItem from './FriendListItem'
import TransactionHistory from './TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}     
      />

      <Statistics title="Uploads stats" stats={data} />

      <FriendListItem friends={friendsData} />

      <TransactionHistory items={transactions} />
      
    </div>
  );
};