import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return(
    <li className={css.item} key={id + "item"}>
        <span className={css.status + " " + (isOnline ? css.online : css.offline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    );
}

FriendListItem.propTypes = {
    items: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired
    })
}

export default FriendListItem;