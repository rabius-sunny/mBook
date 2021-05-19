import { Avatar } from '@material-ui/core'
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from '@material-ui/icons'
import { useStateValue } from '../../Context/userProvider'
import './feed.css'

const Post = ({ proPic, image, username, timestamp, post }) => {

  const [{ user }, dispatch] = useStateValue()

    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={user.photoURL}
                    className="postAvatar" />
                <div className="postInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="postBottom">
                <p>{post}</p>
            </div>
            <div className="postImage">
                <img src={image} alt="" />
            </div>
            <div className="postButtons">
                <div className="postButton">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="postButton">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="postButton">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="postButton">
                    <AccountCircle />
                    <ExpandMore />
                </div>
            </div>
        </div>
    )
}

export default Post
