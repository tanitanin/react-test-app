import './App.css';
import React from 'react';
import Rect from './Rect';

let theme = {
  light:{
    styles: {
      backgroundColor: "#f0f9ff",
      color: "#00f",
    },
    head: "bg-promary text-black display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
  dark:{
    styles: {
      backgroundColor: "#336",
      color: "#eef",
    },
    head: "bg-promary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
};
const ThemeContext = React.createContext(theme.light);

class App extends React.Component {
  input = "";
  static contextType = ThemeContext;

  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
    this.state = {
      counter: 0,
      msg: "Hello",
      flg: true,
      max: 10,
    };
    this.doAction = this.doAction.bind(this);
    this.doCheck = this.doCheck.bind(this);
  }
  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: "*** count: " + this.state.counter + ' ***',
      flg: !this.state.flg
    });
  }
  doCheck(event) {
    alert(event.target.value + " is too long. max length is " + this.state.max + "charactors.");
  }
  render() {
    return (
      <div className="App" style={this.context.styles}>
        <h1 className={this.context.head}>React</h1>
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
        <div>
          <Title />
          <Message maxlength={this.state.max} onCheck={this.doCheck} />
        </div>
        <div className={this.context.foot}></div>
      </div>
    )
  }
}

class Title extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.styles}>{this.props.title}</h2>
      </div>
    );
  }
}

class Message extends React.Component {
  static contextType = ThemeContext;

  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  };

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return (
      <div style={this.context.styles}>
        <p className={this.context.text}>{this.props.value}</p>
        <div className="form-group">
          <label>input:</label>
          <input type="text" className="form-control" onChange={this.doChange} />
        </div>
      </div>
    );
  }
}

export default App;
