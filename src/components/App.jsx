import Profile from "./Profile";
import user from "../user.json";
import Statistics from "./Statistics";
import data from "../data.json";
import FriendList from "./FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../transactions.json";
export const App = () => {
  return (
    <>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
