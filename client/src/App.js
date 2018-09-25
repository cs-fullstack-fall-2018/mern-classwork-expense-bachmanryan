import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://us-east-1.tchyn.io/snopes-production/uploads/2017/09/money_stack_fb.jpg?resize=542%2C305" />
          <h1 className="App-title">Welcome to the Bank of Ryan</h1>
        </header>
        <th>
            <tr>
                <label>Name:
                    <input type="text" placeholder="Enter Name"/>
                </label>
                <label>Password:
                    <input type="text" placeholder="Enter Password" />
                </label>
                <label>Balance:
                    <input type="text" placeholder="Enter Balance"/>
                    <button>Submit</button>
                </label>
            </tr>
        </th>
          <h2>The List of Accounts Are Below:</h2>
      </div>
    );
  }
}

export default App;
