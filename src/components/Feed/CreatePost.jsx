import axios from 'axios'
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons'
import { useState } from 'react'
import { useStateValue } from '../../Context/userProvider'
import db from '../../firebase.config'
import firebase from 'firebase'
import './feed.css'

const CreatePost = () => {

    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    let photo = sessionStorage.getItem('profilePic')
    let name = sessionStorage.getItem('username')

    const handleImage = e => {
        const image = new FormData();
        image.set('key', '93806700d73c6e0cf4767ba7d1804c67');
        image.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            image)
            .then(res => {
                setImage(res.data.data.display_url);
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (input !== '' || image !== '') {
            db.collection('posts')
                .add({
                    post: input,
                    image: image,
                    username: name ? name : user.displayName,
                    profilePic: photo ? photo : user.photoURL,
                    timpstamp: firebase.firestore.FieldValue.serverTimestamp()
                })

            setImage('')
            setInput('')
        } else alert('Please write some text or add an image')

    }

    return (
        <div className="createPost">
            <div className="createPostTop">
                <Avatar src={photo || user.photoURL} />
                <form>
                    <div style={{ display: 'flex', alighItem: 'center' }}>
                        <textarea
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            placeholder={`What's on your mind, ${name || user.displayName}?`}
                            className="createPostInput"
                        />
                        <input
                            type="file"
                            className="file"
                            onChange={handleImage}
                            placeholder="image" />
                    </div>
                </form>
            </div>
            <div className="postBtn"><button onClick={handleSubmit}>Post</button></div>
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
