import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render() {
    return (
      <div className="App">
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>{this.title}</p>
          <p>{this.message}</p>
        </div>
      </div>
    )
  }
}

export default App;
