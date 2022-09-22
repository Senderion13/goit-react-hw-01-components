import FriendListItem from "./FriendListItem";
import "./css/FriendList.css";
let FriendList = ({friends}) => {
    return(
        <ul className="friend-list">
            {friends.map(item => (
                <FriendListItem key={item.id} id={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
            ))}
        </ul>
    );
}

export default FriendList;