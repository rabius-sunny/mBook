import classes from './contactBar.module.css'

const ContactBar = () => {
    return (
        <div className={classes.fbIframe}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmuhammadrabi3x%2F&tabs=timeline&width=340&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="1000" scrolling="no" frameborder="0"></iframe>
        </div>
    )
}

export default ContactBar
