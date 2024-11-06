import react from 'react'
import LoginSignupForm from './Components/LogIn/LoginSignupForm'
import NavComponent from './Components/Nav/NavComponent'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <NavComponent />
      <Home/>
      <LoginSignupForm/>
      <Profile/>
      <Footer/>
    </>
  )
}

export default App
