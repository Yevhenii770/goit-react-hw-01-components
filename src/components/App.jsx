import user from '../data/user.json'
import data from '../data/data.json'
import friendsData from '../data/friends.json'
import transactions from '../data/transactions.json'

import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendListItem from './FriendListItem/FriendListItem'
import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
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
      
    </>
  );
};