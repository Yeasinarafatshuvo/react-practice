import React from 'react';
import './App.css';
import Card from './Card';
import Data from './data.json';
function App() {
  let items = [];
  items = Data.map((item, index) => <Card key={index} titleText={item.title} description={item.desc}/>)
    
  return (
    <div className="App">
        {items}
    </div>
  );
}

export default App;
