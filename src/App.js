import './App.css';
import React from 'react';
import Rect from './Rect';

class App extends React.Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
    this.state = {
      counter: 0,
      msg: "Hello",
      flg: true,
    };
    this.doAction = this.doAction.bind(this);
  }
  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: "*** count: " + this.state.counter + ' ***',
      flg: !this.state.flg
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>{this.title}</p>
          <p>{this.message}</p>
          <p className='alert alert-dark'>{this.props.msg}</p>
          <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
          <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
          <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />
          {this.state.flg ?
            <div className='alert alert-primary text-right'>
              <p className='h5'>{this.state.msg}</p>
            </div>
          :
            <div className='alert alert-warning text-left'>
              <p className='h5'>{this.state.msg}</p>
            </div>
          }
          <div className='text-center'>
            <button
              className='btn btn-primary'
              onClick={this.doAction}>
              Click
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
