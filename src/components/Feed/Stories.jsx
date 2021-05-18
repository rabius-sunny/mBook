import Story from "./Story"
import './feed.css'
import ocean from '../../images/ocean.jpg'
import ocean2 from '../../images/ocean2.jpg'
import ocean3 from '../../images/ocean3.jpg'
import ocean4 from '../../images/ocean4.jpg'
import pro from '../../images/pro.jpg'

const Stories = () => {
    return (
        <div className="stories">
            <Story image={ocean} title="Rabius Sunny" src={pro} />
            <Story image={ocean3} title="Rabius Sunny" src={pro} />
            <Story image={ocean2} title="Rabius Sunny" src={pro} />
            <Story image={ocean4} title="Rabius Sunny" src={pro} />
        </div>
    )
}

export default Stories
