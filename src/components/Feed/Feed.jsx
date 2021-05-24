import CreatePost from './CreatePost'
import './feed.css'
import Post from './Post'
import Stories from './Stories'
import { useEffect, useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://mbook-backend.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err.message))
    }, [])
    console.log(posts)

    return (
        <div className="feed">
            <Stories />
            <CreatePost />
            {
                posts.map(singlePost => {
                    const { _id, profilePic, author, post, image, date } = singlePost
                    return <Post
                        key={_id}
                        profilePic={profilePic}
                        author={author}
                        post={post}
                        image={image}
                        date={date}
                    />
                })
            }
        </div>
    )
}

export default Feed
