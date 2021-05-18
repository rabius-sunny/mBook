import CreatePost from './CreatePost'
import './feed.css'
import Post from './Post'
import Stories from './Stories'

const Feed = () => {
    return (
        <div className="feed">
            <Stories />
            <CreatePost />
            <Post />
        </div>
    )
}

export default Feed
