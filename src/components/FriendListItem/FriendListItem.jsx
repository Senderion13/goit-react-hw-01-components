import css from "./FriendListItem.module.css";

let FriendListItem = ({avatar, name, isOnline, id}) => {
    return(
    <li className={css.item} key={id + "item"}>
        <span className={css.status + " " + (isOnline ? css.online : css.offline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    );
}

export default FriendListItem;