import CreatePost from './CreatePost'
import './feed.css'
import Post from './Post'
import Stories from './Stories'
import db from '../../firebase.config'
import { useEffect, useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            })
    }, [])

    return (
        <div className="feed">
            <Stories />
            <CreatePost />
            {
                posts.map(singlePost => {
                    const { id, profilePic, username, post, image, timestamp } = singlePost.data
                    return <Post
                        key={id}
                        proPic={profilePic}
                        username={username}
                        post={post}
                        image={image}
                        timestamp={timestamp}
                    />
                })
            }
        </div>
    )
}

export default Feed
