import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    
  }
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
 // componentDidMount() ashiglan database holboj bolnoo

  componentDidMount(){
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(()=> {
      return {monsters: users};
    }));
  }
  onSearchChange = (event)=> {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  };

  render(){
    
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monsters)=> {
      return monsters.name.toLocaleLowerCase().includes(searchField);
     });

    return(
      <div className='App'> 

      <h1 className='app-title'>Monsters Rolodex</h1>
         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
         <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
