import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons'
import { useState } from 'react'
import './feed.css'

const CreatePost = () => {

    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const handleSubmit = e => {
        e.preventDefault()

        setInput('')
        setImage('')
    }
    return (
        <div className="createPost">
            <div className="createPostTop">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="What's on your mind?"
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
