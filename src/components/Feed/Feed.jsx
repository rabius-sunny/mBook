import CreatePost from './CreatePost'
import './feed.css'
import Post from './Post'
import Stories from './Stories'
import pic from '../../images/pro.jpg'
import ocean from '../../images/ocean.jpg'
import ocean3 from '../../images/ocean3.jpg'

const Feed = () => {
    return (
        <div className="feed">
            <Stories />
            <CreatePost />
            <Post
                proPic={pic}
                username="Rabius Sunny"
                post="This is a post"
                timestamp={new Date()}
            />
            <Post
                proPic={pic}
                username="Rabius Sunny"
                post="This is a post"
                image={ocean}
                timestamp={new Date()}
            />
            
            <Post
                proPic={pic}
                username="Rabius Sunny"
                post="This is a post"
                image={ocean3}
                timestamp={new Date()}
            />
        </div>
    )
}

export default Feed
