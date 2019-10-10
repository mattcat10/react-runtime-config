import * as React from 'react';
import './App.css';

import logo from './logo.svg';

export const MyComponent = () => {
  const { apiUrl } = window['runConfig'];
  return (
    <div>Runtime config apiUrl: {apiUrl}</div>
  )
}


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
