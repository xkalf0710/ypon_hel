import { Component } from 'react';
import './App.css';
class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log("constructor");
  }
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
 // componentDidMount() ashiglan database holboj bolnoo

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(()=> {
      return {monsters: users};
    }, 
    ()=> {
      console.log(this.state);
    }));
  }
  onSearchChange = (event)=> {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  };

  render(){
    console.log('render');
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monsters)=> {
      return monsters.name.toLocaleLowerCase().includes(searchField);
     });

    return(
      <div className='App'> 
      <input className='search-box' type='search' placeholder='search monsters' 
      onChange={
      onSearchChange
      }/>
      {/* mapping arrays to elements  */}
        {filteredMonsters.map((monsters) => {
           return (
             <div key={monsters.id}>
               <h1>{monsters.name}</h1> 
               </div>
           );
        })
        }
        
      </div>
    );
  }
}

export default App;
