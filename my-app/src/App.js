// import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//useState => функц доторх төлөвийн хувьсагчийг зарлах боломжийг олгодог. 
//Нэг useState() нь зөвхөн нэг төлөвийн хувьсагчийг зарлахад ашиглагдах боломжтой гэдгийг тэмдэглэх нь зүйтэй.
//useEffect => useEffect нь дүрслэл болгон дээр ажилладаг. Энэ нь тоолуур солигдоход өөр нөлөө үзүүлэх рэндэр гарч ирнэ гэсэн үг.
//Бид үргэлж массив авдаг хоёр дахь параметрийг оруулах ёстой. Сонголтоор бид энэ массив дахь useEffect-ийн хамаарлыг дамжуулж болно.

import {useState, useEffect} from 'react';

import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState('a'); //value, setvalue 
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  

  useEffect(() => {
    console.log('effect fired');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => 
  setMonsters(users));
  }, []);


  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is string');
  }, [monsters, searchField]);

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className='App'> 
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'>
        </SearchBox>
       
        <CardList monsters={filteredMonsters}/>
    </div>
  );
}
export default App;
