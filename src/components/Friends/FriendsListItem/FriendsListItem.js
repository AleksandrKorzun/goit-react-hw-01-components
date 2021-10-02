import PropTypes from 'prop-types';
import style from '../Friends.module.css';
import defaultImage from '../../Profile/default.jpg';

const FriendsListItem = ({status,avatar = defaultImage, name}) => {
    return (
        <>
            <span 
                className={style.status} style={status ? {backgroundColor: "green"}:{backgroundColor: "red"}}
            ></span>
            <img className={style.avatar} src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </>
    );
}

export default FriendsListItem;

FriendsListItem.propType ={
    status: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}