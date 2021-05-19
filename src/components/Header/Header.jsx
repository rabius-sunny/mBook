import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import { SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import './header.css'
import logo from '../../images/logo.png'
import { useStateValue } from '../../Context/userProvider';

const Header = () => {

  const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="headerLeft">
                <img src={logo} alt="fb" />
                <div className="headerInput">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="headerCenter">
                <div className="headerOption headerOption--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="headerOption">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}
export default Header
