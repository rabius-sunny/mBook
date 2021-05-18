import { Avatar } from "@material-ui/core"
import './feed.css'

const Story = ({ image, src, title }) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar src={src} className="storyAvatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
