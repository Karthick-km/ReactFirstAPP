 import React , {Component} from 'react';
import { CardList } from './Components/Card-list/Card-List-Component';
import './App.css';
import {  SearchBox } from './Components/SearchBox/Searchbox.Component';

class App extends Component{

  constructor() {
    super();
    this.state = { 
      Monsters  :  []
      ,searchField : ''
    }
  }

  componentDidMount ()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (user => this.setState ( { Monsters : user}))
  }
    
render() {

  const { Monsters , searchField} =  this.state;

  const filteredData = Monsters.filter ( monster => monster.name.toLowerCase().includes (searchField.toLowerCase()) )
   
  

  return (
    <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder = 'Search Monsters'   handlechange = {e => this.setState({ searchField : e.target.value})} >
            </SearchBox>
            <CardList monster = { filteredData } >  
            
                </CardList>
            
  </div>
  );
}
}


export default App;
