import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
let FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
            {friends.map(item => (
                <FriendListItem key={item.id} id={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
            ))}
        </ul>
    );
}

export default FriendList;