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
            .orderBy('timpstamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            })
    }, [])
    console.log(posts)

    return (
        <div className="feed">
            <Stories />
            <CreatePost />
            {
                posts.map(singlePost => {
                    const { id, profilePic, username, post, image, timpstamp } = singlePost.data
                    return <Post
                        key={id}
                        profilePic={profilePic}
                        username={username}
                        post={post}
                        image={image}
                        timpstamp={timpstamp}
                    />
                })
            }
        </div>
    )
}

export default Feed
