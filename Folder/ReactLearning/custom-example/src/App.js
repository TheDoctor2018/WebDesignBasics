import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

function App(props) {
  return (
    /*
    <div className="App">
      <Nav />
      </div>
      */

    <h1> {props.title}</h1>
 
  );
}

export default App;
