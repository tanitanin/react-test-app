import './App.css';
import React from 'react';
import usePersist from './Persist';

function AlertMessage(props) {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [mydata, setMyData] = usePersist("mydata", null);
  
  const changeName = (e)=>{
    setName(e.target.value);
  };
  const changeMail = (e)=>{
    setMail(e.target.value);
  };
  const changeAge = (e)=>{
    setAge(e.target.value);
  };
  const doSubmit = (e)=>{
    const data = {name: name, mail: mail, age: age};
    setMyData(data);
  };

  return (
    <div className='alert alert-primary h5 text-primary'>
      <h5>{props.alert}</h5>
      <h5>{JSON.stringify(mydata)}</h5>
      <table className='table h6'>
        <tbody>
          <tr><th>Name</th><td>{name}</td></tr>
          <tr><th>Mail</th><td>{mail}</td></tr>
          <tr><th>Age</th><td>{age}</td></tr>
        </tbody>
      </table>
      <div className=''>
        <div className='form-group'>
          <label>Name:</label>
          <input type='text' className='form-control' onChange={changeName} />
        </div>
        <div className='form-group'>
          <label>Mail:</label>
          <input type='text' className='form-control' onChange={changeMail} />
        </div>
        <div className='form-group'>
          <label>Age:</label>
          <input type='text' className='form-control' onChange={changeAge} />
        </div>
        <button className='btn btn-primary' value='Click' onClick={doSubmit}>
          Click
        </button>
      </div>
    </div>
  );
}

function CardMessage(props) {
  const [counter, setCounter] = useCounter();
  const incrementCount = ()=>{
    setCounter();
    props.setCard("card counter: " + counter + " count.");
  };
  return(
    <div className='card p-3 h5 border-primary text-center'>
      <h5>{props.card}</h5>
      <button className='btn btn-primary' onClick={incrementCount}>
        Click
      </button>
    </div>
  );
}

function Message(props) {
  return (
    <div className='alert alert-primary h5 text-primary'>
      <h5>{props.msg}</h5>
    </div>
  );
}

function useCounter() {
  const [num, setNum] = React.useState(0);
  const count = () => {
    setNum(num + 1);
  }
  return [num, count];
}

function App() {
  const [message] = React.useState("Welcome to Hooks.");
  const [count, setCount] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("This is alert message!");
  const [cardMsg, setCardMsg] = React.useState("This is card message!");

  const [val, setVal] = React.useState(0);
  const [msg, setMsg] = React.useState("set value...");

  const doClick=(e)=>{
    setCount(count + 1);
  };
  const changeFlag=(e)=>{
    setFlag(e.target.checked);
  };
  const changeAlertMsg=(e)=>{
    setAlertMsg(e.target.value);
  };

  const changeVal = (e)=>{
    setVal(e.target.value);
  }
  React.useEffect(() => {
      let total = 0;
      for (let i=0; i<=val; i++) {
        total += i;
      }
      setMsg("total: " + total + ".");
  }, [val]);

  return (
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <div className='alert alert-primary text-center'>
          <p>{message}</p>
        </div>
        {flag?
          <div>
            <p className='h5 mb-3'>{count}</p>
            <button className='btn btn-primary' onClick={doClick}>
              Click
            </button>
          </div>
        :
          <div>
            <p className='h5 mb-3 text-left text-primary'>{count}</p>
            <button className='btn btn-primary' onClick={doClick}>
              Click
            </button>
          </div>
        }
        <div>
          <input type='checkbox' className='form-check-input' id='check1' onChange={changeFlag} />
          <label className='form-check-label' htmlFor='check1'>
            Change form style.
          </label>
        </div>
        <AlertMessage alert={alertMsg} setAlert={setAlertMsg} />
        <CardMessage card={cardMsg} setCard={setCardMsg} />
        <div>
          <label>input:</label>
          <input type='text' onChange={changeAlertMsg}/>
        </div>
        <div>
          <p>{cardMsg}</p>
          <p>{alertMsg}</p>
        </div>
        <Message msg={msg} />
        <div className='form-group'>
          <label>number:</label>
          <input type='number' className='form-control' onChange={changeVal}/>
        </div>
      </div>
    </div>
  )
}

export default App;
