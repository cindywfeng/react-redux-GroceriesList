// useRef allows us to reference elements  inside our HTML inputs
//to store our data in a local storage we use useEffect

import React, { useState, useRef, useEffect } from "react";
import ItemList from './Components/ItemList';
const { v4: uuidv4 } = require('uuid');
import './styles/App.css'

const LOCAL_STORAGE_KEY = 'groceriesListApp.items'


// class App extends React.Component {
function App(){
  //object destructuring//
  //items is every item in our list, setItem is a function that allows us to update items//
  const [items, setItems] = useState([])

  //with the below we have access to the ref in input text box
  const itemNameRef = useRef()

  //Saving our items so they don't disappear on refresh, we use useEffect from react//
  useEffect(() => {
    //we need to parse it using json//
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems)
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])


// allow toggling items from checked to unchecked
  function toggleItem(id) {
    const newItems = [...items]
    const item = newItems.find(item => item.id === id)
    item.complete = !item.complete
    setItems(newItems)
  }


  function handleAddItem(e) {
    const name = itemNameRef.current.value
    if (name === "") return 
    setItems(prevItem => {
      return [...prevItem, { id: uuidv4(), name: name, complete: false}]
    })
    console.log(name)
    //to clear out the value in text box after submitting
    itemNameRef.current.value = null

  }
  
  function handleClearItems() {
    const newItems = items.filter(items => !items.complete)
    setItems(newItems)
  }


    return (
      <div id="groceriesList">
        <h1>Groceries List</h1>
        {/* items is our prop  */}
        <h3>Add item: </h3>
        <input ref={itemNameRef} type="text"></input>

        <button id="AddButton" onClick={handleAddItem}>Add</button>
        <button id="ClearButton" onClick={handleClearItems}>Clear</button>
        <h5>* clear checked items using clear</h5>
        <ItemList items={items} toggleItem={toggleItem}/>
        <div id="checkStatus">{items.filter(items => !items.complete).length} unchecked on your Groceries List</div>

      </div>
        
    );
  
}
export default App;
