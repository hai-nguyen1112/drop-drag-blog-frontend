import React, {Component} from 'react'
import './App.css'
import Target from './components/Target'
import Item from './containers/Item'

class App extends Component {
  constructor() {
    super()
    this.state = {
      item: {},
      draggedItem: {},
      droppedItem: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/items')
    .then(res => res.json())
    .then(items => {
      this.setState({item: items[0]})
    })
  }

  handleUpdateDraggedItemState = item => {
    console.log("dragged item: ", item)
    this.setState({draggedItem: item})
  }

  handleDropOfItemOnTarget = () => {
    let draggedItem = JSON.parse(JSON.stringify(this.state.draggedItem))
    this.setState({droppedItem: draggedItem})
    this.setState({draggedItem: {}})
    this.setState({item: {}})
  }

  render() {
    return (
      <div className="container" id="app-container">
        <Target
          droppedItem={this.state.droppedItem}
          handleDropOfItemOnTarget={this.handleDropOfItemOnTarget}
        />
        <Item
          item={this.state.item}
          handleUpdateDraggedItemState={this.handleUpdateDraggedItemState}
        />
      </div>
    )
  }
}

export default App
