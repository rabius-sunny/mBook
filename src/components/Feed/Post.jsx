import { Avatar } from '@material-ui/core'
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from '@material-ui/icons'
import { useState } from 'react'
import './feed.css'

const Post = ({ profilePic, author, post, image, date }) => {
    const [like, setLike] = useState(0)

    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic}
                    className="postAvatar" />
                <div className="postInfo">
                    <h3>{author}</h3>
                    <p>{date.toLocaleString()}</p>
                </div>
            </div>
            <div className="postBottom">
                <p>{post}</p>
            </div>
            <div className="postImage">
                {image && <img src={image} alt="postImg" />}
            </div>
            <div className="postButtons">
                <div className="postButton">
                    <button className="like" onClick={() => setLike(like + 1)}>
                        <ThumbUp />
                        <p>Like <span style={{ paddingLeft: '5px' }}>{like}</span></p>
                    </button>
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
