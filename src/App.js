import React, { Component } from 'react'
import Container from './components/Containers/Container'
import './App.css'
class App extends Component {
  state = {
    farms: [],
    search: ''
  }
  componentDidMount(){
    fetch('http://localhost:3000/farms')
      .then(response => response.json())
      .then(result => this.setState({ farms: result}))
  }
  filteredFarms = () => {
    return this.state.farms.filter(farm => {
      return farm.item.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }
  
  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header> fruit farm </header>
        <form className='search'>
          <label>Search by fruit</label><br />
          <input type='text' 
            name='search' 
            onChange={this.handleChange} 
            value={this.state.search} 
            placeholder='Peaches, apples, grapes...' 
          />
        </form>
        {this.state.farms.length > 0 
          ? <Container filteredFarms={this.filteredFarms()} /> 
          : null}
      </div>
    )
  }
  
}
export default App