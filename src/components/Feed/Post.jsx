import { Avatar, Typography } from '@material-ui/core'
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from '@material-ui/icons'
import { useState } from 'react'
import './feed.css'

const Post = ({ profilePic, username, post, image, timpstamp }) => {
    const [like, setLike] = useState(0)
    console.log(profilePic,username, post, image, timpstamp)

    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic}
                    className="postAvatar" />
                <div className="postInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timpstamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <div className="postBottom">
                <div><Typography style={{ whiteSpace: "pre-line" }} variant="body2" component="p" > {post} </Typography></div>
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
