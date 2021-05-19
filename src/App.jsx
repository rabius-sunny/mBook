import './App.css'
import Login from './components/Auth/Login'
import ContactBar from './components/ContactBar/ContactBar'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import SIdebar from './components/Sidebar/SIdebar'
import { useStateValue } from './Context/userProvider'

const App = () => {

  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {
        !user ? <Login /> :
          <>
            <Header />
            <div className="appBody">
              <SIdebar />
              <Feed />
              <ContactBar />
            </div>
          </>
      }
    </div>

  )
}

export default App
