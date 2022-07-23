import './App.css'
import { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import InputForm from './components/InputForm/InputForm'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div>
        <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <div> 
            <Logo />
            <InputForm />
          </div>
        : (
            this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
}

export default App
