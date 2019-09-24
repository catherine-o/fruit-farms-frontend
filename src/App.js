import React, { Component } from 'react'
import Container from './components/Containers/Container'
import './App.css'

class App extends Component {
  state = {
    farms: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/farms')
      .then(response => response.json())
      .then(result => this.setState({ farms: result}))
  }


  render() {
    return (
      <div className="App">
        {this.state.farms.length > 0 ? <Container farms={this.state.farms} /> : null}
      </div>
    )
  }
  
}

export default App
