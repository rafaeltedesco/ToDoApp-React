import React, {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      typed: 0,
      items: ["teste"]
    }
    this.max = 25

    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delete = this.delete.bind(this)
  }

  handleInput(ev) {
    let state = this.state
    let value = ev.target.value
    state.task = value
    state.typed = value.length
    if (state.typed <= this.max) {
      this.setState(state) 
    }
  }

  addItem(ev) {
    ev.preventDefault()
    let state = this.state
    if (state.task.length >=3) {
      state.items.push(state.task)
      state.task = ''
    }
    else {
      alert('Cannot insert this item!')
      state.task = ''
    }
    state.typed = 0
    this.setState(state)
  }

  delete(idx) {
    let state = this.state
    state.items = state.items.filter((item, ix) => ix != idx )
    this.setState(state)

  }

  render() {
    return (
        <div>
          <div>
            {this.state.typed}/{this.max}
          </div>
          <input type="text" value={this.state.task} onChange={this.handleInput} placeholder="Your task here..." />
          <a onClick={this.addItem}>Add Task</a>
          <div>
            <ul>
              {this.state.items.map((item, idx)=> {
                return (
                  <li key={idx}>
                    {item} <a onClick={()=> {this.delete(idx)}} className="delete">&#10006;</a>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
    )
  }
} 



export default App;