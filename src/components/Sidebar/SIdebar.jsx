import './sidebar.css'
import SidebarRow from './SidebarRow'
import { LocalHospital, EmojiFlags, People, BarChart, Storefront, VideoLibrary, ExpandMore } from '@material-ui/icons'
import pro from '../../images/pro.jpg'
import { useStateValue } from '../../Context/userProvider'

const SIdebar = () => {

    const [{ user }, dispatch] = useStateValue()
    let photo = sessionStorage.getItem('profilePic')
    let name = sessionStorage.getItem('username')

    return (
        <div className="sidebar">
            <SidebarRow src={photo || user.photoURL } title={name || user.displayName} />
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={BarChart} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMore} title="Marketplace" />
        </div>
    )
}

export default SIdebar
