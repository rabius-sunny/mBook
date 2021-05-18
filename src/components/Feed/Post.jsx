import { Avatar } from '@material-ui/core'
import './feed.css'

const Post = ({ proPic, image, username, timestamp, post }) => {
    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={proPic}
                    className="postAvatar" />
                <div className="postInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
