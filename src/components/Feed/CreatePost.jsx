import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons'
import { useState } from 'react'
import { useStateValue } from '../../Context/userProvider'
import './feed.css'

const CreatePost = () => {

    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (input !== '' || image !== '') {
            const post = {
                post: input,
                image: image,
                author: user.displayName,
                profilePic: user.photoURL,
                date: new Date()
            }
            fetch('https://mbook-backend.herokuapp.com/create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })

            setImage('')
            setInput('')
        } else alert('Please write some text or add an image')

    }
    return (
        <div className="createPost">
            <div className="createPostTop">
                <Avatar src={user.photoURL} />
                <form>
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className="createPostInput"
                    />
                    <input
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        placeholder="image" />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="createPostBottom">
                <div className="postOption">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="postOption">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="postOption">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Live Video</h3>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
