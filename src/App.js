import React, { Component } from 'react';
import Groceries from './Groceries.js';
import GroceriesList from './GroceriesList.js';

class App extends Component {
  state={
    groceries:groceries
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
      }
  render() {
    return (
      <div>
        <Groceries />
        <GroceriesList/>
        <div id="title">Groceries List</div>
        
      </div>
    );
  }
}

export default App;