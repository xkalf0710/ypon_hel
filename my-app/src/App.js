import './App.css';
import { Component } from 'react';
import logo from './logo.svg';


class App extends Component{

  constructor(){
    super();
    this.state = {
      name: {firstname: 'Nymsuren', lastname: 'Monkherdenekhuyg'},
      company: 'Vulcan'
    }
  }

  render(){
    return(
      <div className="App"> 
      <header className='App-header'> 
         <img src={logo} className='App-logo' alt='logo' />
         <p>Hi {this.state.name}, I work at {this.state.company}</p>
         <button onClick={()=> {
           this.setState(()=> {
             return {
               name: {firstname: "Nymka", lastname: 'Munkh'},
             };
           }, ()=> {console.log(this.state);});
         }}>Change button</button>
      </header>
      </div>     
    );
  }
}

export default App;
