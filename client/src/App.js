import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from "./component/AppNavbar";
import ShoppingList from "./component/ShoppingList";
function App() {
  return (
    <div className="App">
    <AppNavBar />
    <ShoppingList />
    </div>
  );
}

export default App;
