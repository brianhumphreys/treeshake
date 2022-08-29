import logo from './logo.svg';
import './App.css';
// import { funcA } from 'user-library-rollup';
// import { funcA } from 'user-library-webpack';
import {Card} from 'user-library-rollup-lit';
// import {funcA} from 'user-library-rollup-lit';


function App() {
  // console.log(sum(1,2));
  // console.log(funcA());
  return (
    <div className="App">
      <Card>Card</Card>
      {/* <DetailedCard>Detailed Card</DetailedCard> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
