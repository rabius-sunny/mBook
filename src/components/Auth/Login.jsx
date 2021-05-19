import './login.css'
import logo from '../../images/logo.png'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase.config.js'
import { useStateValue } from '../../Context/userProvider'
import { actionTypes } from '../../Context/reducer'

const Login = () => {

    const [state, dispatch] = useStateValue()
    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                })
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={logo} alt="logo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={handleSignIn}>Sign In</Button>
        </div>
    )
}

export default Login
