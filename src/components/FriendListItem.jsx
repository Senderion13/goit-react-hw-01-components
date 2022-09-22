let FriendListItem = ({avatar, name, isOnline, id}) => {
    return(
    <li className="item" key={id + "item"}>
        <span className={isOnline ? "status online" : "status offline"}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
    );
}

export default FriendListItem;