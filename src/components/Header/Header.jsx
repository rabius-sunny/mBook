import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChatIcon from '@material-ui/icons/Chat';
import { SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, Badge, IconButton } from '@material-ui/core';
import classes from './header.module.css'
import logo from '../../images/logo.png'
import { useStateValue } from '../../Context/userProvider';

const Header = () => {

    const [{ user }, dispatch] = useStateValue()
    let photo = sessionStorage.getItem('profilePic')
    let author = sessionStorage.getItem('username')

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <img src={logo} alt="fb" />
                <div className={classes.headerInput}>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className={classes.headerCenter}>
                <div className={classes.headerOption} style={{ borderBottom: '4px solid #2e81f4' }} >
                    <HomeIcon fontSize="large" className="active" />
                </div>
                <div className={classes.headerOption}>
                    <FlagIcon fontSize="large" />
                </div>
                <div className={classes.headerOption}>
                    <Badge badgeContent={4} color="secondary">
                        <SubscriptionsOutlined fontSize="large" />
                    </Badge>
                </div>
                <div className={classes.headerOption}>
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className={classes.headerOption}>
                    <Badge badgeContent={'9+'} color="secondary">
                        <SupervisedUserCircle fontSize="large" />
                    </Badge>
                </div>
            </div>
            <div className={classes.headerRight}>
                <div className={classes.headerInfo}>
                    <Avatar src={photo || user.photoURL} />
                    <h4>{author || user.displayName}</h4>
                </div>
                <i>
                    <AddIcon />
                </i>
                <i>
                    <ChatIcon />
                </i>
                <i>
                    <NotificationsIcon />
                </i>
                <i>
                    <ArrowDropDownIcon />
                </i>
            </div >
        </div >
    )
}
export default Header
