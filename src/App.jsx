import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import SIdebar from './components/Sidebar/SIdebar'
const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="appBody">
        <SIdebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  )
}

export default App
