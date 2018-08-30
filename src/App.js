import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';

class App extends Component {
  state = {
    background: '#000',
  };

  handleChangeComplete = (color) => {
    this.setState({
      background: color.hex
    });
    console.log(this.state.background)
  };

  render() {
    const dropzoneStyle = {
      color: this.state.background,
    };
    const borderStyle = {
      border: '3px solid' + this.state.background,
    }
    return (
      <div style={borderStyle} className="main-wraper">
        <h1 style={dropzoneStyle}>React Js Color</h1>
        <h3 style={dropzoneStyle}>Picker Application</h3>
        <p  style={dropzoneStyle}><strong>Developed by: Rizwan</strong></p>
        <SketchPicker 
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    )
  }
}

export default App;
