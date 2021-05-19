import { Avatar } from '@material-ui/core'
import './sidebar.css'
const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
