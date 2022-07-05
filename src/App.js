import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import User from './User';
import Hooks from './Hooks';
import HookEffect from './HookEffect';
import HookRef from './HookRef';
import ConditionalComp from './ConditionalComp';
import Courses from './Courses';
import Product from './Product';
import HOC from './HOC';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React JS
      </header>
      <p>End of App Component</p>
      {/* <Home/>
      <Login/>
      <User uname="Ramprasad" unit="LKM" ></User>
      <Hooks/>
      <HookEffect/>
      <HookRef/>
      <ConditionalComp/>
      <Courses/>
      <Product/>
      <HOC/> */}
      <Nav/>
    </div>
  );
}

export default App;
