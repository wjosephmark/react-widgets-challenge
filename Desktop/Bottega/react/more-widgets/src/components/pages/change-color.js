import React, { Component } from 'react'

export default class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({color: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.color);
        event.preventDefault();
      }
    
      render() {
        return (
          <div className="app">
            <form onSubmit={this.handleSubmit}>
              <h1 style={{color: this.state.color}}>{this.state.color}</h1>
              <label>
                <input type="text" value={this.state.color} onChange={this.handleChange} />
              </label>
            </form>
          </div>
        );
      }
    }