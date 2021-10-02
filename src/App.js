import user from './data/user.json';
import datastat from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from "./components/Profile/Profile";
import StatisticsList from './components/statistics/StatisticsList';
import FriendsList from './components/Friends/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


const App = () => {
    return (
        <>
            <Profile 
                name={user.names}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <StatisticsList title="Upload stats" items = {datastat}/>
            <FriendsList friends={friends}/>
            <TransactionHistory transactions={transactions}/>
        </>
    );
}

export default App;
// export default App;
